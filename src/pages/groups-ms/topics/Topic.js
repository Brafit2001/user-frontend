
import Cards from "../../../components/cards/Cards";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getTitleFromPath, getIdFromPath, parseIds} from "../../../utils/AuxiliarFunctions";
import {getAllPosts} from "../../../services/votes-ms/PostService";
import {getTopicById} from "../../../services/groups-ms/TopicService";
import {getGroupUsers} from "../../../services/groups-ms/GroupService";

const Topic = () => {
    const location = useLocation()

    const [posts, setPosts] = useState([])
    const [topic, setTopic] = useState(location.state)
    // IDS
    const topicId = getIdFromPath(location, "topics")
    const userId = getIdFromPath(location, "users")
    const groupId = getIdFromPath(location, "groups")

    useEffect(() => {

        !topic && getTopicById(topicId).then((topic) => setTopic(topic))
        getGroupUsers(groupId).then((users) => {
            console.log(parseIds(users))
            const params = userId ? {topic: topicId, user: parseIds(users)} : {topic: topicId, visible: 1, user: parseIds(users)}
            getAllPosts(params).then((posts) => {
                setPosts(posts)
            })
        })


    }, [groupId, topic, topicId, userId]);

    return (
        <>
            <h1>{getTitleFromPath(location)}</h1>
            <p><b>Title:</b> {topic.title}</p>
            <p><b>Deadline: </b> {topic.deadline}</p>
            <p><b>Unit: </b>{topic.unit}</p>
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