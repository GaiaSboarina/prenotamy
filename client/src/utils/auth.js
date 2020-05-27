import axios from "axios";
import { EventBus } from "./event-bus.js";

export {
  isLoggedIn,
  isUserActive,
  isUserEnabled,
  login,
  logout,
  getProfile,
  setProfile,
  getToken,
  getUserRole,
  resetPassword,
  hasActiveRole,
  getActiveRole
};

const HOST = process.env.API_HOST || "";

const API_URL = HOST + "/api";
const LOGIN_URL = API_URL + "/token";

const verboseRoles = {
  user: "Utente",
  hr: "Human Resources",
  pm: "Project Manager",
  admin: "Amministratore",
  superadmin: "SuperAdmin"
};

const roleNeedsEnabled = {
  user: true,
  admin: false,
  superadmin: false,
  hr: false,
  hrhead: false
};

function hasActiveRole() {
  return localStorage.getItem("activeRole") != null;
}

function getActiveRole() {
  if (hasActiveRole()) {
    return JSON.parse(localStorage.getItem("activeRole")).code;
  }

  return null;
}

function getToken() {
  return isLoggedIn() ? localStorage.getItem("token") : null;
}

function isLoggedIn() {
  // localStorage item is null when it's equal to 'null' (string null)
  return localStorage.getItem("token") != "null";
}

function isUserActive() {
  // localStorage item is null when it's equal to 'null' (string null)
  return getProfile() ? getProfile().active : false;
}

function isUserEnabled() {
  // localStorage item is null when it's equal to 'null' (string null)
  let user = getProfile();

  if (user && user.roles) {
    let userRoleCode = user.roles[0].code;

    return roleNeedsEnabled[userRoleCode] ? user.enabled : true;
  }

  console.log(user);

  return false;
}

function getProfile() {
  var user = JSON.parse(localStorage.getItem("user"));
  
  if (user == null || user == undefined || user == {} || user == []) {
    return null;
  }
}

function setProfile(user) {
  localStorage.setItem("user", JSON.stringify(user));
  EventBus.$emit("reload-user");
}

function getUserRole(role) {
  return verboseRoles[role];
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("activeRole");

  axios.defaults.headers.common["Authorization"] = null;
  delete axios.defaults.headers.common["activerole"];
}

async function login(email, password) {
  console.log('Ma funzioni lo stesso?')
  let loginFormData = new FormData();

  loginFormData.set("email", email);
  loginFormData.set("password", password);

  let response = {
    error: null,
    data: null
  };

  try {

    console.log('Qua ci arriva? Si')

    localStorage.setItem(getToken(), data);

    console.log('E qui?')

    axios.defaults.headers.common["Authorization"] =
      "Bearer" + data;
      console.log('E qui?2')

      response.data = await axios.get('/api/loginForm', {
        email,
        password
      });
      console.log('E qui?3')
      data = await axios.post("/api/loginForm", {
        email,
        password
      });
      } catch (e) {
        response.error = e;
        console.log(e);
        return response;
      }

  let data = response.data.data;

  if (!data) {
    data.detail = "missing_token";

    return {
      error: data
    };
  }

  switch (response.status) {
    case 400:
    case 401:
    case 500:
      return {
        error: response.data
      };
  }

  setProfile(response.data);

  return {
    user: response.data
  };
}

function resetPassword(email) {
  return new Promise(function(resolve, reject) {
    axios
      .post(LOGIN_URL + "/resetpassword", {
        email: email
      })
      .then(
        function(response) {
          resolve(response.data);
        },
        function(err) {
          reject(err.response.data);
        }
      );
  });
}