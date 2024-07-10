import EditIcon from "../../resources/images/edit.svg";
import {Link} from "react-router-dom";


const EditButton = ({item}) => {

    return (
        <Link className="edit" state={item} to={ "edit"} id={item.id}>
            <img className="action-icon" src={EditIcon} alt=""/> Modify
        </Link>
    )

}


export default EditButton;