import {useLocation} from "react-router-dom";


const Vote = () => {
    const location = useLocation()
    const vote = location.state
    return (
        <>
            <h1>Vote > {vote.id}</h1>
            {Object.keys(vote).map((key) => {
                return (
                    <p key={key}>{key} : {vote[key]}</p>
                )
            })}
        </>
    )
}

export default Vote;
