import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {getAllClasses} from "../../../services/courses-ms/ClassService";
import Cards from "../../../components/cards/Cards";
import {getSubjectById} from "../../../services/courses-ms/SubjectService";
import {CheckElementInList, getTitleFromPath, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserClasses, getUserSubjects} from "../../../services/users-ms/UserService";
import {getCourseBydId} from "../../../services/courses-ms/CourseService";


const Subject = () => {
    const [classes, setClasses] = useState([])

    // SUBJECT ID
    const location = useLocation()
    const path = location.pathname.split('/')
    const subjectId = path[path.length - 1]
    const [subject, setSubject] = useState(location.state)
    const [course, setCourse] = useState(null)

    const userId = getIdFromPath(location)

    useEffect(() => {
        !subject && getSubjectById(subjectId).then((subject) => setSubject(subject))
        const params = {subject: subjectId}
        getAllClasses(params).then((classes) => {
            if (userId){
                // SELECT ONLY THE SUBJECTS THAT THE USE HAVE
                getUserClasses(userId).then((userClasses) => {
                    const userClassesIds = userClasses.map((classItem) => classItem.id)
                    setClasses(classes.filter((classItem) => CheckElementInList(userClassesIds, classItem.id)))
                })
            }
            else setClasses(classes)
        })
        getCourseBydId(subject.course).then((course) => setCourse(course))
    }, [subject, subjectId, userId]);

    return(
        <>
            {(subject && course) &&
                <div>
                    <h1>{getTitleFromPath(location)}</h1>
                    <Link to={`/clipclass/courses/${subject.course}`}>
                        <b>Course:</b> {course.title + " - " + course.year}
                    </Link>
                    <p><b>Title:</b> {subject.title}</p>
                    <p><b>Code:</b> {subject.code}</p>
                    <Cards sectionTitle={userId ? "My subject classes" : "All subject classes"}
                           content={classes}
                           cardPath={"classes"}
                           table={"classes"}/>
                </div>
            }

        </>
    )
}

export default Subject