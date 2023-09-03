import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import MovieCard from "./MovieCard";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const url = `https://api.themoviedb.org/3/${type}/movie?api_key=a511c92e69402cbd3a506e7963790d76&query=${searchKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    console.log(url);
    setMovies(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchKey);
  };
  return (
    <>
      <div className="navbar">
         <div className="title">
          <ul className="list">
          <li className="nav_title" style={{fontSize:"30px"}}>NetChill</li>
            <li>About</li>
            <li>Home</li>
            <li>Help</li>
          </ul>
        </div> 
        <div className="search_button">
          <form onSubmit={handleSubmit}>
            <input type="text" className="search" onChange={handleSearch}/>
            <button type="submit" style={{fontWeight:600}}>Search</button>
          </form>
        </div>
      </div>

      <div className="container">
        {movies?.map((movie) => {
          return <MovieCard key={movie.imdb_id} movie={movie} />;
        })}
      </div>
    </>
  );
}

export default Movie;
