import axios from 'axios'
import {checkParams} from "../../utils/AuxiliarFunctions";

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8083/groups/`

export const getAllGroups = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getGroupById = (groupId) =>
    axios
        .get(BASE_URL + groupId,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const getGroupUsers = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/users`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getGroupRemainingUsers = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/users-remaining`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getGroupTopics = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/topics`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getGroupRemainingTopics = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/topics-remaining`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const editGroup = (group) =>
    axios
        .put(BASE_URL + group.id,
            group,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newGroup = (group) =>
    axios
        .post(BASE_URL,
            group,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteGroup = (props) =>
    axios
        .delete(BASE_URL + props.id,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteGroupUser = (props) =>
    axios
        .delete(`${BASE_URL}${props.groupId}/users/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const deleteGroupTopic = (props) =>
    axios
        .delete(`${BASE_URL}${props.groupId}/topics/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const assignGroup = (body) =>
    axios
        .post(`${BASE_URL}assign-user-to-group`,body,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const assignTopic = (body) =>
    axios
        .post(`${BASE_URL}assign-topic-to-group`,body,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))






