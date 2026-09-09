import santanderJSON from "../documents/santander.json";
import CertificationCard from "../components/CertificationCard";
import Santander from "../images/Santander.png";

function SantanderCertifications() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Santander Open Academy</div>
                        <br />
                        <div className="nombre-texto">He participado en algunos cursos de Santander Open Academy, una plataforma de becas y formación gratuita impulsada por Santander. A continuación, se detallan las certificaciones de los cursos que completé en el marco de este programa:</div>
                    </div>
                    <div className="nombre-imagen">
                        <img src={Santander} alt="Santander Open Academy" className="certificaciones-portada-imagen" />
                    </div>
                </div>
                <div className="certificationCard">
                    <div className="certificationCard-container">
                        {santanderJSON.map((course, index) => (
                            <CertificationCard key={index} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SantanderCertifications
