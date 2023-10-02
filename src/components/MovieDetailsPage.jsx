import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import dataContext from "../context/datacontext";

const MovieDetailsPage = ({}) => {
//   const { id } = useParams();
  const {movies, setMovies} = useContext(dataContext);
  return (
    <div>
      {/* {movies ? (
        <div>
       { movies.original_title}
          
        </div>
      ) : (
        <div>Loading...</div>
      )} */}
      hiii
    </div>
  );
};

export default MovieDetailsPage;
