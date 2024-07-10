import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {getTitleFromPath, parseIds} from "../../../utils/AuxiliarFunctions";
import {getGroupById, getGroupTopics} from "../../../services/groups-ms/GroupService";
import Cards from "../../../components/cards/Cards";
import {getAllTopics} from "../../../services/groups-ms/TopicService";
import {getClassById} from "../../../services/courses-ms/ClassService";



const Group = () => {
    const [topics, setTopics] = useState([])

    // GROUP ID
    const location = useLocation()
    const path = location.pathname.split("/")
    const groupId = path[path.length - 1]
    const [group, setGroup] = useState(location.state)
    const [classItem, setClassItem] = useState(null)


    useEffect(() => {
        !group && getGroupById(groupId).then((group) => setGroup(group))
        getGroupTopics(groupId).then((topicsIds) => {
            if (topicsIds){
                const params = {ids: parseIds(topicsIds)}
                getAllTopics(params).then((topics) => {
                    setTopics(topics)
                })
            }else setTopics(null)
        })
        getClassById(group.class).then((classItem) => setClassItem(classItem))
    }, [group, groupId]);
    return(
        <>
            {(group && classItem) &&
                <div>
                    <h1>{getTitleFromPath(location)}</h1>
                    <Link to={`/clipclass/classes/${group.class}`}>
                        <b>Class: </b>: {classItem.title}
                    </Link>
                    <p><b>Name: </b>{group.name}</p>
                    <p><b>Description: </b>{group.description}</p>
                    <Cards sectionTitle={"Group Topics"}
                           content={topics}
                           cardPath={"topics"}
                           table={"topics"}/>
                </div>

            }

        </>
    )
}

export default Group