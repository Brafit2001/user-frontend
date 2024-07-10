import {Link} from "react-router-dom";
import {useState} from "react";
import ArrowDown from '@mui/icons-material/ExpandMore';
import ArrowUp from '@mui/icons-material/ExpandLess';
const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(true)

    const showSubnav = () => setSubnav(!subnav);

    return (
        <li className="sidebar-card">
            <div className="icon-title" style={subnav ? {color: "red"} : null} onClick={showSubnav}>
                <p  className="text">{item.title}</p>
                {subnav ? <ArrowUp style={{color: "white"}}/> : <ArrowDown/>}
            </div>
            {subnav &&
                item.subNav.map((subItem, value) => {
                    return (
                        <ul className="subCard" key={value}>
                            <Link key={value} to={subItem.path}><p className="subText">{subItem.title}</p></Link>
                        </ul>
                    )
                })
            }
        </li>
    )
};

export default SubMenu;