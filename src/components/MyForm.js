
import {CheckElementInList, FormatDateToInput} from "../utils/AuxiliarFunctions";
import {ClipclassData} from "./ClipclassData";


const MyForm = ({item, actionFunction, table, mode, selectList}) => {

    function handleOnchange(key, e) {
        e.preventDefault()
        item[key.toLowerCase()] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        actionFunction(item).then(() => window.location.reload())

    }

    function selectInput(item, key) {
        const dateFields = ["deadline"]
        const multimediaFields = ["image"]
        const integerFields = ["code", "unit", ]
        const selectFields = ["course", "subject", "class", "user", "post", "topic"]
        if (CheckElementInList(selectFields, key)){
            return (
                <select name={key} id={key}>
                    {
                        selectList[key].sort().map((id) => {
                            return <option value={id}>{id}</option>
                        })
                    }
                </select>
            )

        } else if (CheckElementInList(multimediaFields, key)) {
            return <input type="file" defaultValue={null} onChange={(e) => handleOnchange(key, e)}/>
        }else if (CheckElementInList(integerFields, key)) {
            return <input type="number" defaultValue={item[key]} onChange={(e) => handleOnchange(key, e)}/>
        }else if (CheckElementInList(dateFields, key)){
            const date = new Date(item[key.toLowerCase()])
            return <input type="date" defaultValue={FormatDateToInput(date)} onChange={(e) => handleOnchange(key, e)}/>
        }else if(key === "email"){
            return <input type="email" pattern=".+@alumnos.uc3\.es" size="30" required defaultValue={item[key]} onChange={(e) => handleOnchange(key, e)}/>
        }
        else {
            return <input type="text" defaultValue={item[key.toLowerCase()]} onChange={(e) => handleOnchange(key, e)}/>
        }
    }

    return (
        <form className="edit-form" action="">
            {
                ClipclassData[table][mode].map((key) => {
                    return (
                        <div key={key}>
                            <label htmlFor="">{key + ": "}</label>
                            {selectInput(item, key)}
                        </div>
                    )
                })
            }
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    )

};

export default MyForm;