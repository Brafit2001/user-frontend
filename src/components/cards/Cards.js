import Card from "./Card";
import {Grid} from "react-loader-spinner";
import {useState} from "react";
import {ClipclassData} from "../ClipclassData";
import {Filter} from "../../utils/AuxiliarFunctions";
import SearchSection from "../SearchSection";


const Cards = ({content,sectionTitle, cardPath, table,addButtonVisible = false, addButtonPath}) => {

    // SEARCH
    const [search, setSearch ] = useState("")
    const filterFields = ClipclassData[table]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const results = !search ? content : Filter(content, filterFields, checkedState, search)


    return(
        <div>
            <SearchSection title={sectionTitle}
                           table={table}
                           setQuery={setSearch}
                           query={search}
                           filter={checkedState}
                           setFilter={setCheckedState}
                           addButtonVisible={addButtonVisible}
                           addButtonPath={addButtonPath}
            />
            <div className={"cards"}>
                {results ?
                    (results.length !== 0) ?
                        results.map((element, index) => {
                            return (<Card path={cardPath} element={element} key={index} table={table}/>)
                        }) : <Grid height="50" width="50" color="#4781FFBA" ariaLabel="grid-loading" radius="12.5"
                                   wrapperClass="grid-wrapper" style={{}}/>
                    : <p>No results</p>
                }
            </div>
        </div>

    )
}


export default Cards;