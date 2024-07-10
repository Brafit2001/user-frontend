import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";
import {CheckElementInList, Filter, getTitleFromPath, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import Cards from "../../../components/cards/Cards";
import {getCourseBydId} from "../../../services/courses-ms/CourseService";
import {getUserSubjects} from "../../../services/users-ms/UserService";


const Course = () => {
    const [subjects, setSubjects] = useState([])
    // COURSE ID
    const location = useLocation()
    const path = location.pathname.split('/')
    const courseId = path[path.length - 1]
    const [course, setCourse] = useState(location.state)
    
    const userId = getIdFromPath(location)


    useEffect(() => {
        !course && getCourseBydId(courseId).then((course) => setCourse(course))
        const params = {course: courseId}
        getAllSubjects(params).then((subjects) => {
            if (userId){
                // SELECT ONLY THE SUBJECTS THAT THE USE HAVE
                getUserSubjects(userId).then((userSubjects) => {
                    const userSubjectsIds = userSubjects.map((subject) => subject.id)
                    setSubjects(subjects.filter((subject) => CheckElementInList(userSubjectsIds, subject.id)))
                })
            }
            else setSubjects(subjects)
        })
    }, [course, courseId, userId]);

    return(
        <>
            {course &&
                <div>
                    <h1>{getTitleFromPath(location)}</h1>
                    <p><b>Title:</b> {course.title}</p>
                    <p><b>Year:</b> {course.year}</p>
                    <Cards sectionTitle={userId ? "My course subjects" : "All course subjects"}
                           content={subjects}
                           cardPath={"subjects"}
                           table={"subjects"}/>
                </div>
            }
        </>
    )
}

export default Course;