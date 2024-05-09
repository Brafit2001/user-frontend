import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {CheckElementInList, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserSubjects, getUserTopics} from "../../../services/users-ms/UserService";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";
import Cards from "../../../components/cards/Cards";
import {getAllTopics} from "../../../services/groups-ms/TopicService";


const Topics = () => {
    const [topics, setTopics] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userId = getIdFromPath(location)


    useEffect(() => {
        userId ?
            getUserTopics(userId).then((topics) => setTopics(topics))
            : getAllTopics({visible: 1}).then((topics) => setTopics(topics))
    }, [topics, userId]);

    return (

        <section>
            <Cards sectionTitle={userId ? "My topics" : "All topics"}
                   content={topics}
                   cardPath={"topics"}
                   table={"topics"}
            />
        </section>
    )
}

export default Topics;