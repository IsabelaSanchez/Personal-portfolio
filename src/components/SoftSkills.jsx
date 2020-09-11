import React from 'react'
import './SoftSkills.scss'
import { CgFileDocument } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { RiTeamFill } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa';

function SoftSkills() {
    return (
        <div className="soft-skills">
            <div className="soft-skills-container">
                <h1 className='classic-title'>Soft Skills</h1>
                <p className='classic-p'>Habilidades del siglo XXI. Mis habilidades blandas.</p>
                <div className="skills-info-container">
                    <div className="skills-box">
                        <div className="soft-skill-item">
                            <div className="one-skill">
                                <header className="skill-header">
                                    <CgFileDocument/>
                                    Ética
                                    </header>
                                <article className="soft-skill-text">A pesar de mi corta edad, 
                                me considero una persona comprometida 
                                al trabajo que se me asigna.
                                </article>
                            </div>
                            <div className="one-skill">
                                <header className="skill-header">
                                    <RiTeamFill/>
                                    Trabajo en equipo
                                </header>
                                <article className="soft-skill-text">
                                En cada trabajo que he tenido que realizar en grupo, 
                                he logrado un producto genial en el que todos aportamos.
                                </article>
                            </div>
                        </div>
                        <div className="soft-skill-item">
                            <div className="one-skill">
                                <header className="skill-header">
                                    <TiMessages/>
                                    Dominio Escénico
                                </header>
                                <article className="soft-skill-text">Aprendí Storytelling, oratoria y me he presentado en 
                                    escenarios y universidades. Si tengo que vender un 
                                    producto lo haré sin dudar.</article>
                            </div>
                            <div className="one-skill">
                                <header className="skill-header">
                                    <FaRegStar/>
                                    Innovación
                                </header>
                                <article className="soft-skill-text">
                                Me encantan los brainstorming. Siempre aporto grandes 
                                ideas en todos los proyectos en los que trabajo.
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wraY7gzAH-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftSkills
