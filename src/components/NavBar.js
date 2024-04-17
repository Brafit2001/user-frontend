import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to="/clipclass">Logo</Link>
                </div>
                <div className="profile">
                    <div className="profile-image">

                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar