import {useLocation} from "react-router-dom";
import {editVote} from "../../../services/votes-ms/VoteService";
import MyForm from "../../../components/form/MyForm";

const EditVote = () =>{

    const location = useLocation()
    const vote = location.state

    return (
        <div>
            <h1>EditVote</h1>
            <MyForm item={vote}
                    actionFunction={editVote}
                    table="votes"
                    mode={"editable"}
            />
        </div>

    )
};

export default EditVote;