import React from 'react';
import Home from './Home';
import ContextProvider from "./context/ContextProvider";

export default function App() {
  return (
    <div>
    <ContextProvider>
    <Home/>
    </ContextProvider>
    
   
   
    
     
    </div>
  )
}
