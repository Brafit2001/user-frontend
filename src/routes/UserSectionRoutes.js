import {Route} from "react-router-dom";
import {CLIPCLASS_URL} from "../Constants";
import Courses from "../pages/courses-ms/courses/Courses";
import Subjects from "../pages/courses-ms/subjects/Subjects";
import Classes from "../pages/courses-ms/classes/Classes";
import Topics from "../pages/groups-ms/topics/Topics";
import Groups from "../pages/groups-ms/groups/Groups";
import Votes from "../pages/votes-ms/votes/Votes";
import EditUser from "../pages/users-ms/users/EditUser";


export const userSectionRoutes = [
    <Route path={`users/:userId/courses`} element={<Courses />} key={0}/>,
    <Route path={`users/:userId/subjects`} element={<Subjects />} key={1}/>,
    <Route path={`users/:userId/classes`} element={<Classes />} key={2}/>,
    <Route path={`users/:userId/topics`} element={<Topics />} key={3}/>,
    <Route path={`users/:userId/groups`} element={<Groups />} key={4}/>,
    <Route path={`users/:userId/votes`} element={<Votes />} key={5}/>,
    <Route path="users/:userId/edit" element={<EditUser/>} key={6}/>,
]
