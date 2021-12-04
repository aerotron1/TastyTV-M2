import { useState, useEffect } from 'react';
import MovieList from './MovieList'
import Movie from './Movie'
import AddMovieList from './AddMovieList'
import './App.css';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentMovie, setCurrentMovie] = useState()
  const [movieData, setMovieData] = useState([])

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
      <div>
        <h1>
          TastyTV <Badge bg="secondary">SPA</Badge>
        </h1>
      </div>
        <Button variant="outline-warning" onClick={() => setCurrentMovie("")}>Remove all movie</Button>{' '}
        <div className="container">
          <MovieList
          movieData={movieData}
          setCurrentMovie={setCurrentMovie}
        />
        {currentMovie && <Movie movie={currentMovie} />}
        <AddMovieList />
      </div>
    </div>
  );
}

export default App;
