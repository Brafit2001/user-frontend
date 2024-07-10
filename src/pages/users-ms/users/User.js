import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {changePassword, getLoggedUserId, getUserById} from "../../../services/users-ms/UserService";
import {getIdFromPath, readImage} from "../../../utils/AuxiliarFunctions";
import {ModalContent} from "../../../components/Modal";


const User = () => {

    const modalRef = useRef();
    const navigate = useNavigate();

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
        changePassword(data).then(() => {
            localStorage.clear()
            navigate("/")
        } )
    }

    return(
        <div className={"read-user"}>
            {user &&
                <div>
                    <h1>ReadUser</h1>
                    <div>
                        <div className="user-image-info">
                            <div className="edit-image">
                                <img
                                    src={readImage(user["image"], "users")}
                                    alt=""
                                    style={{cursor: "pointer"}}
                                />
                            </div>
                            <div className="info">
                                <p><b>NIA: </b>: {user.username}</p>
                                <p><b>Name: </b>: {user.name}</p>
                                <p><b>Surname: </b>: {user.surname}</p>
                                <p><b>Email: </b>: {user.email}</p>
                            </div>
                        </div>

                        <div className="buttons">
                            {
                                (user.id === getLoggedUserId()) &&
                                <button onClick={() => setShowChangePassword(!showChangePassword)} className={"change-password"}>Change
                                    Password</button>
                            }

                            {
                                showChangePassword &&
                                <ModalContent modalRef={modalRef} isVisible={showChangePassword} setVisible={setShowChangePassword}>
                                    <div className={"vote-popUp"} ref={modalRef}>
                                        <input type="text" placeholder={"Enter password"} onChange={handleOnChange}/>
                                        <button type={"submit"} onClick={handleSubmit} className={"submit-button"}>Submit</button>
                                    </div>

                                </ModalContent>

                            }
                            <Link to={"edit"} state={user} className={"edit-user"}>Edit User</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default User;