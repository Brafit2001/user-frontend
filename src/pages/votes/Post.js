import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {ClipclassData} from "../../components/ClipclassData";
import {Filter} from "../../utils/AuxiliarFunctions";
import PageHeader from "../../components/PageHeader";
import Cards from "../../components/Cards";
import {getAllVotes} from "../../services/votes-ms/VoteService";


const Post = () => {
    const [votes, setVotes] = useState([])
    const location = useLocation()
    const post = location.state

    // SEARCH
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["votes"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const results = !search ? votes : Filter(votes, filterFields, checkedState, search)

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
            <PageHeader title={"Votes"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <Cards results={results} cardPath={"/clipclass/votes"}/>
        </>
    )
}

export default Post;