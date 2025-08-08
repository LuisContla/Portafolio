import FullStack from "../../src/assets/containers/FullStackImg";
import DataScience from "../../src/assets/containers/DataScienceImg";
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
                {/* ---------- Sección ---------- */}
                <div className="whatido-section">
                    <div className="whatido-section-image" data-aos="fade-right">
                        <FullStack theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-left">Desarrollo Full Stack</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-left">
                            <Technologie txt="React" icono="React" />
                            <Technologie txt="HTML" icono="HTML" />
                            <Technologie txt="CSS" icono="CSS" />
                            <Technologie txt="JavaScript" icono="JavaScript" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-left">
                            <ul>
                                <li>Building responsive website front end using React-Redux</li>
                                <li>Developing mobile applications using Flutter, React Native and solo android apps using Kotlin</li>
                                <li>Creating application backend in Node, Express & Flask</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---------- Sección Impar ---------- */}
                <div className="whatido-section whatido-odd" data-aos="fade-left">
                    <div className="whatido-section-image">
                        <DataScience theme={chosenTheme} />
                    </div>
                    <div className="whatido-section-text">
                        <div className="whatido-section-text-title" data-aos="fade-right">Gestión de Proyectos</div>
                        <div className="whatido-section-text-technologies" data-aos="fade-right">
                            <Technologie txt="React" icono="React" />
                            <Technologie txt="HTML" icono="HTML" />
                            <Technologie txt="CSS" icono="CSS" />
                            <Technologie txt="JavaScript" icono="JavaScript" />
                        </div>
                        <div className="whatido-section-text-summary" data-aos="fade-right">
                            <ul>
                                <li>Building responsive website front end using React-Redux</li>
                                <li>Developing mobile applications using Flutter, React Native and solo android apps using Kotlin</li>
                                <li>Creating application backend in Node, Express & Flask</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatIDo