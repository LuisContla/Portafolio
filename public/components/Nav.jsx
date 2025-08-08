import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-logo">
                Luis Contla
            </div>
            
            <div className="hamburger-button" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`nav-buttons ${isOpen ? 'open' : ''}`}>
                <Link className="nav-element" to="/" onClick={toggleMenu}>Inicio</Link>
                <Link className="nav-element" to="/education" onClick={toggleMenu}>Educación</Link>
                <Link className="nav-element" to="/projects" onClick={toggleMenu}>Proyectos</Link>
                <Link className="nav-element" to="/resume" onClick={toggleMenu}>Currículum</Link>
                <Link className="nav-element" to="/contact" onClick={toggleMenu}>Contáctame</Link>
            </div>
        </nav>
    );
}

export default Nav;