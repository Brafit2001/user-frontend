import {Route} from "react-router-dom";
import Vote from "../../pages/votes-ms/votes/Vote";
import EditVote from "../../pages/votes-ms/votes/EditVote";

export const votesRoutes = [
    <Route path="courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={0}/>,
    <Route path="subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={1}/>,
    <Route path="classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={2}/>,
    <Route path="groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={3}/>,
    <Route path="topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={4}/>,
    <Route path="posts/:postId/votes/:voteId" element={<Vote/>} key={5}/>,
    <Route path="votes/:voteId" element={<Vote/>} key={6} />,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={0}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={1}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={2}/>,
    <Route path="users/:userId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={3}/>,
    <Route path="users/:userId/topics/:topicId/posts/:postId/votes/:voteId" element={<Vote/>} key={4}/>,
    <Route path="users/:userId/posts/:postId/votes/:voteId" element={<Vote/>} key={5}/>,
    <Route path="users/:userId/votes/:voteId" element={<Vote/>} key={6} />,

    <Route path="users/:userId/courses/:courseId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId/edit" element={<EditVote/>} key={0}/>,
    <Route path="users/:userId/subjects/:subjectId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId/edit" element={<EditVote/>} key={1}/>,
    <Route path="users/:userId/classes/:classId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId/edit" element={<EditVote/>} key={2}/>,
    <Route path="users/:userId/groups/:groupId/topics/:topicId/posts/:postId/votes/:voteId/edit" element={<EditVote/>} key={3}/>,
    <Route path="users/:userId/topics/:topicId/posts/:postId/votes/:voteId/edit" element={<EditVote/>} key={4}/>,
    <Route path="users/:userId/posts/:postId/votes/:voteId/edit" element={<EditVote/>} key={5}/>,
    <Route path="users/:userId/votes/:voteId/edit" element={<EditVote/>} key={6} />,


]