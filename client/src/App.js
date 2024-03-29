import './App.css';
import api from './api/axiosconfig'
import { useState, useEffect } from 'react';

import Layout from './components/Layout.js';
import Home from './components/home/Home.js'
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer.js';
import Reviews from './components/reviews/Reviews.js';
import NotFound from './components/notFound/NotFound';
import { Routes, Route } from 'react-router-dom';


function App() {

  const[movies, setMovies] = useState();
  const[movie, setMovie] = useState();
  const[reviews, setReviews] = useState();

  const getMovies = async () => {
      try {
        const response = await api.get("/v1/movies");
        setMovies(response.data);
      }
      catch(err) {
        console.log(err);
      }
  }

  const getMovieData = async (movieId) => {
      try {
          const response = await api.get(`/v1/movies/${movieId}`);
          const singleMovie = response.data;
          setMovie(singleMovie);
          console.log(singleMovie);
          setReviews(singleMovie.reviewIDs);
      }
      catch(err) {
          console.log(err);
      }
  }


  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}/>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}/>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
