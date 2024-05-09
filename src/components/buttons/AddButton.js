import {Link} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({path}) => {

    return (
        <Link to={path} className="add">
            <AddIcon className="icon"/>
        </Link>
    )

}

export default AddButton;