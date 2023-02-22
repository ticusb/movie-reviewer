import './Hero.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const Hero = (props) => {

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    let movies = []
    try {
        movies = props.movies.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className='movie-details'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt=''/>
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className='movie-buttons-container'>
                                                <Link to={`./Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <div className='play-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay}/>
                                                </div>
                                                </Link>
                                                <div className='movie-review-container'>
                                                    <Button variant="info" onClick={() => reviews(movie.imdbId)} >View Reviews</Button>
                                                </div>
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
        <div className="movie-carousel-container">
            <Carousel>
                {movies}
            </Carousel>
        </div>
    )
}

export default Hero;