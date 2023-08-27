import React, { useState } from "react";
import dataContext from "./datacontext";
const ContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
      <dataContext.Provider
        value={{
          movies,
          setMovies,
          selectedMovie, setSelectedMovie
        }}
      >
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default ContextProvider;
