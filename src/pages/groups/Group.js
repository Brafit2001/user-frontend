import {useEffect, useState} from "react";
import {ClipclassData} from "../../components/ClipclassData";
import {useLocation} from "react-router-dom";
import {Filter} from "../../utils/AuxiliarFunctions";
import PageHeader from "../../components/PageHeader";
import {getGroupTopics, getGroupUsers} from "../../services/groups-ms/GroupService";
import {getAllUsers} from "../../services/users-ms/UserService";
import Cards from "../../components/Cards";
import {getAllTopics} from "../../services/groups-ms/TopicService";



const Group = () => {
    const [users, setUsers] = useState([])
    const [topics, setTopics] = useState([])

    const location = useLocation()
    const group = location.state

    // SEARCH
    const [ searchUsers, setSearchUsers ] = useState("")
    const filterFieldsUsers = ClipclassData["users"]["filter"]
    const [checkedStateUsers, setCheckedStateUsers] = useState(new Array(filterFieldsUsers.length).fill(true));

    const [ searchTopics, setSearchTopics ] = useState("")
    const filterFieldsTopics = ClipclassData["topics"]["filter"]
    const [checkedStateTopics, setCheckedStateTopics] = useState(new Array(filterFieldsTopics.length).fill(true));

    const results_users = !searchUsers ? users : Filter(users, filterFieldsUsers, checkedStateUsers, searchUsers)
    const results_topics = !searchTopics ? topics : Filter(topics, filterFieldsTopics, checkedStateTopics, searchTopics)
    function parseIds(list){
        let chain = ''
        list.forEach((item, index, array) => {
            chain += item.id
            if (index !== array.length - 1) chain += ","
        })
        return chain
    }
    useEffect(() => {
        const groupId = group.id

        getGroupUsers(groupId).then((usersIds) => {
            const params = {"ids": parseIds(usersIds)}
            getAllUsers(params).then((users) => setUsers(users))
        })
        getGroupTopics(groupId).then((topicsIds) => {
            const params = {"ids": parseIds(topicsIds)}
            getAllTopics(params).then((topics) => setTopics(topics))
        })
    }, [group.id]);
    return(
        <>
            <h1>Groups > {group.id}</h1>
            {Object.keys(group).map((key) => {
                return (
                    <p key={key}>{key} : {group[key]}</p>
                )
            })}
            <PageHeader title={"Users"} setQuery={setSearchUsers} query={searchUsers} filter={checkedStateUsers}
                        setFilter={setCheckedStateUsers}/>
            <Cards results={results_users} cardPath={"/clipclass/users"} table={"users"}/>
            <PageHeader title={"Topics"} setQuery={setSearchTopics} query={searchTopics} filter={checkedStateTopics}
                        setFilter={setCheckedStateTopics}/>
            <Cards results={results_topics} cardPath={"/clipclass/topics"} table={"topics"}/>
        </>
    )
}

export default Group