import { useState, useEffect } from 'react';
import MovieList from './MovieList'
import Movie from './Movie'
import AdMovieL from './AddMovieList'
import './App.css';

const initialMovie = {
    "id": 391,
    "name": "Shrek",
    "releasedOn": "25/07/2060",
    "watched": false,
    "bannerUrl": "https://hub.dummyapis.com/Image?text=Item&height=120&width=120"
}

function App() {
  const [currentMovie, setCurrentMovie] = useState()
  const [movieData, setMovieData] = useState([initialMovie])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://hub.dummyapis.com/vj/wzGUkpZ')
      const data = await response.json()
      setMovieData(data)
    }
    getData()
  }, [])

  return (
    <div className="App">
        <button onClick={() => setCurrentMovie("")}>
        Remove all movie
        </button>
        <div className="container">
          <MovieList
          movieData={movieData}
          setCurrentMovie={setCurrentMovie}
        />
        {currentMovie && <Movie movie={currentMovie} />}
        <AdMovieL/>
        </div>
    </div>
  );
}

export default App;
