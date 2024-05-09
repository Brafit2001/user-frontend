import Topics from "../../pages/groups-ms/topics/Topics";
import {Route} from "react-router-dom";
import Topic from "../../pages/groups-ms/topics/Topic";


export const topicsRoutes = [
    <Route path="topics" element={<Topics />} key={0}/>,

    <Route path="courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId" element={<Topic/>} key={1}/>,
    <Route path="subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId" element={<Topic/>} key={2}/>,
    <Route path="classes/:classId/groups/:groupId/topics/:topicId" element={<Topic/>} key={3}/>,
    <Route path="groups/:groupId/topics/:topicId" element={<Topic/>} key={4}/>,
    <Route path="topics/:topicId" element={<Topic/>} key={5}/>,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId" element={<Topic/>} key={1}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId" element={<Topic/>} key={2}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId/topics/:topicId" element={<Topic/>} key={3}/>,
    <Route path="users/:userId/groups/:groupId/topics/:topicId" element={<Topic/>} key={4}/>,
    <Route path="users/:userId/topics/:topicId" element={<Topic/>} key={5}/>,
]