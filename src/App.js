import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from "./MovieCard";
 

//d8ce203


const movie1 = {
  "Title": "The Lord of the Rings: The Fellowship of the Ring",
  "Year": "2001",
  "imdbID": "tt0120737",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
}


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d8ce203';

const App = () => {

const [movies, setMovies] = useState([]);



const searchMovies = async(title)=>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search);
}


useEffect(()=>{
  searchMovies('Lord of the rings');
},[]);

  return (
    <div className="app">
      <h1>Ughegbe</h1>
      <p>Explore, Search & Discover Movies</p>
    <div className="search">
      <input placeholder="search for movies"
      value="Lord of the rings"
      onChange={()=>{}}
      type="text" />
      <img src={SearchIcon} 
      alt="search for movies"
      onClick={()=>{}} />
    </div>

   {movies?.length > 0 
   ? (
    <div className="container">
    {movies.map((movie)=>(
      <MovieCard movie={movie}/>
    ))}
   </div>
    ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )
  }
</div>
    );
}
 


export default App;