function MovieList(props) {

    return (
        <div>
            {props.movieData.map((movie, index) =>
            <button key={index} onClick={() => props.setCurrentMovie(movie)}>
                    {movie.name}
            </button>
        )}
        </div>
    )
}

export default MovieList