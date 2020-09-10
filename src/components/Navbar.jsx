import React, {useState} from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const[click, setClick] = useState(false);
    const menuClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <IconContext.Provider value={{ color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} className="navbar-icon" alt="logo" />
                </Link>
                <div className="menu-icon" onClick={menuClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tech-skills' className="nav-links" onClick={closeMobileMenu}>
                            TECH SKILLS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sobre-mi' className="nav-links" onClick={closeMobileMenu}>
                            SOBRE MI
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/soft-skills' className="nav-links" onClick={closeMobileMenu}>
                            SOFT SKILLS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/proyectos' className="nav-links" onClick={closeMobileMenu}>
                            PROYECTOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contacto' className="nav-links" onClick={closeMobileMenu}>
                            CONTACTO
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
     </IconContext.Provider>
    )
}

export default Navbar
