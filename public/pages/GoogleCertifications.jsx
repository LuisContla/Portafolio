import googleJSON from "../documents/google.json";
import CertificationCard from "../components/CertificationCard";
import Google from "../images/Google.png";

function GoogleCertifications() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Certificaciones Google</div>
                        <br />
                        <div className="nombre-texto">He participado en algunos cursos de Google, emitidos por distintas instituciones, tales como Coursera o Google Skills. A continuación, se detallan las certificaciones de los cursos que completé en el marco de este programa:</div>
                    </div>
                    <div className="nombre-imagen">
                        <img src={Google} alt="Google" className="certificaciones-portada-imagen" />
                    </div>
                </div>
                <div className="certificationCard">
                    <div className="certificationCard-path">
                        Certificado Profesional de IA de Google
                    </div>
                    <div className="certificationCard-container">
                        {googleJSON.map((course, index) => (
                            <CertificationCard key={index} course={course} />
                        ))}
                    </div>
                    <div className="certificationCard-path">
                        Beginner: Google Cloud Cybersecurity Certificate
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleCertifications