import React, { useEffect, useState, useContext } from "react";
import "./MovieCard.css";
import dataContext from "../context/datacontext";
import MovieCard from "./MovieCard";
const url =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=a511c92e69402cbd3a506e7963790d76";
function Movie() {
  const { movies, setMovies } = useContext(dataContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);

      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
        <div className="container">
      {movies?.map((movie) => {
        return (
            <MovieCard key={movie.imdb_id} movie={movie} />
        );
      })}
          </div>
    </>
  );
}

export default Movie;
