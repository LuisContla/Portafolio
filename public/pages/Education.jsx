import ECA from "../images/ECA.png";
import CECYT9 from "../images/CECyT9.png";
import ESCOM from "../images/ESCOM.png";

import Certifications from "../components/Certifications";
import EducationImg from "../../src/assets/containers/EducationImg";

import ONE from "../images/ONE.png";
import Santander from "../images/Santander.png";

import { chosenTheme } from "../styles/theme";

const degrees = [
    {
        img: ECA,
        nombre: "Centro Educativo ECA",
        grado: "Educación Básica",
        fecha: "2009 — 2018",
        link: "https://www.ecagrupoeducativo.mx/eca",
        summary: "Durante mi formación básica desarrollé hábitos de disciplina, responsabilidad y trabajo constante, además de fortalecer habilidades de aprendizaje y colaboración que marcaron la base de mi crecimiento personal y académico."
    },
    {
        img: CECYT9,
        nombre: "CECyT 9 Juan de Dios Bátiz",
        grado: "Técnico en Programación",
        fecha: "2018 — 2021",
        link: "https://www.cecyt9.ipn.mx/",
        summary: "En esta etapa inicié formalmente mi camino en el desarrollo de software, construyendo bases sólidas en lógica de programación, algoritmos, estructuras de datos y buenas prácticas técnicas como Técnico en Programación."
    },
    {
        img: ESCOM,
        nombre: "Escuela Superior de Cómputo",
        grado: "Ingeniero en Sistemas Computacionales",
        fecha: "2021 — Actualidad",
        link: "https://www.escom.ipn.mx/",
        summary: "Actualmente curso Ingeniería en Sistemas Computacionales, profundizando en desarrollo de software, redes e inteligencia artificial, mientras participo en proyectos que fortalecen mis habilidades de análisis, diseño de soluciones y gestión técnica."
    },
];

function Education() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Educación</div>
                        <br />
                        <div className="nombre-texto">Formación Académica y Certificaciones</div>
                    </div>
                    <div className="nombre-imagen">
                        <EducationImg theme={chosenTheme} />
                    </div>
                </div>

                <div className="education">
                    <div className="education-title" data-aos="fade-up">Trayectoria Académica</div>
                    <div className="timeline">
                        {degrees.map((d, i) => (
                            <div className="timeline-item" key={i} data-aos="fade-up">
                                <div className="timeline-marker">
                                    <img src={d.img} alt={d.nombre} className="timeline-marker-img" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <div>
                                            <div className="timeline-nombre">{d.nombre}</div>
                                            <div className="timeline-grado">{d.grado}</div>
                                        </div>
                                        <div className="timeline-fecha">{d.fecha}</div>
                                    </div>
                                    <p className="timeline-summary">{d.summary}</p>
                                    <a className="education-button" href={d.link} target="_blank" rel="noopener noreferrer">Visitar Sitio Web</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="education-divider" />

                <div className="certifications">
                    <div className="education-title" data-aos="fade-up">Certificaciones</div>
                    <div className="certifications-container">
                        <Certifications img={ONE} curso="Oracle Next Education" institucion="Oracle" link="/alura" badge="51 cursos"/>
                        <Certifications img={Santander} curso="Python" institucion="Santander Open Academy" link={null} badge="1 curso"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education