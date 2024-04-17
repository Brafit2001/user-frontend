import {Link} from "react-router-dom";


const Card = ({path, element}) => {
    return(
        <Link to={`${path}/${element.id}`} className={"card"} state={element}>
            <div className="info">
                {Object.keys(element).map((key) => {
                    return(
                        <p key={key}>{key} : {element[key]}</p>
                    )
                })}
            </div>
        </Link>
    )
}

export default Card;