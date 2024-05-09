import {useEffect, useState} from "react";
import {getAllCourses} from "../../../services/courses-ms/CourseService";
import Cards from "../../../components/cards/Cards";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserCourses} from "../../../services/users-ms/UserService";
import {useLocation} from "react-router-dom";


const Courses = () => {
    
    const [courses, setCourses] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userId = getIdFromPath(location)


    useEffect(() => {
        userId ?
            getUserCourses(userId).then((courses) => setCourses(courses))
            : getAllCourses().then((courses) => setCourses(courses))
    }, [userId]);
    
    return (

        <section>
            <Cards sectionTitle={userId ? "My courses" : "All courses"}
                content={courses}
                cardPath={"courses"}
                table={"courses"}/>
        </section>
    )
}

export default Courses;