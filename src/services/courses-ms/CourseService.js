import axios from 'axios'

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8081/courses/`

export const getAllCourses = () =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const editCourse = (course) =>
    axios
        .put(BASE_URL + course.id,
            course,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newCourse = (course) =>
    axios
        .post(BASE_URL,
            course,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteCourse = (courseId) =>
    axios
        .delete(BASE_URL + courseId,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





