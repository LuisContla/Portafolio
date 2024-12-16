import '../styles/nav.css'
import pfp from "../images/Portafolio Logo.png";

function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

function Nav() {

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={pfp} alt="Luis Andrés COntla MOta" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#About">Acerca de</a>
                        </li>
                        <li>
                            <a href="#Proyectos">Proyectos</a>
                        </li>
                        <li>
                            <a href="#Redes">Redes</a>
                        </li>
                    </ul>
                </nav>
                <a className="btn" href="#Contacto">
                    <button>Contacto</button>
                </a>
                <a onclick="openNav()" className="menu" href="#">
                    <button>Menu</button>
                </a>
                <div id="mobile-menu" className="overlay">
                    <a onclick="closeNav()" href="" className="close">
                        ×
                    </a>
                    <div className="overlay-content">
                        <a href="#About">Acerca de</a>
                        <a href="#Proyectos">Proyectos</a>
                        <a href="#Redes">Redes Sociales</a>
                        <a href="#Contacto">Contacto</a>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Nav