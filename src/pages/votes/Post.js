import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {ClipclassData} from "../../components/ClipclassData";
import {Filter} from "../../utils/AuxiliarFunctions";
import PageHeader from "../../components/PageHeader";
import Cards from "../../components/Cards";
import {getAllVotes, newVote} from "../../services/votes-ms/VoteService";
import MyForm from "../../components/MyForm";
import {getLoggedUserId} from "../../services/users-ms/UserService";


const Post = () => {
    const [votes, setVotes] = useState([])
    const location = useLocation()
    const post = location.state
    const [showVotePopUp, setShowVotePopUp] = useState(false)

    // SEARCH
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["votes"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const results = !search ? votes : Filter(votes, filterFields, checkedState, search)

    const newVoteItem = {
        user: getLoggedUserId(),
        post: post.id,
        topic: post.topic,
        content: null,
        originality: null,
        clarity: null,
        mean: null

    }

    useEffect(() => {
        const postId = post.id
        const params = {post: postId}
        getAllVotes(params).then((posts) => {
            setVotes(posts)
        })
    }, [post.id]);

    return (
        <>
            <h1>Post > {post.id}</h1>
            {Object.keys(post).map((key) => {
                return (
                    <p key={key}>{key} : {post[key]}</p>
                )
            })}
            <button onClick={() => setShowVotePopUp(!showVotePopUp)}>Vote</button>
            {
                showVotePopUp &&
                <MyForm item={newVoteItem}
                        actionFunction={newVote}
                        table="votes"
                        mode="create"
                />
            }
            <PageHeader title={"Votes"} setQuery={setSearch} query={search} filter={checkedState}
                        setFilter={setCheckedState}/>
            <Cards results={results} cardPath={"/clipclass/votes"} table={"votes"}/>
        </>
    )
}

export default Post;