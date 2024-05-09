
import Cards from "../../../components/cards/Cards";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getTitleFromPath, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getAllPosts} from "../../../services/votes-ms/PostService";
import {getTopicById} from "../../../services/groups-ms/TopicService";

const Topic = () => {
    const [posts, setPosts] = useState([])
    // TOPIC ID
    const location = useLocation()
    const [topic, setTopic] = useState(location.state)
    const path = location.pathname.split("/")
    const topicId = path[path.length - 1]

    const userId = getIdFromPath(location)

    useEffect(() => {

        !topic && getTopicById(topicId).then((topic) => setTopic(topic))
        const params = userId ? {topic: topicId} : {topic: topicId, visible: 1}
        getAllPosts(params).then((posts) => {
            setPosts(posts)
        })
    }, [topic, topicId, userId]);

    return (
        <>
            <h1>{getTitleFromPath(location)}</h1>
            <p>Topic title: {topic.title}</p>
            <p>Topic year: {topic.year}</p>
            <Cards sectionTitle={userId ? "My group posts" : "Group posts"}
                   content={posts}
                   cardPath={"posts"}
                   table={"posts"}
                   addButtonVisible={userId && true}
                   addButtonPath={"posts/new"}
            />
        </>
    )
}

export default Topic;