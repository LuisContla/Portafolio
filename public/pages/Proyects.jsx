import ProyectCard from "../components/ProyectCard";
import ProyectsImg from "../../src/assets/containers/ProjectsImg";
import proyectosJSON from "../documents/proyectos.json";

import Encriptador from "../images/Encriptador.png";
import DaysOfCode from "../images/7DaysOfCode.png";
import AluraGeek from "../images/AluraGeek.png";
import AluraFlix from "../images/AluraFlix.png";
import TrashGamez from "../images/FotoProyecto.jpg";
import JuegoDeLaVida from "../images/JuegoDeLaVida.png";
import Regla30 from "../images/Regla30.png";
import Regla184 from "../images/Regla184.png";

import { chosenTheme } from "../styles/theme";

const imagenes = {
    "Encriptador.png": Encriptador,
    "7DaysOfCode.png": DaysOfCode,
    "AluraGeek.png": AluraGeek,
    "AluraFlix.png": AluraFlix,
    "FotoProyecto.jpg": TrashGamez,
    "JuegoDeLaVida.png": JuegoDeLaVida,
    "Regla30.png": Regla30,
    "Regla184.png": Regla184,
};

function Proyects() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Proyectos</div>
                        <br />
                        <div className="nombre-texto">Mis proyectos utilizan una amplia variedad de herramientas tecnológicas de última generación. Mi área de especialización se enfoca en el desarrollo Front-End de aplicaciones web utilizando posteriormente infraestructura en la nube.</div>
                    </div>
                    <div className="nombre-imagen">
                        <ProyectsImg theme={chosenTheme} />
                    </div>
                </div>
                <div className="proyectos-seccion">
                    <div className="education-title" data-aos="fade-up">Algunos de mis Proyectos</div>
                    {["Formación", "Académico", "Personal"].map(categoria => {
                        const grupo = proyectosJSON.filter(p => p.categoria === categoria);
                        if (grupo.length === 0) return null;
                        return (
                            <div className="proyectos-grupo" key={categoria}>
                                <div className="proyectos-categoria-titulo" data-aos="fade-up">{categoria}</div>
                                <div className="proyectos">
                                    {grupo.map(proyecto => (
                                        <ProyectCard
                                            key={proyecto.id}
                                            img={imagenes[proyecto.imagen]}
                                            titulo={proyecto.titulo}
                                            texto={proyecto.texto}
                                            fecha={proyecto.fecha}
                                            git={proyecto.git}
                                            web={proyecto.web}
                                            tecnologias={proyecto.tecnologias}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Proyects
