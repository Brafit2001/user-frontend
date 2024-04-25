import axios from 'axios'
import {checkParams} from "../../utils/AuxiliarFunctions";
import { jwtDecode } from 'jwt-decode'
const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8080/users/`

export const getAllUsers = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getUserById = (userId) =>
    axios
        .get(BASE_URL + userId,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const editUser = (user) =>
    axios
        .put(BASE_URL + user.id,
            user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newUser = (user) =>
    axios
        .post(BASE_URL,
            user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteUser = (userId) =>
    axios
        .delete(BASE_URL + userId,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const getLoggedUserId = () => {
    const token = localStorage.getItem("token")
    return jwtDecode(token)["userId"]
}

export const changePassword = (user) =>
    axios
        .put(`${BASE_URL}${user.id}/change-password`,
            user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))
