import React from 'react';
import './Contact.scss';
import { FaWhatsappSquare } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { FaGithubSquare } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

function Contact() {
    return (
        <div id="contacto"className="contact">
            <div className="contact-container">
                <h1 className='classic-title'>Contactemos</h1>
                <p className='classic-p'>¡Descubre más sobre mi!</p>
                <div className="contact-list">
                    <div className="contact-item">
                       <FaWhatsappSquare className="contact-icon"/>
                       <p>+51 962 851 940</p>
                    </div>
                    <div className="contact-item">
                       <CgMail className="contact-icon"/>
                       <p>isabelanatyst26@gmail.com</p>
                    </div>
                    <div className="contact-item">
                       <FaGithubSquare className="contact-icon"/>
                       <p>github.com/IsabelaSanchez</p>
                    </div>
                    <div className="contact-item">
                       <GrLinkedin className="contact-icon"/>
                       <p>linkedin.com/in/isabela-sanchez-9677a4185/</p>
                    </div>                    
                </div>
                <a href="" className="CVbutton">CV</a>
            </div>
        </div>
    )
}

export default Contact
