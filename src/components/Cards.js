import Card from "./Card";


const Cards = ({results, cardPath, table}) => {
    return(
        <div className={"cards"}>
            {results ?
                results.map((element, index) => {
                    return (
                        <Card path={cardPath} element={element} key={index} table={table}/>
                    )
                })
                : <p>No results</p>
            }
        </div>
    )
}


export default Cards;