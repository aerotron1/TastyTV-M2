import { useState } from 'react'
import AddMovie from './AddMovie'
import Button from 'react-bootstrap/Button'

function AddMovieList() {
    const [addsMovie, setAddsMovie] = useState([])
    const [movieValue, setMovieValue] = useState("")
    const [movieRelease, setMovieRelease] = useState("")

    function handleChangeName(event) {
        setMovieValue(event.target.value)
    }

    function handleChangeRelease(event) {
        setMovieRelease(event.target.value)
    }

    function addMovie(event) {
        event.preventDefault()
        setAddsMovie([...addsMovie,{name:movieValue, release:movieRelease,watched: false}])
    }

    function removeMovie(movie) {
        const newMovies = addsMovie.filter((movieItem) => movieItem !== movie)
        setAddsMovie(newMovies)
    }

    function watchedMovie(name, release) {
        const newMovies = addsMovie.map((movie) => {
            if (movie.name === name && movie.release === release) {
                return {...movie, watched: true}
            }
            return movie
        })
        setAddsMovie(newMovies)
    }

    return (
        <section className="bg-success p-2 text-white bg-opacity-50">
            <div>
                {addsMovie.map((add,index) => 
                    <AddMovie watchedMovie={watchedMovie} removeMovie={removeMovie} key={`addMovie-${index}`} addMovie={add}/>
                )}
            </div>
            <form>
                <input onChange={handleChangeName} placeholder="Add name" />
                <input onChange={handleChangeRelease} placeholder="Add released on" />
                <Button variant="outline-success" onClick={addMovie}>Add Movie</Button>{' '}
                <button onClick={() => setMovieValue("")}>Remove movies</button>
            </form>
        </section>
    )
}

export default AddMovieList