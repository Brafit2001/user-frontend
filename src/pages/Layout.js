import NavBar from "../components/NavBar";
import {Link, Outlet} from "react-router-dom";
import '../styles/Layout.scss';
import Sidebar from '../components/sideBar/SideBar'
import {useState} from "react";
const Layout = () => {

    const [showSideBar, setShowSideBar] = useState(true)

    function handleSidebarVisibility(){
        setShowSideBar(!showSideBar)
    }

    return(
        <>
            <NavBar handleSideBarVisibility={handleSidebarVisibility}/>
            <main>
                {showSideBar && <Sidebar/>}
                <div className={"main-content"}>
                    <Outlet/>
                </div>

            </main>
        </>
    )
}

export default Layout;