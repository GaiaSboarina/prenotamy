'use strict'

const User = use('App/Models/User');

class SessionController {
  async login ({ auth, request, response, session }) {
    const email = request.input("email");
    const password = request.input("password")
    const type = request.input("type")

    try {
      await auth.attempt(email, password, type)

      let user = await User.findBy("email", email);
      let accessToken = await auth.generate(user);

      if (email != request.input("email") && password != request.input("password") && type != request.input("type")) {
        return response
        .status(401)
        .json({
          "message": "Email o password sbagliati"
        });
      }

      if (email == request.input("email") && password == request.input("password") && type == request.input("type")) {
        return response
        .status(401)
        .json({
          "message": "Email o password corretti"
        });
      }

      return response.json({
        "user": user,
        "access_token": accessToken,
      });
    } catch (e) {
      return response
        .status(401)
        .json({
          "message": "unauthorized"
        });
    }
  }

  async logout ({ auth, response }) {
    await auth.logout()

    return response.json({"message": "ok"});
  }
}

module.exports = SessionController
