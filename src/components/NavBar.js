import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getLoggedUserId, getUserById} from "../services/users-ms/UserService";
import Capitalize from "../utils/AuxiliarFunctions";

const NavBar = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userid = getLoggedUserId()
        getUserById(userid).then((user) => setUser(user))
    }, []);



    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to="/clipclass">Logo</Link>
                </div>
                <div className="profile">
                    <div className="profile-image">

                    </div>
                    {
                        user &&
                        <Link className={"profile-info"} to={`users/${user && user.id}`} state={user}>
                            <p className="name">
                                {Capitalize(user.name)} {Capitalize(user.surname)}
                            </p>
                        </Link>
                    }
                </div>
            </div>
        </header>
    )
}

export default NavBar