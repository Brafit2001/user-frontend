import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Course from "./pages/courses/Course";
import Subject from "./pages/courses/Subject";
import Group from "./pages/groups/Group";
import Class from "./pages/courses/Class";
import Topic from "./pages/groups/Topic";
import Post from "./pages/votes/Post";
import Vote from "./pages/votes/Vote";
import User from "./pages/users/User";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/clipclass" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={"courses/:courseId"} element={<Course/>}/>
              <Route path={"subjects/:subjectId"} element={<Subject/>} />
              <Route path={"groups/:groupId"} element={<Group/>} />
              <Route path={"classes/:classId"} element={<Class/>} />
              <Route path={"topics/:topicId"} element={<Topic/>} />
              <Route path={"posts/:postId"} element={<Post/>} />
              <Route path={"votes/:voteId"} element={<Vote/>} />
              <Route path={"users/:userId"} element={<User/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
