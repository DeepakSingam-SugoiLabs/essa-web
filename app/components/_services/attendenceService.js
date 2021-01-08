const axios = require("axios").default
import globals from "../_helpers/global"
const URL = globals.domain
import { USER_TOKEN } from '../_helpers/constant'


const getToken = () => {
    return localStorage.getItem(USER_TOKEN)
}

const getRecentAttenanceAPI = async () => {
  const token = getToken();
  console.log(token)
  return axios
    .create({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .get(`${URL}/attendance/recent`)
}

const handleAttendaceAPI = async (data) => {
  const token = getToken()
  return axios
    .create({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .post(`${URL}/attendance`, data)
}

const addExceptionAPI = async (data) => {
  const token = getToken()
  return axios
    .create({
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
    .post(`${URL}/attendance/exception`, data)
}

const updateExceptionAPI = async (data, id) => {
  const token = getToken()
  return axios
    .create({
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
    .patch(`${URL}/attendance/exception/${id}`, data)
}

const updateExceptionAPIOnlyForIncoming = async (data, id) => {
  const token = getToken()
  return axios
    .create({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .patch(`${URL}/attendance/exception/${id}`, data)
}

const getExceptionRequestByIdAPI = async (id) => {
  const token = getToken()
  return axios
    .create({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .get(`${URL}/attendance/exception/${id}`)
}

const getAllAttendenceRequest = () => {
  const token = getToken()
  return axios
    .create({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .get(`${URL}/attendance/exception`)
}
export const attendanceService = {
  getRecentAttenanceAPI,
  handleAttendaceAPI,
  addExceptionAPI,
  updateExceptionAPI,
  getExceptionRequestByIdAPI,
  updateExceptionAPIOnlyForIncoming,
  getAllAttendenceRequest
}
