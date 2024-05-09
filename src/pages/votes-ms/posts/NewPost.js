import MyForm from "../../../components/form/MyForm";
import {newPost} from "../../../services/votes-ms/PostService";
import {getLoggedUserId} from "../../../services/users-ms/UserService";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {useLocation} from "react-router-dom";

const NewPost = () =>{
    const location = useLocation()
    const userId = getLoggedUserId()
    const topicId = getIdFromPath(location, "topics")
    const postType = [0,1,2]

    const post = {
        user: userId,
        topic: topicId,
        title: null,
        type: postType[0],
        content: null,
        visible: 0
    }

    return (
        <div>
            <h1>NewPost</h1>
            <MyForm item={post}
                    actionFunction={newPost}
                    table="posts"
                    mode="create"
                    selectList={{type: postType}}
            />
        </div>

    )
};

export default NewPost;