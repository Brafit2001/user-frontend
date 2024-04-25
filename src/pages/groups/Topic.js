import PageHeader from "../../components/PageHeader";
import Cards from "../../components/Cards";
import {useEffect, useState} from "react";
import {ClipclassData} from "../../components/ClipclassData";
import {useLocation} from "react-router-dom";
import {Filter} from "../../utils/AuxiliarFunctions";
import {getAllPosts} from "../../services/votes-ms/PostService";


const Topic = () => {
    const [posts, setPosts] = useState([])
    const location = useLocation()
    const topic = location.state

    // SEARCH
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["posts"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const results = !search ? posts : Filter(posts, filterFields, checkedState, search)

    useEffect(() => {
        const topicId = topic.id
        const params = {topic: topicId}
        getAllPosts(params).then((posts) => {
            setPosts(posts)
        })
    }, [topic.id]);

    return (
        <>
            <h1>Topic > {topic.id}</h1>
            <p>Topic title: {topic.title}</p>
            <p>Topic year: {topic.year}</p>
            <PageHeader title={"Posts"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <Cards results={results} cardPath={"/clipclass/posts"} table={"posts"}/>
        </>
    )
}

export default Topic;