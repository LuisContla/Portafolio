const EducacionElemento = (props) => {

    const { img, titulo, texto, fecha } = props;

    return (
        <>
            <div className="educacion-elemento">
                <div className="educacion-elemento-imagen">
                    <img src={img} alt="" className="educacion-elemento-imagen-imagen" />
                </div>
                <div className="educacion-elemento-texto">
                    <div className="educacion-elemento-texto-titulo">{titulo}</div>
                    <div className="educacion-elemento-texto-texto">{texto}</div>
                </div>
                <div className="educacion-elemento-fecha">{fecha}</div>
            </div>
        </>
    )
}

export default EducacionElemento