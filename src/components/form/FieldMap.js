import {FormatDateToInput, readImage} from "../../utils/AuxiliarFunctions";
import {useState} from "react";
import {ClipclassData} from "../ClipclassData";


const FieldMap = ({ fieldType, fieldKey, item, selectList, table}) => {

    const defaultImages = ClipclassData["users"]["defaultImages"]
    const baseImageState = new Array(defaultImages.length).fill(false)
    const [imageState, setImageState] = useState(baseImageState);
    const [imagePopUp, setImagePopUp] = useState(false)

    function handleOnchange(key, e) {
        e.preventDefault()
        if (key === "image" || (key === "content" && table !== "votes")) item[key.toLowerCase()] = e.target.files[0]
        else item[key.toLowerCase()] = e.target.value
    }

    switch (fieldType) {
        case 'select':
            return (
                <select name={fieldKey} id={fieldKey} onChange={(e) => handleOnchange(fieldKey, e)}>
                    <option value={item[fieldKey]} key={item[fieldKey]}>{item[fieldKey]}</option>
                    {selectList[fieldKey].sort().map((id) => (
                        (item[fieldKey] !== id) && <option value={id} key={id}>{id}</option>
                    ))}
                </select>
            );
        case 'image':
            return (
                <div>
                    <div className="edit-image">
                        <img
                            src={readImage(item[fieldKey], table)}
                            alt=""
                            onClick={() => setImagePopUp(!imagePopUp)}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    {imagePopUp && (
                        <div className="popup-container">
                            <div className="popup">
                                <button type="button" onClick={() => setImagePopUp(!imagePopUp)}>X</button>
                                <h3>Default Images:</h3>
                                <div className="default-images">
                                    {Object.keys(defaultImages).map((key, index) => (
                                        <img
                                            src={defaultImages[key]}
                                            alt=""
                                            className={imageState[index] ? "button on" : "button off"}
                                            onClick={() => {
                                                baseImageState[index] = !imageState[index];
                                                setImageState(baseImageState);
                                                item.image = key;
                                            }}
                                            key={key}
                                        />
                                    ))}
                                </div>
                                <input type="file" defaultValue={null} onChange={(e) => handleOnchange(fieldKey, e)} />
                            </div>
                        </div>
                    )}
                </div>
            );
        case 'content':
            return (
                <div>
                    <input
                        type="file"
                        defaultValue={null}
                        onChange={(e) => handleOnchange(fieldKey, e)} />
                </div>
            );
        case 'number':
            return (
                <input
                    type="number"
                    defaultValue={item[fieldKey]}
                    onChange={(e) => handleOnchange(fieldKey, e)} />
            );
        case 'date':
            const date = new Date(item[fieldKey.toLowerCase()]);
            return (
                <input type="date"
                       defaultValue={FormatDateToInput(date)}
                       onChange={(e) => handleOnchange(fieldKey, e)} />
            );
        case 'email':
            return (
                <input
                    type="email"
                    pattern=".+@alumnos.uc3\.es"
                    size="30"
                    required
                    defaultValue={item[fieldKey]}
                    onChange={(e) => handleOnchange(fieldKey, e)}
                />
            );
        default:
            return (
                <input
                    type="text"
                    defaultValue={item[fieldKey.toLowerCase()]}
                    onChange={(e) => handleOnchange(fieldKey, e)}
                />
            );
    }
};

export default FieldMap;