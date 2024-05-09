import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import User from "./pages/users-ms/users/User";
import {userSectionRoutes} from "./routes/UserSectionRoutes";
import {coursesRoutes} from "./routes/courses-ms/CoursesRoutes";
import {subjectsRoutes} from "./routes/courses-ms/SubjectsRoutes";
import {classesRoutes} from "./routes/courses-ms/ClassesRoutes";
import {groupsRoutes} from "./routes/groups-ms/GroupsRoutes";
import {topicsRoutes} from "./routes/groups-ms/TopicsRoutes";
import {postsRoutes} from "./routes/votes-ms/PostsRoutes";
import {votesRoutes} from "./routes/votes-ms/VotesRoutes";
import Class from "./pages/courses-ms/classes/Class";
import ErrorPage from "./pages/Error";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/clipclass" element={<Layout />}>
              <Route index element={<Home />} />
              {userSectionRoutes}
              {coursesRoutes}
              {subjectsRoutes}
              {classesRoutes}
              {groupsRoutes}
              {topicsRoutes}
              {postsRoutes}
              {votesRoutes}
              <Route path={"users/:userId"} element={<User/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
