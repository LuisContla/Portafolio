import '../styles/nav.css'

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
                    <img src="img/Mountain.png" alt="Logo de la marca" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#">Acerca de</a>
                        </li>
                        <li>
                            <a href="#">Proyectos</a>
                        </li>
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                    </ul>
                </nav>
                <a className="btn" href="#">
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
                        <a href="#">Acerca de</a>
                        <a href="#">Proyectos</a>
                        <a href="#">Servicios</a>
                        <a href="#">Contacto</a>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Nav