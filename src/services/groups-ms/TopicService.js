import axios from 'axios'
import {checkParams} from "../../utils/AuxiliarFunctions";

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8083/topics/`

export const getAllTopics = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getTopicById = (topicId) =>
    axios
        .get(BASE_URL + topicId,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getTopicGroups = (topicId) =>
    axios
        .get(`${BASE_URL}${topicId}/groups`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getTopicRemainingGroups = (topicId) =>
    axios
        .get(`${BASE_URL}${topicId}/groups-remaining`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const editTopic = (topic) =>
    axios
        .put(BASE_URL + topic.id,
            topic,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newTopic = (topic) =>
    axios
        .post(BASE_URL,
            topic,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteTopic = (props) =>
    axios
        .delete(BASE_URL + props,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const deleteTopicGroup = (props) =>
    axios
        .delete(`${BASE_URL}${props.topicId}/groups/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))






