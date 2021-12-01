import { useState } from 'react'

function AddMovieList() {
    const [adds, setAdds] = useState([])
    const [movieValue, setMovieValue] = useState("")
    //const [releasedValue, setreleasedValue] = useState("")

    //console.log(movieValue)

    function handleChangeName(event) {
        setMovieValue(event.target.value)
        //setreleasedValue(event.target.value)//render check
    }

    function addMovie(event) {
        event.preventDefault()
        setAdds([...adds,{name:movieValue}])//render check
    }

    return (
        <section>
            <div>
                {adds.map((add, index) => 
                    <h2 key={`add-${index}`}>{add.name /* + " " + add.releasedOn */}</h2>
                )}
            </div>
            <form>
                <input onChange={handleChangeName} placeholder="Add name" />
                <input onChange={handleChangeName} placeholder="Add released on" />
                <button onClick={addMovie} >Add Movie</button>
            </form>
        </section>
    )
}

export default AddMovieList