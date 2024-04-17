import axios from "axios";


export const login = (username, password) =>
    axios
        .post(`http://localhost:8080/auth/`,
            {username: username, password: password},
        )
        .then((response) => response)
        .catch((error) => error)