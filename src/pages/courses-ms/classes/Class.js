
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {CheckElementInList,getTitleFromPath, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getAllGroups} from "../../../services/groups-ms/GroupService";
import Cards from "../../../components/cards/Cards";
import {getClassById} from "../../../services/courses-ms/ClassService";
import {getUserGroups} from "../../../services/users-ms/UserService";


const ClassPage = () => {

    const [groups, setGroups] = useState([])
    // CLASS ID
    const location = useLocation()
    const path = location.pathname.split('/')
    const classId = path[path.length - 1]
    const [classItem, setClassItem] = useState(location.state)

    const userId = getIdFromPath(location)

    useEffect(() => {
        !classItem && getClassById(classId).then((classItem) => setClassItem(classItem))
        const params = {"class": classId}
        getAllGroups(params).then((groups) => {
            if (userId){
                // SELECT ONLY THE SUBJECTS THAT THE USE HAVE
                getUserGroups(userId).then((userGroups) => {
                    const userGroupsIds = userGroups.map((group) => group.id)
                    setGroups(groups.filter((group) => CheckElementInList(userGroupsIds, group.id)))
                })
            }
            else setGroups(groups)
        })
    }, [classId, classItem, userId]);
    return (
        <>
            {classItem &&
                <div>
                    <h1>{getTitleFromPath(location)}</h1>
                    <Link to={`/clipclass/subjects/${classItem.subject}`}>
                        SUBJECT: {classItem.subject}
                    </Link>
                    {Object.keys(classItem).map((key) => {
                        return (
                            <p>{key} : {classItem[key]}</p>
                        )
                    })}
                    <Cards sectionTitle={userId? "My class groups" : "All class groups"}
                           content={groups}
                           cardPath={"groups"}
                           table={"groups"}/>
                </div>
            }

        </>
    )
}


export default ClassPage;