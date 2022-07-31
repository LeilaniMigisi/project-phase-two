import React from 'react'
const MovieList = ( props, movies) => {
    const FavouriteComponent = props.favouriteComponent
        return (
        <>
           
           {props.movies.map((movie, index) => (
           <div
            className='image-container d-flex justify-content-start m-0'>
             <img src={movie.Poster} alt='movie img'></img>
             <div onClick={() => props.handleFavouritesClick (movie)}
               className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent />
             </div>
           </div>
           ))}
        </>
    )
}
export default MovieList;