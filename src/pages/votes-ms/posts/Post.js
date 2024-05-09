import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getIdFromPath, readImage} from "../../../utils/AuxiliarFunctions";
import Cards from "../../../components/cards/Cards";
import {deleteVote, getAllVotes, newVote} from "../../../services/votes-ms/VoteService";
import MyForm from "../../../components/form/MyForm";
import {getLoggedUserId} from "../../../services/users-ms/UserService";
import {ModalContent} from "../../../components/Modal";
import {deletePost, editPost, getPostById} from "../../../services/votes-ms/PostService";
import EditButton from "../../../components/buttons/EditButton";
import DeleteButton from "../../../components/buttons/DeleteButton";


const Post = () => {
    const location = useLocation()

    const [votes, setVotes] = useState([])
    const [post, setPost] = useState(location.state)
    // IDS
    const userId = getLoggedUserId()
    const postId = getIdFromPath(location, "posts")
    const topicId = getIdFromPath(location, "topics")
    // POP UP
    const [showVotePopUp, setShowVotePopUp] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const newVoteItem = {
        user: userId,
        post: postId,
        topic: topicId,
        content: null,
        originality: null,
        clarity: null,
        mean: null

    }

    function handlePostVisibility(){
        const postCopy = {...post}
        delete postCopy.content
        postCopy.visible = (post.visible === 0) ? 1 : 0
        post.visible = postCopy.visible
        editPost(postCopy).then(() => setPost(post))
        window.location.href = location.pathname
    }

    useEffect(() => {
        !post && getPostById(postId).then((post) => setPost(post))
        const params = {post: postId}
        getAllVotes(params).then((posts) => {
            setVotes(posts)
        })
    }, [post, postId]);

    return (
        <>
            {post &&
                <div>
                    <h1>Post > {post.id}</h1>
                    <div className={"post-image-info"}>
                        <div className="image">
                            {(isOpen && post.type === 0) &&
                                <ModalContent onClose={() => setIsOpen(false)}>
                                    <img src={readImage(post.content, "users")} alt="" className={"modal-image"}/>
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
                        <div className="info">
                            <p>ID: {post.id}</p>
                            <p>TITLE: {post.title}</p>
                            <p>TOPIC: {post.topic}</p>
                            <p>TYPE: {post.type}</p>
                            <p>USER: {post.user}</p>
                            <p>VISIBLE: {post.visible}</p>
                        </div>
                        <EditButton item={post}/>
                        <DeleteButton deleteProps={{id: post.id}}
                                      deleteFunction={deletePost}/>
                    </div>
                    <button onClick={() => setShowVotePopUp(!showVotePopUp)}>{showVotePopUp ? 'Hide' : 'Vote'}</button>
                    <button onClick={() => handlePostVisibility()}>Make Visible</button>
                    {
                        showVotePopUp &&
                        <MyForm item={newVoteItem}
                                actionFunction={newVote}
                                table="votes"
                                mode="create"
                        />
                    }
                    <Cards sectionTitle={"votes"}
                           content={votes}
                           cardPath={"votes"}
                           table={"votes"}/>
                </div>
            }
        </>
    )
}

export default Post;