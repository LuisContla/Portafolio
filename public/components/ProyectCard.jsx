import { Link } from "react-router-dom";

const ProyectCard = (props) => {

    const { img, titulo, texto, fecha, git, web } = props;

    return (
        <>
            <div className="proyectos-elemento">
                <div className="proyectos-elemento-showcase">
                    <img src={img} alt="" className="protectos-elemento-showcase-imagen" />
                </div>
                <div className="proyectos-elemento-detalles">
                    <div className="proyectos-elemento-nombre">{titulo}</div>
                    <div className="proyectos-elemento-fecha">{fecha}</div>
                    <div className="proyectos-elemento-texto">{texto}</div>
                    <div className="proyectos-elemento-tecnologias">
                        <div className="proyectos-elemento-tecnologias-boton">HTML</div>
                        <div className="proyectos-elemento-tecnologias-boton">CSS</div>
                        <div className="proyectos-elemento-tecnologias-boton">JavaScript</div>
                    </div>
                    <div className="proyectos-elemento-links">
                        <Link className="proyectos-elemento-links-boton" to={git} target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link className="proyectos-elemento-links-boton" to={web} target="_blank" rel="noopener noreferrer">Demo</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectCard