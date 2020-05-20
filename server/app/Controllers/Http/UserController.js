'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class UserController {

  async register({request, response}) {
    const rules = {
      username: "required|string|unique:users,username",
      name: "required|string|unique:users,name",
      surname: "required|string|unique:users,surname",
      phone: "required|string|unique:users,phone",
      email: "required|string|unique:users,email",
      password: "required|min:6"
    };

    const userData = request.only(['username', 'name', 'surname', 'phone', 'email', 'password'])

    const validation = await validate(request.all(), rules)
    if(validation.fails()) {
      return response.status(401).json({
        message: 'Iscrizione fallita',
        data: validation.messages()
      })
    }
    await User.create({
      username: userData.username,
      name: userData.name,
      surname: userData.surname,
      phone: userData.phone,
      email: userData.email,
      password: userData.password,
    })

    return response.status(201).json({
      message: "iscritto"
    })
  }
  async login({request, auth}) {
    const {email, password} = request.all()
    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = UserController
