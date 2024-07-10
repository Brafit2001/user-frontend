import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getLoggedUserId, getUserGroups, getUserRemainingGroups} from "../../../services/users-ms/UserService";
import Cards from "../../../components/cards/Cards";

const Groups = () => {
    const [groups, setGroups] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userIdPath = getIdFromPath(location)

    useEffect(() => {
        userIdPath ?
            getUserGroups(userIdPath).then((groups) => setGroups(groups))
            : getUserRemainingGroups(getLoggedUserId()).then((groups) => setGroups(groups))
    }, [userIdPath]);

    return (

        <section>
            <Cards sectionTitle={userIdPath ? "My groups" : "Other groups"}
                   content={groups}
                   cardPath={"groups"}
                   table={"groups"}/>
        </section>
    )
}

export default Groups;