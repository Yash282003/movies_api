import React, { useState } from "react";
import dataContext from "./datacontext";
const ContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
 

  return (
    <div>
      <dataContext.Provider
        value={{
          movies,
          setMovies
         
        }}
      >
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default ContextProvider;
