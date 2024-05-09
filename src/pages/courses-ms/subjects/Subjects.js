import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserSubjects} from "../../../services/users-ms/UserService";
import Cards from "../../../components/cards/Cards";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";

const Subjects = () => {
    const [subjects, setSubjects] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userId = getIdFromPath(location)


    useEffect(() => {
        userId ?
            getUserSubjects(userId).then((subjects) => setSubjects(subjects))
            : getAllSubjects().then((subjects) => setSubjects(subjects))
    }, [subjects, userId]);

    return (

        <section>
            <Cards sectionTitle={userId ? "My subjects" : "All Subjects"}
                   content={subjects}
                   cardPath={"subjects"}
                   table={"subjects"}/>
        </section>
    )
}

export default Subjects;