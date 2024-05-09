import TrashIcon from "../../resources/images/trash.svg";
import {CLIPCLASS_URL} from "../../Constants";


const DeleteButton = ({deleteFunction, deleteProps}) => {

    function handleDelete() {
        let text = "Are you sure you want to delete?";
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            deleteFunction(deleteProps).then(() => window.location.href = CLIPCLASS_URL)
        }
    }

    return (
        <button className="delete" onClick={() => handleDelete()}>
            <img className="action-icon" src={TrashIcon} alt=""/>
        </button>
    )
}

export default DeleteButton;