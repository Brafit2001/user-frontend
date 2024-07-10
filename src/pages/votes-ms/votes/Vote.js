import {useLocation} from "react-router-dom";
import EditButton from "../../../components/buttons/EditButton";
import DeleteButton from "../../../components/buttons/DeleteButton";
import {deleteVote, editVote, newVote} from "../../../services/votes-ms/VoteService";
import {ClipclassData} from "../../../components/ClipclassData";
import EditIcon from "../../../resources/images/edit.svg";
import {ModalContent} from "../../../components/Modal";
import {useEffect, useRef, useState} from "react";
import {getPostById} from "../../../services/votes-ms/PostService";
import Capitalize from "../../../utils/AuxiliarFunctions";


const Vote = () => {
    const location = useLocation()
    const vote = location.state
    const [post, setPost] = useState(null)

    const modalRef = useRef();
    const [showVotePopUp, setShowVotePopUp] = useState(false)

    function handleOnchange(rubric, e) {
        e.preventDefault()
        rubric["rating"] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        editVote(vote).then(() => window.location.href = "/clipclass")
    }

    useEffect(() => {
        getPostById(vote.post).then((post) => setPost(post))
    }, [vote.post]);


    return (
        <div className={"read-vote"}>
            <h1>Vote > {vote.id}</h1>
            {vote &&
                <div>
                    <h1>Vote information</h1>
                    {post && <p><b>Post: </b>{post.title}</p>}
                    <div>{ClipclassData["votes"]["show"].map((field) => {
                        return (<p><b>{Capitalize(field)}:</b> {vote[field]}</p>)
                    })}</div>
                    {vote["ratings"].map((rubric) => {
                        return (
                            <div style={{marginTop: 20}}>
                                <p><b>Rubric:</b> {rubric["rubric_name"]}</p>
                                <p><b>Rating: </b>{rubric["rating"]}</p>
                            </div>
                        )
                    })}
                </div>
            }
            <div className="buttons">
                <button className={"edit"} onClick={() => setShowVotePopUp(!showVotePopUp)}>
                    <img className="action-icon" src={EditIcon} alt=""/> Modify
                </button>
                <DeleteButton deleteProps={{id: vote.id}} deleteFunction={deleteVote}/>
            </div>
            {
                (showVotePopUp && vote["ratings"]) &&
                <ModalContent modalRef={modalRef} isVisible={showVotePopUp} setVisible={setShowVotePopUp}>
                    <div className="vote-popUp" ref={modalRef}>
                        {
                            vote["ratings"].map((rubric) => {
                                return <div>
                                    <p>{rubric["rubric_name"]}</p>
                                    <input
                                        type="number"
                                        defaultValue={rubric["rating"]}
                                        onChange={(e) => handleOnchange(rubric, e)}/>
                                </div>
                            })
                        }
                        <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                            Submit
                        </button>
                    </div>
                </ModalContent>
            }


        </div>
    )
}

export default Vote;
