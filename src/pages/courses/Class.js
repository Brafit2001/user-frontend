import PageHeader from "../../components/PageHeader";
import {useEffect, useState} from "react";
import {ClipclassData} from "../../components/ClipclassData";
import {useLocation} from "react-router-dom";
import {Filter} from "../../utils/AuxiliarFunctions";
import {getAllClasses} from "../../services/courses-ms/ClassService";
import {getAllGroups} from "../../services/groups-ms/GroupService";
import Cards from "../../components/Cards";


const ClassPage = () => {

    const [groups, setGroups] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["groups"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const location = useLocation()
    const classItem = location.state

    const results = !search ? groups : Filter(groups, filterFields, checkedState, search)
    useEffect(() => {
        const classId = classItem.id
        const params = {"class": classId}
        getAllGroups(params).then((groups) => {
            setGroups(groups)
        })
    }, [classItem.id]);
    return (
        <>
            <h1>Class > {classItem.id}</h1>
            {Object.keys(classItem).map((key) => {
                return (
                    <p>{key} : {classItem[key]}</p>
                )
            })}
            <PageHeader title={"Groups"} setQuery={setSearch} query={search} filter={checkedState}
                        setFilter={setCheckedState}/>
            <Cards results={results} cardPath={"/clipclass/groups"}/>
        </>
    )
}


export default ClassPage;