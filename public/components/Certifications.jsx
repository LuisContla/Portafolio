import { Link } from "react-router-dom";

const Certifications = (props) => {

    const { img, titulo, texto, fecha, link } = props;

    return (
        <>
            <Link className="educacion-elemento" to={link} target="_blank" rel="noopener noreferrer" >
                <div className="educacion-elemento-imagen">
                    <img src={img} alt="" className="educacion-elemento-imagen-imagen" />
                </div>
                <div className="educacion-elemento-texto">
                    <div className="educacion-elemento-texto-titulo">{titulo}</div>
                    <div className="educacion-elemento-texto-texto">{texto}</div>
                </div>
                <div className="educacion-elemento-fecha">{fecha}</div>
            </Link>
        </>
    )
}

export default Certifications