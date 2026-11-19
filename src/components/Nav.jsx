import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
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
                <Link className="nav-element" to="/" onClick={closeMenu}>Inicio</Link>
                <Link className="nav-element" to="/education" onClick={closeMenu}>Educación</Link>
                <Link className="nav-element" to="/projects" onClick={closeMenu}>Proyectos</Link>
                <Link className="nav-element" to="/resume" onClick={closeMenu}>Currículum</Link>
                <Link className="nav-element" to="/contact" onClick={closeMenu}>Contáctame</Link>
            </div>
        </nav>
    );
}

export default Nav;