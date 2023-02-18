import './App.css';
import api from './api/axiosconfig'
import { useState, useEffect } from 'react';

function App() {

  const[movies, setMovies] = useState();

  const getMovies = async (req, res) => {
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
      
    </div>
  );
}

export default App;
