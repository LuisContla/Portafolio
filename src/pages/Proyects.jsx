import ProyectCard from "../components/ProyectCard";
import ProyectsImg from "../assets/containers/ProjectsImg";
import proyectosJSON from "../documents/proyectos.json";

import { chosenTheme } from "../styles/theme";

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
                    <div className="proyectos-grupo">
                        <div className="proyectos">
                            {["Formación", "Académico", "Personal"]
                                .flatMap(categoria => proyectosJSON.filter(p => p.categoria === categoria))
                                .map(proyecto => (
                                    <ProyectCard
                                        key={proyecto.id}
                                        img={`/images/${proyecto.imagen}`}
                                        titulo={proyecto.titulo}
                                        texto={proyecto.texto}
                                        fecha={proyecto.fecha}
                                        git={proyecto.git}
                                        web={proyecto.web}
                                        demo={proyecto.demo}
                                        tecnologias={proyecto.tecnologias}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyects
