import React from 'react';
import Movie from './components/Movie';
import ContextProvider from "./context/ContextProvider";

export default function App() {
  return (
    <div>
    <ContextProvider>
    <Movie/>
    </ContextProvider>
     
    </div>
  )
}
