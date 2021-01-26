import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movieList';


const App = () =>{
const [movies, setMovies] = useState([]);

const getMovieRequest =  async () =>{
  const url = "http://www.omdbapi.com/?s=star wars&apikey=c6f81af2"

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson);
  setMovies(responseJson.Search);
};

useEffect(()=>{
  getMovieRequest();
  //Adding comma and an empty array in the next line, that mean to get the movie request when the page loads only
}, []);

  return ( 
  <div className='container-fluid movie-app'>
  <div className='row'>
    <MovieList movies={movies} />
  </div>
  </div> )

};

export default App;
