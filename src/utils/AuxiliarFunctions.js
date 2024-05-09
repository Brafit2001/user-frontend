import {ClipclassData} from "../components/ClipclassData";



const Capitalize = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase()
    const remainingLetters = word.slice(1)
    return (
        firstLetterCap + remainingLetters
    )
}
export default Capitalize;

export function readImage(image, table){
    if (image === null || image === undefined) return ""

    const defautlImages =  ClipclassData[table]["defaultImages"]
    const defaultImagesList = Object.keys(defautlImages)

    if (typeof image === "object") {
        return URL.createObjectURL(image)
    }
    else if (CheckElementInList(defaultImagesList, image)){
        return defautlImages[image]
    }else {
        return `data:image/*;base64,${image}`
    }

}

export function checkParams(params, url) {
    if (params !== null && params !== undefined) {
        let chain = "?"
        Object.keys(params).forEach((key) => chain += `${key}=${params[key]}&&`)
        return url + chain
    } else {
        return url
    }
}

export const containsObject = (obj, list) => {
    list.forEach((element) => {
        if (element.id === obj.id) return true
    })
    return false
}

export const CheckElementInList = (list, element) => {
    return list.some((item) => item === element)
}
export const FormatDateToInput = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + mm + '-' + dd;
}
export const Filter = (list, filterFields, checkedState, searchQuery) => {

    // Comprueba que la lista de valores contiene al menos un elemento de la búsqueda

    const filterCheck = (element) => element && element.toString().toLowerCase().includes(searchQuery.toLocaleLowerCase())
    const results = list.filter((item) => {
        // Lista de campos a filtrar
        const filteredFields = filterFields.filter((value, index) => !!checkedState[index])
        // Objecto con campos filtrados
        const picked = Object.fromEntries(
            Object.entries(item)
                .filter(([key]) => filteredFields.includes(key))
        );
        return Object.values(picked).some(filterCheck)
    })
    return (results.length === 0) ? null : results
}


export const getIdFromPath = (location, table = "users") => {
    const path = location.pathname.split('/')
    return (CheckElementInList(path, table)) ? path[path.indexOf(table) + 1] : null
}

export const getTitleFromPath = (location) => {
    let path = location.pathname.split("/")
    const usersTitleIndex = path.indexOf("users")
    const clipclassIndex = path.indexOf("clipclass")
    let chain = "";
    if (usersTitleIndex > 0){
        path =  path.slice(usersTitleIndex + 2)
    }else{
        path = path.slice(clipclassIndex + 1)
    }

    path.forEach((key, index) => {
        chain += key
        if (index !== (path.length -1)){
            chain += ">"
        }
    })

    return chain

}