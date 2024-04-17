import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../../services/courses-ms/SubjectService";
import PageHeader from "../../components/PageHeader";
import {ClipclassData} from "../../components/ClipclassData";
import {Filter} from "../../utils/AuxiliarFunctions";
import Card from "../../components/Card";
import Cards from "../../components/Cards";


const Course = () => {
    const [subjects, setSubjects] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["subjects"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const location = useLocation()
    const course = location.state

    const results = !search ? subjects : Filter(subjects, filterFields, checkedState, search)
    useEffect(() => {
        const courseId = course.id
        const params = {course: courseId}
        getAllSubjects(params).then((subjects) => {
            console.log(subjects)
            setSubjects(subjects)
        })
    }, [course.id]);
    return(
        <>
            <h1>Courses > {course.id}</h1>
            <p>Course title: {course.title}</p>
            <p>Course year: {course.year}</p>
            <PageHeader title={"Subjects"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <Cards results={results} cardPath={"/clipclass/subjects"}/>
        </>
    )
}

export default Course;