import santanderJSON from "../documents/santander.json";

import Santander from "../images/Santander.png";

function SantanderCertifications() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Santander Open Academy</div>
                        <br />
                        <div className="nombre-texto">Participé en Santander Open Academy, una plataforma de becas y formación gratuita impulsada por Santander. A continuación, se detallan las certificaciones de los cursos que completé en el marco de este programa:</div>
                    </div>
                    <div className="nombre-imagen">
                        <img src={Santander} alt="Santander Open Academy" className="contacto-imagen-imagen" />
                    </div>
                </div>
                <div className="alura">
                    <div className="alura-container">
                        {santanderJSON.map((course, index) => (
                            <div className="alura-element" key={index}>
                                <div className="alura-info">
                                    {course.icono && (
                                        <div className="alura-icon">
                                            <img src={course.icono} alt="" className="alura-icon-image" />
                                        </div>
                                    )}
                                    <div className="alura-name">
                                        <p>{course.curso}</p>
                                    </div>
                                </div>
                                <div className="alura-buttons">
                                    {course.certificado && (
                                        <a className="alura-button" href={course.certificado} target="_blank" rel="noopener noreferrer">Ver Certificado</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SantanderCertifications
