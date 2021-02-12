import React from 'react';
import {useId} from "react-id-generator";


const MovieList = (props) =>{
    const FavouriteComponent = props.favouriteComponent;
    const [htmlId] = useId();

    return (
        <>
        {props.movies.map((movie, index)=> 
        // Adding style to make all the pics same size with a separation btw them
        <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} id={htmlId} alt='movie'/>
            <div 
                onClick={() => props.handleFavouriteClick(movie)} 
                className="overlay d-flex align-items-center justify-content"
                >
                <FavouriteComponent />
            </div>
        </div>)}
        </>
    )
}
export default MovieList;
