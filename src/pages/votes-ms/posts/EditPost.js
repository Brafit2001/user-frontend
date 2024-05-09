import {useLocation} from "react-router-dom";
import {editPost} from "../../../services/votes-ms/PostService";
import MyForm from "../../../components/form/MyForm";


const EditPost = () =>{

    const location = useLocation()
    const post = location.state


    return (
        <div>
            <h1>EditPost</h1>
            <MyForm item={post}
                    actionFunction={editPost}
                    table="posts"
                    mode={"editable"}
                    selectList={{type: [0,1,2]}}
            />
        </div>

    )
};

export default EditPost;