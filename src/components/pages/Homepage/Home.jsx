import React from 'react';
import './Home.scss';
import First from '../../First';
import About from '../../About';
import TechSkills from '../../TechSkills';
import SoftSkills from '../../SoftSkills';
import Projects from '../../Projects';
import Contact from '../../Contact';

//Recuerda para el el autocompletado refc
function Home() {
    return (
        <div className="home">
            <div className="home-container">
            <First/>
            <TechSkills/>
            <About/>
            <SoftSkills/>
            <Projects/>
            <Contact/>
            </div>
        </div>
    )
}

export default Home
