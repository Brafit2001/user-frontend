import {Link, useLocation} from "react-router-dom";
import {ClipclassData} from "../ClipclassData";
import Background from "../../resources/images/course-background.png"
import Capitalize, {CheckElementInList} from "../../utils/AuxiliarFunctions";

const Card = ({path, element, table}) => {

    const location = useLocation()
    const url = location.pathname.split(("/"))

    function selectPath(){
        if (CheckElementInList(url, path)) return `${element.id}`
        else return `${path}/${element.id}`
    }

    return(
        <Link to={selectPath()} className={"card"} state={element}>
            <div className="info">
                {ClipclassData[table]["show"].map((key, index) => {
                    return(
                        <p className={ (index === 0) ? "title" : "text" }>
                            { (index === 0)
                                ? (key !== "mean")
                                    ? element[key]
                                    : Capitalize(key) + ": " + element[key]
                                : key + ": " + element[key]}
                        </p>
                    )
                })}
            </div>
        </Link>
    )
}

export default Card;