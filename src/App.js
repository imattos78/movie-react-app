import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movieList';
import MovieListHeading from './components/movieListHeading';
import SearchBox from './components/searchBox';
import AddFavorite from './components/addFavorites';


const App = () =>{
const [movies, setMovies] = useState([]);
const [favourites, setFavourites] = useState([]);
const [searchValue, setSearchValue] = useState('');

const getMovieRequest =  async (searchValue) =>{
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c6f81af2`

  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.Search){
    setMovies(responseJson.Search);
  }
  
};

useEffect(()=>{
  getMovieRequest(searchValue);
 
}, [searchValue]);

const addFavouriteMovie = (movie) =>{
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
};

// useEffect(()=>{
//   getMovieRequest();
//   //Adding comma and an empty array in the next line, that mean to get the movie request when the page loads only
// }, []);

  return ( 
  <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading='Movies' />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row'>
      <MovieList 
        movies={movies} 
        handleFavouriteClick = {addFavouriteMovie} 
        favouriteComponent={AddFavorite}
        />
    </div>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading='Favourites' />
    </div>
    <div className='row'>
      <MovieList 
        movies={favourites} 
        handleFavouriteClick = {addFavouriteMovie} 
        favouriteComponent={AddFavorite}
        />
    </div>
  </div> )

};

export default App;
