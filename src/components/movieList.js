import React from 'react';

const MovieList = (props) =>{
    return (
        <>
        {props.movies.map((movie, index)=> 
        // Adding style to make all the pics same size with a separation btw them
        <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt='movie'></img>
            <div className="overlay d-flex align-items-center justify-content"></div>
        </div>)}
        </>
    )
}
export default MovieList;
