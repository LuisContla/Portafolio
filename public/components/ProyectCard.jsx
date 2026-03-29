import { useState, useRef, useEffect } from "react";

const ProyectCard = (props) => {

    const { img, titulo, texto, fecha, git, web, tecnologias } = props;
    const [expandido, setExpandido] = useState(false);
    const [cortado, setCortado] = useState(false);
    const textoRef = useRef(null);

    useEffect(() => {
        const el = textoRef.current;
        if (el) setCortado(el.scrollHeight > el.clientHeight);
    }, []);

    return (
        <>
            <div className="proyectos-elemento" data-aos="flip-right">
                <div className="proyectos-elemento-showcase">
                    <img src={img} alt={titulo} className="protectos-elemento-showcase-imagen" />
                    <div className="proyectos-elemento-fecha">{fecha}</div>
                </div>
                <div className="proyectos-elemento-detalles">
                    <div className="proyectos-elemento-nombre">{titulo}</div>
                    <div ref={textoRef} className={`proyectos-elemento-texto${expandido ? " expandido" : ""}`}>{texto}</div>
                    {(cortado || expandido) && (
                        <button className="proyectos-elemento-ver-mas" onClick={() => setExpandido(!expandido)}>
                            {expandido ? "Ver menos" : "Ver más"}
                        </button>
                    )}
                    <div className="proyectos-elemento-tecnologias">
                        {tecnologias && tecnologias.map((tec, i) => (
                            <div className="proyectos-elemento-tecnologias-boton" key={i}>{tec}</div>
                        ))}
                    </div>
                    <div className="proyectos-elemento-links">
                        {git && <a className="proyectos-elemento-links-boton" href={git} target="_blank" rel="noopener noreferrer">GitHub</a>}
                        {web && <a className="proyectos-elemento-links-boton" href={web} target="_blank" rel="noopener noreferrer">Demo</a>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectCard
