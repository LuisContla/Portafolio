import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                <Link to="/" className="nav-logo-link" onClick={closeMenu}>
                    Luis Contla
                </Link>
            </div>
            
            <button
                type="button"
                className="hamburger-button"
                onClick={toggleMenu}
                aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                aria-expanded={isOpen}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className={`nav-buttons ${isOpen ? 'open' : ''}`}>
                <NavLink className="nav-element" to="/" end onClick={closeMenu}>Inicio</NavLink>
                <NavLink className="nav-element" to="/education" onClick={closeMenu}>Educación</NavLink>
                <NavLink className="nav-element" to="/projects" onClick={closeMenu}>Proyectos</NavLink>
                <NavLink className="nav-element" to="/resume" onClick={closeMenu}>Currículum</NavLink>
                <NavLink className="nav-element" to="/contact" onClick={closeMenu}>Contáctame</NavLink>
            </div>
        </nav>
    );
}

export default Nav;