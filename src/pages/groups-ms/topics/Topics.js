import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {
    getLoggedUserId,
    getUserRemainingTopics,
    getUserTopics
} from "../../../services/users-ms/UserService";
import Cards from "../../../components/cards/Cards";


const Topics = () => {
    const [topics, setTopics] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userIdPath = getIdFromPath(location)


    useEffect(() => {
        userIdPath ?
            getUserTopics(userIdPath).then((topics) => setTopics(topics))
            : getUserRemainingTopics(getLoggedUserId()).then((topics) => setTopics(topics))
    }, [userIdPath]);

    return (

        <section>
            <Cards sectionTitle={userIdPath ? "My topics" : "Remaining topics"}
                   content={topics}
                   cardPath={"topics"}
                   table={"topics"}
            />
        </section>
    )
}

export default Topics;