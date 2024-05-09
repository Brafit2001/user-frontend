import axios from 'axios'
import {checkParams} from "../../utils/AuxiliarFunctions";

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8084/posts/`

export const getAllPosts = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getPostById = (id) =>
    axios
        .get(`${BASE_URL}${id}`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const editPost = (post) => {
    const bodyFormData = new FormData();
    Object.keys(post).forEach((key) => {
        bodyFormData.append(key, post[key]);
    })
    return axios
        .put(BASE_URL + post.id,
            bodyFormData, {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))
}
export const newPost = (post) => {
    const bodyFormData = new FormData();
    Object.keys(post).forEach((key) => {
        bodyFormData.append(key, post[key]);
    })
    return axios
        .post(BASE_URL,
            bodyFormData, {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))
}


export const deletePost = (props) =>
    axios
        .delete(BASE_URL + props.id,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





