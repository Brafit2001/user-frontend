import Subjects from "../../pages/courses-ms/subjects/Subjects";
import Subject from "../../pages/courses-ms/subjects/Subject";
import {Route} from "react-router-dom";
export const subjectsRoutes = [
    <Route path="subjects" element={<Subjects />} key={0} />,

    <Route path="courses/:courseId/subjects/:subjectId" element={<Subject/>} key={1}/>,
    <Route path="subjects/:subjectId" element={<Subject/>} key={1}/>,

    <Route path="users/:userId/subjects/:subjectId" element={<Subject/>} key={1}/>,
    <Route path="users/:userId/courses/:courseId/subjects/:subjectId" element={<Subject/>} key={1}/>
]