import Courses from "../../pages/courses-ms/courses/Courses";
import {Route} from "react-router-dom";
import Course from "../../pages/courses-ms/courses/Course";


export const coursesRoutes = [
    <Route path="courses" element={<Courses />} key={0}/>,
    <Route path="users/:userId/courses/:courseId" element={<Course/>} key={1}/>,
    <Route path="courses/:courseId" element={<Course/>} key={1}/>
]