import PageHeader from "../components/PageHeader";
import {useEffect, useState} from "react";
import {ClipclassData} from "../components/ClipclassData";
import {getAllCourses} from "../services/courses-ms/CourseService";
import {Filter} from "../utils/AuxiliarFunctions";
import Cards from "../components/Cards";
const Home = () => {
    const [courses, setCourses] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = ClipclassData["courses"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? courses : Filter(courses, filterFields, checkedState, search)
    useEffect(() => {
        getAllCourses().then((response) => setCourses(response))
    }, []);

    return (
        <div>
            <section>
                <h1>Welcome User</h1>
                <h3>Home</h3>
                <PageHeader title={"Courses"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
                <Cards results={results} cardPath={"/clipclass/courses"} table={"courses"}/>
            </section>

        </div>
    )
}

export default Home;