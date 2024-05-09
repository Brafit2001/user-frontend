import axios from 'axios'
import {checkParams} from "../../utils/AuxiliarFunctions";

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8081/classes/`

export const getAllClasses = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getClassById = (classId) =>
    axios
        .get(BASE_URL + classId,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const editClass = (class_item) =>
    axios
        .put(BASE_URL + class_item.id,
            class_item,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newClass = (class_item) =>
    axios
        .post(BASE_URL,
            class_item,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteClass = (props) =>
    axios
        .delete(BASE_URL + props.id,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





