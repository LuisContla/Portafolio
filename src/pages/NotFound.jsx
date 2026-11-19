import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="contenedor-principal">
            <div className="not-found" data-aos="fade-up">
                <div className="not-found-codigo">404</div>
                <h1 className="not-found-titulo">Página no encontrada</h1>
                <p className="not-found-texto">
                    La ruta que buscas no existe o fue movida.
                </p>
                <Link to="/" className="greeting-cta-boton">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
