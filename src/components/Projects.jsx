import React from 'react'
import './Projects.scss'
import LOL from './assets/logoLOL.svg';
import MOVES from './assets/logoMOVES.svg';
import MDLINKS from './assets/logoMDLINKS.svg';

function Projects() {
    return (
        <div id="proyectos" className='pricing__section'>
        <div className='pricing__wrapper'>
            <div className="theheaderp">
            <h1 className='classic-title'>Mis Proyectos</h1>
            <p className='classic-p'>Mis aprendizajes en Laboratoria</p>
            </div>
          <div className='pricing__container'>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
              <img src={LOL} className="project-img" alt="logo"/>
              <div className="button-group">
                <a href="https://github.com/IsabelaSanchez/LIM012-data-lovers" className="p-button">Repositorio</a>
                <a href="https://isabelasanchez.github.io/LIM012-data-lovers/src/" className="p-button">Web</a>
                </div>
                <h3 className="p-title">LOL QUERY</h3>
                <p className="under-ptitle">Proyecto Data Lovers</p>
                <ul className='pricing__container-features'>
                  <li>DOM</li>
                  <li>Manipulación de Arrays</li>
                  <li>Manipulación de Objects</li>
                  <li>Uso de condicionales</li>
                  <li>Uso de Bucles</li>
                  <li>SCRUM</li>
                </ul>
              </div>
            </div>
            <div to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
              <img src={MOVES} className="project-img" alt="logo"/>
              <div className="button-group">
                <a href="https://github.com/IsabelaSanchez/LIM012-fe-social-network" className="p-button">Repositorio</a>
                <a href="https://isabelasanchez.github.io/LIM012-fe-social-network/src/" className="p-button">Web</a>
                </div>
                <h3 className="p-title">MOVES: SIENTE EL RITMO</h3>
                <p className="under-ptitle">Proyecto Red Social</p>
                <ul className='pricing__container-features'>
                  <li>MVC</li>
                  <li>SPA</li>
                  <li>Firebase</li>
                  <li>Git hub Projects</li>
                  <li>Consumo y Creación de Promesas</li>
                  <li>Callbacks</li>
                </ul>
              </div>
            </div>
            <div to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <img src={MDLINKS} className="project-img" alt="logo"/>
                <div className="button-group">
                <a href="https://github.com/IsabelaSanchez/LIM012-fe-md-links" className="p-button">Repositorio</a>
                </div>
                <h3 className="p-title">MD-LINKS</h3>
                <p className="under-ptitle">Proyecto crear mi libreria</p>
                <ul className='pricing__container-features'>
                  <li>Node.js</li>
                  <li>Jest</li>
                  <li>CLI</li>
                  <li>Creación de flujograma y pseudo código</li>
                  <li>Consumo y Creación de Promesas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects
