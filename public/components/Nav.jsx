import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav data-aos="flip-up">
                <div className="nav-logo">FIRMA</div>
                <div className="nav-buttons">
                    <Link className="nav-element" to="/">Inicio</Link>
                    <Link className="nav-element" to="/education">Educación</Link>
                    <Link className="nav-element" to="/projects">Proyectos</Link>
                    <Link className="nav-element" to="/resume">Currículum</Link>
                    <Link className="nav-element" to="/contact">Contáctame</Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;