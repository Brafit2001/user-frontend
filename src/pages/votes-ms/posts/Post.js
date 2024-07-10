import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getIdFromPath, readImage} from "../../../utils/AuxiliarFunctions";
import Cards from "../../../components/cards/Cards";
import {getAllVotes, newVote} from "../../../services/votes-ms/VoteService";
import MyForm from "../../../components/form/MyForm";
import {ModalContent} from "../../../components/Modal";
import {deletePost, editPost, getPostById} from "../../../services/votes-ms/PostService";
import EditButton from "../../../components/buttons/EditButton";
import DeleteButton from "../../../components/buttons/DeleteButton";
import {getTopicById, getTopicRubrics} from "../../../services/groups-ms/TopicService";
import {getLoggedUserId} from "../../../services/users-ms/UserService";


const Post = () => {
    const modalRef = useRef();
    const navigate = useNavigate()
    const location = useLocation()

    const [votes, setVotes] = useState([])
    const [votesUserIds, setVotesUserIds] = useState([])
    const [post, setPost] = useState(location.state)
    const [topic, setTopic] = useState(null)
    const [ratings, setRatings] = useState([])
    // IDS
    const postId = getIdFromPath(location, "posts")
    const userIdPath = getIdFromPath(location, "users")
    // POP UP
    const [showVotePopUp, setShowVotePopUp] = useState(false)
    const [isOpen, setIsOpen] = useState(false)



    const vote = {
        post: postId,
        mean: null,
        ratings: ratings
    }

    function handleOnchange(rubric, e) {
        e.preventDefault()
        rubric["rating"] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        newVote(vote).then(() => window.location.reload())
    }

    function handlePostVisibility(){
        const postCopy = {...post}
        delete postCopy.content
        postCopy.visible = (post.visible === 0) ? 1 : 0
        post.visible = postCopy.visible
        editPost(postCopy).then(() => setPost(post))
        window.location.href = "/clipclass"
    }

    useEffect(() => {
        !post && getPostById(postId).then((post) => setPost(post))
        const params = {post: postId}
        getAllVotes(params).then((votes) => {
            if (votes) setVotesUserIds(votes.map((vote) => vote.user))
            setVotes(votes)
        })
        getTopicRubrics(post.topic).then((rubrics) =>
            setRatings(rubrics ? rubrics.map((rubric) => {
            return (
                {rating: 0, rubric_name: rubric.name, rubric_id: rubric.id}
            )}) : null)
        )
        getTopicById(post.topic).then((topic) => setTopic(topic))
    }, [post, postId]);

    return (
        <div className={"read-post"}>
            {post &&
                <div>
                    <h1>Post > {post.id}</h1>
                    <div className={"post-image-info"}>
                        <div className="image">
                            {(isOpen && post.type === 0) &&
                                <ModalContent modalRef={modalRef} isVisible={isOpen} setVisible={setIsOpen}>
                                    <img src={readImage(post.content, "users")} alt="" className={"modal-image"} ref={modalRef}/>
                                </ModalContent>
                            }
                            {
                                (post.type === 1) ?
                                    <video width="320" height="240" controls>
                                        <source src={`data:video/mp4;base64,${post.content}`} type="video/mp4"/>
                                    </video> :
                                    <img src={readImage(post.content, "users")} alt=""
                                         onClick={() => setIsOpen(!isOpen)}
                                         className={"post-image"}/>
                            }

                        </div>
                        <div className="right">
                            <div className="info">
                                <p><b>Title: </b> {post.title}</p>
                                {topic && <p><b>Topic: </b>{topic.title}</p>}
                                <p><b>Visible: </b> {(post.visible === 0) ? "No" : "Yes"}</p>
                            </div>
                            <div className="buttons">
                                {console.log(userIdPath)}
                                {userIdPath && <EditButton item={post}/>}
                                {userIdPath && <DeleteButton deleteProps={{id: post.id}} deleteFunction={deletePost}/>}
                                {userIdPath &&
                                    <button onClick={() => handlePostVisibility()} className={"visibility"}>
                                        Change visibility
                                    </button>
                                }
                                {(!userIdPath && !votesUserIds.includes(getLoggedUserId())) &&
                                    <button onClick={() => setShowVotePopUp(!showVotePopUp)} className={"vote"}>
                                        {showVotePopUp ? 'Hide' : 'Vote'}
                                    </button>
                                }
                            </div>
                        </div>
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
                    <Cards sectionTitle={"votes"}
                           content={votes}
                           cardPath={"votes"}
                           table={"votes"}
                    />
                </div>
            }
        </div>
    )
}

export default Post;