import {useEffect, useState} from "react";
import {ClipclassData} from "../../components/ClipclassData";
import {Link, useLocation} from "react-router-dom";
import {Filter} from "../../utils/AuxiliarFunctions";
import {getAllSubjects} from "../../services/courses-ms/SubjectService";
import PageHeader from "../../components/PageHeader";
import {getAllClasses} from "../../services/courses-ms/ClassService";
import Card from "../../components/Card";
import Cards from "../../components/Cards";


const Subject = () => {
    const [classes, setClasses] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["classes"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const location = useLocation()
    const subject = location.state

    const results = !search ? classes : Filter(classes, filterFields, checkedState, search)
    useEffect(() => {
        const subjectId = subject.id
        const params = {subject: subjectId}
        getAllClasses(params).then((classes) => {
            setClasses(classes)
        })
    }, [subject.id]);

    return(
        <>
            <h1>Subjects > {subject.id}</h1>
            <p>Subject title: {subject.title}</p>
            <p>Subject code: {subject.code}</p>
            <PageHeader title={"Classes"} setQuery={setSearch} query={search} filter={checkedState}
                        setFilter={setCheckedState}/>
            <Cards results={results} cardPath={"/clipclass/classes"}/>
        </>
    )
}

export default Subject