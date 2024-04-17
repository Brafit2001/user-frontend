import axios from "axios";


const TOKEN = localStorage.getItem("token")

export const getAllRoles = (setRoles) =>
    axios
        .get(`http://localhost:8080/roles/`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setRoles(response.data.data))
        .catch((error) => console.log(error))


export const newRole = (role) =>
    axios
        .post(`http://localhost:8080/roles/`,
            role,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const deleteRole = (roleId) =>
    axios
        .delete(`http://localhost:8080/roles/${roleId}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const editRole = (role) =>
    axios
        .put(`http://localhost:8080/roles/${role.id}`,
            role,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


