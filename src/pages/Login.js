
import  '../styles/LoginPage.scss'
import {useState} from "react";
import {login} from "../services/AuthService";

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(){
        login(username, password)
            .then((response) => {
                const token = response.data.token
                localStorage.setItem("token", token)
                window.location.href = "/clipclass";
            })
            .catch((error) => alert("something went wrong"))
    }

    return(
        <main className="login-container">
            <div className="left">
                <div className="content">
                    <div className="texts">
                        <h2>Welcome to Clipclass</h2>
                        <p>Lorem ipsum dolor sit amet </p>
                    </div>
                    <form action="">
                        <label htmlFor="">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="">Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="button" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            <div className="right">

            </div>
        </main>
    );

}

export default Login;