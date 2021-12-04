import { useState } from 'react'
import AddMovie from './AddMovie'
import Button from 'react-bootstrap/Button'

function AddMovieList() {
    const [adds, setAdds] = useState([])
    const [movieValue, setMovieValue] = useState("")

    function handleChangeName(event) {
        setMovieValue(event.target.value)
    }

    function addMovie(event) {
        event.preventDefault()
        setAdds([...adds,{name:movieValue, watched: false}])
    }

    function removeMovie(movie) {
        const newMovies = adds.filter((movieItem) => movieItem !== movie)
        setAdds(newMovies)
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
        <section class="bg-success p-2 text-white bg-opacity-50">
            <div>
                {adds.map((add, index) => 
                    <AddMovie watchedMovie={watchedMovie} removeMovie={removeMovie} key={`add-${index}`} add={add}/>
                )}
            </div>
            <form>
                <input onChange={handleChangeName} placeholder="Add name" />
                <input onChange={handleChangeName} placeholder="Add released on" />
                <Button variant="outline-success" onClick={addMovie}>Add Movie</Button>{' '}
                <button onClick={() => setMovieValue("")}>Remove movies</button>
            </form>
        </section>
    )
}

export default AddMovieList