import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";
import '../styles/Layout.scss';

const Layout = () => {
    return(
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;