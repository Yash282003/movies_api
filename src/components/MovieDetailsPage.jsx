import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataContext from "../context/datacontext";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { movies , setMovies} = useContext(dataContext);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Find the movie based on its ID
    const selectedMovie = movies.find(movie => movie.id.toString() === id);

    if (selectedMovie) {
      setMovieDetails(selectedMovie);
    }
  }, [id, movies]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.original_title}</h1>
          <p>{movieDetails.overview}</p>
          <img
            className="movie_poster"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />
          {/* Display other movie details as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
