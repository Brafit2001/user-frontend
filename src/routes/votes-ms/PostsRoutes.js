import {Route} from "react-router-dom";
import Post from "../../pages/votes-ms/posts/Post";
import NewPost from "../../pages/votes-ms/posts/NewPost";
import EditPost from "../../pages/votes-ms/posts/EditPost";


export const postsRoutes = [
    <Route path="courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={0}/>,
    <Route path="subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={1}/>,
    <Route path="classes/:classId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={2}/>,
    <Route path="groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={3}/>,
    <Route path="topics/:topicId/posts/:postId" element={<Post/>} key={4}/>,
    <Route path="posts/:postId" element={<Post/>} key={5}/>,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={0}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={1}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={2}/>,
    <Route path="users/:userId/groups/:groupId/topics/:topicId/posts/:postId" element={<Post/>} key={3}/>,
    <Route path="users/:userId/topics/:topicId/posts/:postId" element={<Post/>} key={4}/>,
    <Route path="users/:userId/posts/:postId" element={<Post/>} key={5}/>,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/edit" element={<EditPost/>} key={0}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/edit" element={<EditPost/>} key={1}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/edit" element={<EditPost/>} key={2}/>,
    <Route path="users/:userId/groups/:groupId/topics/:topicId/posts/:postId/edit" element={<EditPost/>} key={3}/>,
    <Route path="users/:userId/topics/:topicId/posts/:postId/edit" element={<EditPost/>} key={4}/>,
    <Route path="users/:userId/posts/:postId/edit" element={<EditPost/>} key={5}/>,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/new" element={<NewPost/>} key={0}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/new" element={<NewPost/>} key={1}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId/topics/:topicId/posts/new" element={<NewPost/>} key={2}/>,
    <Route path="users/:userId/groups/:groupId/topics/:topicId/posts/new" element={<NewPost/>} key={3}/>,
    <Route path="users/:userId/topics/:topicId/posts/new" element={<NewPost/>} key={4}/>,
    <Route path="users/:userId/posts/new" element={<NewPost/>} key={5}/>,
]