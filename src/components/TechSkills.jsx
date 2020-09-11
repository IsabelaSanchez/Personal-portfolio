import React from 'react';
import './TechSkills.scss';
import HTML5 from './assets/logoHTML5.svg';
import NPM from './assets/logoNPM.svg';
import CSS3 from './assets/logoCSS3.svg';
import FIGMA from './assets/logoFIGMA.svg';
import FIREBASE from './assets/logoFIREBASE.svg';
import GIT from './assets/logoGIT.svg';
import GITHUB from './assets/logoGITHUB.svg';
import JAVASCRIPT from './assets/logoJAVASCRIPT.svg';
import JEST from './assets/logoJEST.svg';
import NODEJS from './assets/logoNODEJS.svg';
import REACTJS from './assets/logoREACTJS.svg';
import SASS from './assets/logoSASS.svg';

function TechSkills() {
    return (
        <div class='tech-skills'>
            <div className="tech-skills-container">
                <div className='page-title'>
                <h1 className='classic-title'>Tech Skills</h1>
                <p className='classic-p'>Mis compañeras a la hora de codear</p>
                </div>
                <div className="skills">
                    <div className="skill-item">
                        <div className="just-one">
                        <img src={HTML5} className="HTML-icon" alt="logo" />
                        <p>HTML5</p>
                        </div>
                        <img src={NPM} className="NPM-icon" alt="logo" />
                        <p>NPM</p>
                    </div>
                    <div className="skill-item">
                        <div className="just-one">
                            <img src={GIT} className="skills-icon" alt="logo" />
                            <p>GIT</p>
                        </div>
                        <img src={JEST} className="skills-icon" alt="logo" />
                        <p>JEST</p>
                    </div>
                    <div className="skill-item">
                        <div className="just-one">
                            <img src={GITHUB} className="GH-icon" alt="logo" />
                            <p>GIT HUB</p>
                        </div>
                        <img src={NODEJS} className="NJ-icon" alt="logo" />
                        <p>NODE.JS</p>
                    </div>
                    <div className="skill-item">
                        <div className="just-one">
                            <img src={JAVASCRIPT} className="JS-icon" alt="logo" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <img src={CSS3} className="skills-icon" alt="logo" />
                        <p>CSS3</p>
                    </div>
                    <div className="skill-item">
                        <div className="just-one">
                            <img src={FIREBASE} className="FB-icon" alt="logo" />
                            <p>FIREBASE</p>
                        </div>
                        <img src={REACTJS} className="skills-icon" alt="logo" />
                        <p>REACTJS</p>
                    </div>
                    <div className="skill-item">
                        <div className="just-one">
                            <img src={SASS} className="SASS-icon" alt="logo" />
                            <p>SASS</p>    
                        </div>
                        <img src={FIGMA} className="FIGMA-icon" alt="logo" />
                        <p>FIGMA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechSkills
