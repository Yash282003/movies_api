import React, { useContext } from "react";
import dataContext from "../context/datacontext";
import "./MovieCard.css";
function MovieCard({ movie }) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w500";

  return (
    
      <div className="movie_card">
        {movie.poster_path ? (
          <img src={`${IMG_PATH}/${movie.poster_path}`} alt="" />
        ) : null}
        <h1>{movie.original_title}</h1>
      </div>
    
  );
}

export default MovieCard;
