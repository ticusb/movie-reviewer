
import React from 'react';
import Hero from '../hero/Hero.js';

const Home = (props) => {
    return(
        <div>
            <Hero movies={props.movies}/>
        </div>
    )
}

export default Home;