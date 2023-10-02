import React from "react";
import { useNavigate } from "react-router";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`); // Assuming movie.id is the unique identifier for each movie
  };

  return (
    <div className="movie_card hero" onClick={handleClick}>
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
