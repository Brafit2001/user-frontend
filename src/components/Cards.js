import Card from "./Card";


const Cards = ({results, cardPath}) => {
    return(
        <div className={"cards"}>
            {results ?
                results.map((element, index) => {
                    return (
                        <Card path={cardPath} element={element} key={index}/>
                    )
                })
                : <p>No results</p>
            }
        </div>
    )
}


export default Cards;