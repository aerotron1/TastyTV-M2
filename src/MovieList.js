import Button from 'react-bootstrap/Button'


function MovieList(props) {

    return (
        <div>
            {props.movieData.map((movie, index) =>
            <Button variant="outline-secondary" key={index} onClick={() => props.setCurrentMovie(movie)}>
                    {movie.name}
            </Button>
        )}
        </div>
    )
}

export default MovieList