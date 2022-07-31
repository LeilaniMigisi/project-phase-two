import React from 'react'
const MovieList = ( props, movies) => {
    const FavouriteComponent = props.favouriteComponent
     


    return (
        <>
           {props.movies.map((movies, index) => (
           <div
            className='image-container d-flex justify-content-start m-0'>
             <img src={movies.Poster} alt='movie img'></img>
             <div onClick={() => props.handleFavouritesClick (movies)}
               className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent />
             </div>
             
           </div>
           
           ))}
        </>
    )
}

export default MovieList







