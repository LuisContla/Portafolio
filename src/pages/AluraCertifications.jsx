import aluraJSON from "../documents/alura.json";
import CertificationCard from "../components/CertificationCard";

function AluraCertifications() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Oracle Next Education</div>
                        <br />
                        <div className="nombre-texto">Participé en Oracle Next Education (ONE), un programa de capacitación gratuito y 100% virtual de Oracle. Este programa tiene como objetivo formar a personas en tecnologías de la información y conectarlas con el mercado laboral en Latinoamérica y el Caribe. A continuación, se detallan las certificaciones de los cursos que completé en el marco de este programa:</div>
                    </div>
                    <div className="nombre-imagen">
                        <img src="/images/ONE.png" alt="Oracle Next Education" className="certificaciones-portada-imagen certificaciones-portada-imagen--one" />
                    </div>
                </div>
                <div className="certificationCard">
                    <div className="certificationCard-container">
                        {aluraJSON.map(course => (
                            <CertificationCard key={course.certificado || course.curso} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AluraCertifications