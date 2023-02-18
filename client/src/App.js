import './App.css';
import api from './api/axiosconfig'
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom';


function App() {

  const[movies, setMovies] = useState();

  const getMovies = async () => {
      try {
        const response = await api.get("/v1/movies");

        console.log(movies);
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
          <Route path='/' element={<Home />}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
