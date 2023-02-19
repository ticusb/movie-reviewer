import './App.css';
import api from './api/axiosconfig'
import { useState, useEffect } from 'react';

import Layout from './components/Layout.js';
import Home from './components/home/Home.js'
import { Routes, Route } from 'react-router-dom';


function App() {

  const[movies, setMovies] = useState();

  const getMovies = async () => {
      try {
        const response = await api.get("/v1/movies");
        setMovies(response.data);
      }
      catch(err) {
        console.log(err);
      }
  }

  useEffect(() => {
    getMovies();
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}>
    
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
