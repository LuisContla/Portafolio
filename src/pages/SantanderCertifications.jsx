import santanderJSON from "../documents/santander.json";
import CertificationCard from "../components/CertificationCard";

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
                        <img src="/images/Santander.png" alt="Santander Open Academy" className="certificaciones-portada-imagen" />
                    </div>
                </div>
                <div className="certificationCard">
                    <div className="certificationCard-container">
                        {santanderJSON.map((course) => (
                            <CertificationCard key={course.certificado || course.curso} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SantanderCertifications
