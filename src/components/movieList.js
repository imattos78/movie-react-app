import React from 'react';

const MovieList = (props) =>{
    return (
        <>
        {props.movies.map((movie, index)=> 
        // Adding style to make all the pics same size with a separation btw them
        <div className="d-flex justify-content-start m-3">
            <img src={movie.Poster} alt='movie'></img>
        </div>)}
        </>
    )
}
export default MovieList;
