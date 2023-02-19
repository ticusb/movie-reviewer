import './Hero.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';


const Hero = (props) => {
    let movies = []
    try {
        movies = props.movies.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className='movie-card'>
                                        <div className='movie-details'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt=''/>
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        );
                    });
    }
    catch(err) {
        console.log(err);
    } 


    return(
        <div>
            <Carousel>
                {movies}
            </Carousel>
        </div>
    )
}

export default Hero;