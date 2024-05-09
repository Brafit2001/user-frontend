import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {CheckElementInList, getIdFromPath} from "../../../utils/AuxiliarFunctions";
import {getUserSubjects} from "../../../services/users-ms/UserService";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";
import Cards from "../../../components/cards/Cards";
import {getAllVotes} from "../../../services/votes-ms/VoteService";


const Votes = () => {
    const [votes, setVotes] = useState(null)
    // COURSE ID
    const location = useLocation()
    const userId = getIdFromPath(location)


    useEffect(() => {
        userId && getAllVotes({user: userId}).then((votes) => setVotes(votes))
    }, [userId]);

    return (

        <section>
            {
                userId &&
                <Cards sectionTitle={"My votes"}
                       content={votes}
                       cardPath={"votes"}
                       table={"votes"}/>
            }

        </section>
    )
}

export default Votes;