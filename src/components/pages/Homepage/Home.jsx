import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import First from '../../First';
import About from '../../About';
function Home() {
    return (
        <div className="home">
            <div className="home-container">
            <First/>
            <About/>
            </div>
        </div>
    )
}

export default Home
