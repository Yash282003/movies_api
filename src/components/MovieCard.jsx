import React from "react";
import "./MovieCard.css";
function MovieCard({ movie }) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie_card hero">
      <div className="movie_card">
        {movie.poster_path ? (
          <img
            className="movie_poster"
            src={`${IMG_PATH}/${movie.poster_path}`}
            alt=""
          />
        ) : (
          <div className="movie_placeholder">Image not found</div>
        )}
        <h1>{movie.original_title}</h1>
      </div>
    </div>
  );
}

export default MovieCard;
