import {useLocation} from "react-router-dom";
import EditButton from "../../../components/buttons/EditButton";
import DeleteButton from "../../../components/buttons/DeleteButton";
import {deleteVote} from "../../../services/votes-ms/VoteService";
import {ClipclassData} from "../../../components/ClipclassData";


const Vote = () => {
    const location = useLocation()
    const vote = location.state
    return (
        <>
            <h1>Vote > {vote.id}</h1>
            {ClipclassData["votes"]["show"].map((key) => {
                return (
                    <p key={key}>{key} : {vote[key]}</p>
                )
            })}
            <EditButton item={vote}/>
            <DeleteButton deleteProps={{id: vote.id}}
                          deleteFunction={deleteVote}/>
        </>
    )
}

export default Vote;
