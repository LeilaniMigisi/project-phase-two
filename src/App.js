import React, { useState ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/leilani/project-phase-two/src/App.css';
import MovieList from "/home/leilani/project-phase-two/src/components/MovieList.js";
import MovieListHeading from "/home/leilani/project-phase-two/src/components/MovieListHeading.js";
import SearchBox from "/home/leilani/project-phase-two/src/components/SearchBox.js";
import AddFavourites from "/home/leilani/project-phase-two/src/components/AddFavourite.js";
import RemoveFavourites from "./components/RemoveFavourites";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then((res) => res.json())
    .then((data) => setMovies(data))
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
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
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