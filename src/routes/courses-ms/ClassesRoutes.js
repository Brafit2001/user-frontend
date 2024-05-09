import Classes from "../../pages/courses-ms/classes/Classes";
import Class from "../../pages/courses-ms/classes/Class";
import {Route} from "react-router-dom";



export const classesRoutes = [
    <Route path="classes" element={<Classes />} key={0}/>,

    <Route path="courses/:courseId/subjects/:subjectId/classes/:classId" element={<Class />} key={1}/>,
    <Route path="subjects/:subjectId/classes/:classId" element={<Class />} key={2}/>,
    <Route path="classes/:classId" element={<Class />} key={3}/>,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId" element={<Class />} key={1}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId" element={<Class />} key={2}/>,
    <Route path="users/:userId/classes/:classId" element={<Class />} key={3}/>,
]