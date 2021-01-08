const axios = require("axios").default
import { USER_TOKEN } from "../_helpers/constant"
import globals from "../_helpers/global"
const URL = globals.domain


const getAllIncomingRequests = async () => {
    const token = localStorage.getItem(USER_TOKEN)
    return axios
      .create({
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .get(`${URL}/common/incoming`)
  }

  export const incomingrequestservice = {
    getAllIncomingRequests,
  }
  