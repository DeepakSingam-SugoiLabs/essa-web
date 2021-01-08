const axios = require("axios").default
import { USER_TOKEN } from "../_helpers/constant"
import globals from "../_helpers/global"
const URL = globals.domain

const loginUserAPI = (data) => {
    console.log(data)
  return axios
    .create({
      headers: {
        'Content-type': 'application/json',
      },
    })
    .post(`${URL}/auth/login`, data)
}

const guardAPI = () => {
const token  = localStorage.getItem(USER_TOKEN)
return axios
  .create({
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .get(`${URL}/users/guard`)
}


export const authservice = {
  loginUserAPI,
  guardAPI
}
