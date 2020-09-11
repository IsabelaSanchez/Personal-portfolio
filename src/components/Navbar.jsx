import React, {useState} from 'react';
import logo from './assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const[click, setClick] = useState(false);
    const menuClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <IconContext.Provider value={{ color: '#F8F9F8'}}>
        <div className="navbar">
            <div className="navbar-container">
                <a href='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} className="navbar-icon" alt="logo" />
                </a>
                <div className="menu-icon" onClick={menuClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href='#' className="nav-links" onClick={closeMobileMenu}>
                            HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='#tech-skills' className="nav-links" onClick={closeMobileMenu}>
                            TECH SKILLS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='#sobre-mi' className="nav-links" onClick={closeMobileMenu}>
                            SOBRE MI
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#softskills" className="nav-links" onClick={closeMobileMenu}>
                            SOFT SKILLS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#proyectos" className="nav-links" onClick={closeMobileMenu}>
                            PROYECTOS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contacto" className="nav-links" onClick={closeMobileMenu}>
                            CONTACTO
                        </a>
                    </li>
                </ul>
            </div>
        </div>
     </IconContext.Provider>
    )
}

export default Navbar
