import {Link} from "react-router-dom";
import {ClipclassData} from "./ClipclassData";
import Background from "../resources/images/course-background.png"

const Card = ({path, element, table}) => {
    console.log(table)
    return(
        <Link to={`${path}/${element.id}`} className={"card"} state={element}>
            <img src={Background} alt=""/>
            <div className="info">
                {ClipclassData[table]["show"].map((key) => {
                    return(
                        <p className={key}>{element[key]}</p>
                    )
                })}
            </div>
        </Link>
    )
}

export default Card;