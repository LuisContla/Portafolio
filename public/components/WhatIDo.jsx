import FullStack from "../../src/assets/containers/FullStackImg";
import DataScience from "../../src/assets/containers/DataScienceImg";
import ProgrammerImg from "../../src/assets/containers/ProgrammerImg";
import ProjectsImg from "../../src/assets/containers/ProjectsImg";
import ExperienceImg from "../../src/assets/containers/ExperienceImg.jsx";
import { chosenTheme } from "../styles/theme";

import Technologie from "../components/Technologie";

function WhatIDo() {

    return (
        <>
            <div className="whatido">
                <div className="whatido-titulo" data-aos="fade-up">
                    ¿Qué es lo que hago?
                </div>
                <br />
                {/* ---------- Frontend ---------- */}
                <div className="whatido-section">
                    <div className="whatido-section-image" data-aos="fade-right">
                        <FullStack theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-left">Desarrollo Frontend</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-left">
                            <Technologie txt="React" icono="React" />
                            <Technologie txt="HTML" icono="HTML" />
                            <Technologie txt="CSS" icono="CSS" />
                            <Technologie txt="JavaScript" icono="JavaScript" />
                            <Technologie txt="TypeScript" icono="TypeScript" />
                            <Technologie txt="Bootstrap" icono="Bootstrap" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-left">
                            <ul>
                                <li>Desarrollo de interfaces web responsivas con React</li>
                                <li>Maquetado moderno con HTML5, CSS3 y Bootstrap</li>
                                <li>Aplicaciones dinámicas con JavaScript y TypeScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---------- Backend ---------- */}
                <div className="whatido-section whatido-odd" data-aos="fade-left">
                    <div className="whatido-section-image">
                        <ProgrammerImg theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-right">Desarrollo Backend</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-right">
                            <Technologie txt="Node.js" icono="NodeJS" />
                            <Technologie txt="Python" icono="Python" />
                            <Technologie txt="Java" icono="Java" />
                            <Technologie txt="Docker" icono="Docker" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-right">
                            <ul>
                                <li>Creación de APIs REST con Node.js y Express</li>
                                <li>Desarrollo de servicios y scripts con Python y Java</li>
                                <li>Contenerización y despliegue de aplicaciones con Docker</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---------- Base de Datos ---------- */}
                <div className="whatido-section">
                    <div className="whatido-section-image" data-aos="fade-right">
                        <ProjectsImg theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-left">Base de Datos</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-left">
                            <Technologie txt="MongoDB" icono="MongoDB" />
                            <Technologie txt="MySQL" icono="MySQL" />
                            <Technologie txt="Oracle" icono="Oracle" />
                            <Technologie txt="SQL" icono="SQL" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-left">
                            <ul>
                                <li>Diseño y administración de bases de datos relacionales con MySQL y Oracle</li>
                                <li>Gestión de bases de datos NoSQL con MongoDB</li>
                                <li>Escritura de consultas SQL optimizadas</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---------- Diseño ---------- */}
                <div className="whatido-section whatido-odd" data-aos="fade-left">
                    <div className="whatido-section-image">
                        <ExperienceImg theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-right">Diseño UI/UX</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-right">
                            <Technologie txt="Figma" icono="Figma" />
                            <Technologie txt="CSS" icono="CSS" />
                            <Technologie txt="Bootstrap" icono="Bootstrap" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-right">
                            <ul>
                                <li>Diseño de interfaces y prototipos con Figma</li>
                                <li>Implementación de componentes visuales accesibles y consistentes</li>
                                <li>Estilizado responsivo con CSS y Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---------- Gestión de Proyectos ---------- */}
                <div className="whatido-section">
                    <div className="whatido-section-image" data-aos="fade-right">
                        <DataScience theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-left">Gestión de Proyectos</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-left">
                            <Technologie txt="Git" icono="Git" />
                            <Technologie txt="GitHub" icono="GitHub" />
                            <Technologie txt="Jira" icono="Jira" />
                            <Technologie txt="Trello" icono="Trello" />
                            <Technologie txt="Notion" icono="Notion" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-left">
                            <ul>
                                <li>Planificación y seguimiento de sprints con metodologías ágiles (Scrum/Kanban)</li>
                                <li>Coordinación de equipos de desarrollo y revisión de código</li>
                                <li>Documentación técnica y gestión de repositorios con Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatIDo
