import { useState } from 'react'
import AddMovie from './AddMovie'

function AddMovieList() {
    const [adds, setAdds] = useState([])
    const [movieValue, setMovieValue] = useState("")
    //const [releasedValue, setreleasedValue] = useState("")

    //console.log(movieValue)

    function handleChangeName(event) {
        setMovieValue(event.target.value)
        //setreleasedValue(event.target.value)//render check
    }

    //     function handleChangerel(event) {
    //     setMovieValue(event.target.value)
    //     //setreleasedValue(event.target.value)//render check
    // }

    function addMovie(event) {
        event.preventDefault()
        setAdds([...adds,{name:movieValue, watched: false}])//render check
    }

    function watchedMovie(name) {
        const newMovies = adds.map((movie) => {
            if (movie.name === name) {
                return {...movie, watched: true}
            }
            return movie
        })
        setAdds(newMovies)
    }

    return (
        <section>
            <div>
                {adds.map((add, index) => 
                    <AddMovie watchedMovie={watchedMovie} key={`add-${index}`} add={add}/>
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