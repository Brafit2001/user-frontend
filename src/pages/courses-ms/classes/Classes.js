import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserClasses} from "../../../services/users-ms/UserService";
import Cards from "../../../components/cards/Cards";
import {getAllClasses} from "../../../services/courses-ms/ClassService";


const Classes = () => {
    const [classes, setClasses] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userId = getIdFromPath(location)


    useEffect(() => {
        userId ?
            getUserClasses(userId).then((classes) => setClasses(classes))
            : getAllClasses().then((classes) => setClasses(classes))
    }, [classes, userId]);

    return (

        <section>
            <Cards sectionTitle={userId ? "My classes" : "All Classes"}
                   content={classes}
                   cardPath={"classes"}
                   table={"classes"}/>
        </section>
    )
}

export default Classes;