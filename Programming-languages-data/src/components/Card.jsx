function Card({name,year,creator,useCase}){
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Year of Start: {year}</p>
            <p>Creator: {creator}</p>
            <p>Use Case:{useCase}</p>
            <p></p>
        </div>
    )
}

export default Card