import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {changePassword, getLoggedUserId, getUserById} from "../../../services/users-ms/UserService";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";


const User = () => {

    const [showChangePassword, setShowChangePassword] = useState(false)
    const [newPassword, setNewPassword] = useState()
    const location = useLocation()
    const [user, setUser] = useState(location.state)
    const userId = getIdFromPath(location)

    useEffect(() => {
        !user && getUserById(userId).then((user) => setUser(user))
    }, [user, userId]);

    function handleOnChange(event){
        setNewPassword(event.target.value)
    }
    function handleSubmit(){
        const data = {
            id: user.id,
            password: newPassword
        }
        changePassword(data).then((message) => console.log(message) )
    }

    return(
        <>
            {user &&
                <div>
                    <h1>ReadUser</h1>
                    <div>
                        <div className="image">
                            IMAGE: {user.image}
                        </div>
                        <div className="info">
                            <p>ID: {user.id}</p>
                            <p>NIA: {user.username}</p>
                            <p>NAME: {user.name}</p>
                            <p>SURNAME: {user.surname}</p>
                            <p>EMAIL: {user.email}</p>
                        </div>
                        {
                            (user.id === getLoggedUserId()) &&
                            <button onClick={() => setShowChangePassword(!showChangePassword)}>Change Password</button>
                        }

                        {
                            showChangePassword &&
                            <div>
                                <input type="text" placeholder={"Enter password"} onChange={handleOnChange}/>
                                <button type={"submit"} onClick={handleSubmit}>Submit</button>
                            </div>
                        }
                        <Link to={"edit"} state={user}>Edit User</Link>

                    </div>
                </div>
            }
        </>
    )
}

export default User;