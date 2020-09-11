import React from 'react';
import './About.scss';
import profile from './assets/profile.svg';

function about() {
    return (
        <div id="sobre-mi" className='about'>
            <div className='container-about'>
                <h1 className='classic-title'>Sobre Mi</h1>
                <p className='classic-p'>Líder - Feminista - Curiosa - Beatlemaníaca</p>
                <div className="container-profile">
                    <img src={profile} className="profile" alt="logo" />
                    <div className="info-profile">
                        Tengo 18 años, soy egresada de Laboratoria como Front-End Developer. 
                        A pesar de los pocos recursos económicos de mi familia, 
                        siempre he estudiado con becas y participado de eventos nacionales en 
                        internacionales que me formaron como líder. He estudiado música más de 4 años 
                        y trabajado legalmente en la UTP siendo menor de edad.
                        Mi aventura en el mundo del desarrollo web tiene para rato.
                        Aspiro a ser fullstack y liderar equipos multidiciplinarios.
                        <p className="detallito2">¡Espero aprender mucho más!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
