import Groups from "../../pages/groups-ms/groups/Groups";
import Group from "../../pages/groups-ms/groups/Group";
import {Route} from "react-router-dom";



export const groupsRoutes = [
    <Route path="groups" element={<Groups/>} key={0}/>,

    <Route path="courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId" element={<Group/>} key={1}/>,
    <Route path="subjects/:subjectId/classes/:classId/groups/:groupId" element={<Group/>} key={2}/>,
    <Route path="classes/:classId/groups/:groupId" element={<Group/>} key={3} />,
    <Route path="groups/:groupId" element={<Group/>} key={4}/>,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId" element={<Group/>} key={1}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId" element={<Group/>} key={2}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId" element={<Group/>} key={3} />,
    <Route path="users/:userId/groups/:groupId" element={<Group/>} key={4}/>,
]