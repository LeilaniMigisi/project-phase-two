import React, { useState ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
// import { Routes } from "react-router-dom";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState([])
  
  useEffect(() => {
    fetch("https://buttercup-steep-carol.glitch.me/movies")
    .then((res) => res.json())
    .then((data) => setMovies(data))
    console.log()
},[searchValue])


const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  

 
 
return (
  
	<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4 '>
				
				<MovieListHeading heading='Movies Watchlist' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
			<div className="col-md-3"></div>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
			<div className="col-md-3"></div>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default App;