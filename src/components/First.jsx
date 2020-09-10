import React from 'react';
import './First.scss';

function First() {
    return (
        <div className='first'>
            <div className='container-first'>
                <p className='support-text'>¡Hola mundo! Soy</p>
                <div className='name-container'>
                    <p className='name-big'>ISABELA SÁNCHEZ</p>
                </div>
                <p className='support-text'>Y soy Front-End Developer</p>
                <div className='mini-text'>
                    Mi misión es desarrollar productos digitales
                    efectivos e innovadores que revolucionen la
                    industria y así ser la líder tech que el Perú necesita.
                </div>
            </div>
        </div>
    )
}

export default First
