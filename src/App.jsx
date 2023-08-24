import React, { useEffect, useState } from "react";
const url = "https://www.omdbapi.com/?s=kabhi&apikey=a3787072";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setMovies(data.Search);
    };
    fetchData();
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} />;
      })}
    </>
  );
}

export default App;
