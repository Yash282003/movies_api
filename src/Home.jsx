import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from './Components/Movie';
import MovieDetailsPage from './Components/MovieDetailsPage';

export default function Home() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Movie/>} />
        <Route exact path="/movie/:id" element={<MovieDetailsPage/>} />
       
      </Routes>
    </Router> 
    </div>
  )
}
