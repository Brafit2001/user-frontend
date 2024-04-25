import {useLocation} from "react-router-dom";
import {useState} from "react";
import {changePassword, getLoggedUserId} from "../../services/users-ms/UserService";


const User = () => {

    const [showChangePassword, setShowChangePassword] = useState(false)
    const [newPassword, setNewPassword] = useState()
    const location = useLocation()
    const user  = location.state
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
                        <input type="text" placeholder={"Enter password"}  onChange={handleOnChange}/>
                        <button type={"submit"} onClick={handleSubmit}>Submit</button>
                    </div>
                }

            </div>
        </>
    )
}

export default User;