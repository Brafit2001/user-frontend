import {useLocation} from "react-router-dom";
import {editUser, getUserById} from "../../../services/users-ms/UserService";
import MyForm from "../../../components/form/MyForm";
import {useEffect, useState} from "react";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";


const EditUser = () =>{
    const location = useLocation()
    const [user, setUser] = useState(location.state)
    const userId = getIdFromPath(location)

    useEffect(() => {
        !user && getUserById(userId).then((user) => setUser(user))
    }, [user, userId]);

    return (
        <div>
            <h1>EditUser</h1>
            <MyForm item={user} actionFunction={editUser} table="users" mode={"editable"}/>
        </div>

    )
};

export default EditUser;