import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {CheckElementInList, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserClasses, getUserGroups} from "../../../services/users-ms/UserService";
import {getAllClasses} from "../../../services/courses-ms/ClassService";
import Cards from "../../../components/cards/Cards";
import {getAllGroups} from "../../../services/groups-ms/GroupService";

const Groups = () => {
    const [groups, setGroups] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userId = getIdFromPath(location)


    useEffect(() => {
        userId ?
            getUserGroups(userId).then((groups) => setGroups(groups))
            : getAllGroups().then((groups) => setGroups(groups))
    }, [groups, userId]);

    return (

        <section>
            <Cards sectionTitle={"My groups"}
                   content={groups}
                   cardPath={"groups"}
                   table={"groups"}/>
        </section>
    )
}

export default Groups;