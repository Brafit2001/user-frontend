import {useEffect, useState} from "react";
import {ClipclassData} from "../../../components/ClipclassData";
import {Link, useLocation} from "react-router-dom";
import {Filter, getTitleFromPath, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import SearchSection from "../../../components/SearchSection";
import {getGroupById, getGroupTopics, getGroupUsers} from "../../../services/groups-ms/GroupService";
import {getAllUsers} from "../../../services/users-ms/UserService";
import Cards from "../../../components/cards/Cards";
import {getAllTopics} from "../../../services/groups-ms/TopicService";



const Group = () => {
    const [topics, setTopics] = useState([])

    // GROUP ID
    const location = useLocation()
    const path = location.pathname.split("/")
    const groupId = path[path.length - 1]
    const [group, setGroup] = useState(location.state)

    const userId = getIdFromPath(location)

    function parseIds(list){
        let chain = ''
        list.forEach((item, index, array) => {
            chain += item.id
            if (index !== array.length - 1) chain += ","
        })
        return chain
    }
    useEffect(() => {
        !group && getGroupById(groupId).then((group) => setGroup(group))
        getGroupTopics(groupId).then((topicsIds) => {
            const params = {ids: parseIds(topicsIds)}
            getAllTopics(params).then((topics) => {
                setTopics(topics)
            })
        })
    }, [group, groupId]);
    return(
        <>
            {group &&
                <div>
                    <h1>{getTitleFromPath(location)}</h1>
                    <Link to={`/clipclass/classes/${group.class}`}>
                        CLASS: {group.class}
                    </Link>
                    {Object.keys(group).map((key) => {
                        return (
                            <p key={key}>{key} : {group[key]}</p>
                        )
                    })}
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