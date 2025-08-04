import ProyectCard from "../components/ProyectCard";

import ECA from "../images/ECA.png";
import CECYT9 from "../images/CECyT9.png";
import ESCOM from "../images/ESCOM.png";

import Greeting from "../components/Greeting";
import WhatIDo from "../components/WhatIDo";

function Home() {

    return (
        <>
            <div className="contenedor-principal">
                <Greeting />
                <WhatIDo />
                {/* <div className="seccion" id="About">
                    <div className="seccion-titulo">Acerca de mi</div>
                    <div className="about-texto">Gran motivación para seguir perfeccionando habilidades y crecer profesionalmente. Confío plenamente en mi capacidad de producir ideas interesantes para el desarrollo de nuevos softwares útiles. Mi objetivo es aportar mi experiencia y conocimiento en programación y tecnología a empresas e instituciones</div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Habilidades</div>
                    <div className="habilidades">
                        <div className="habilidades-elementos">
                            <Habilidad txt="React" icono="React" />
                            <Habilidad txt="HTML" icono="HTML" />
                            <Habilidad txt="CSS" icono="CSS" />
                            <Habilidad txt="JavaScript" icono="JavaScript" />
                            <Habilidad txt="SQL" icono="SQL" />
                            <Habilidad txt="MongoDB" icono="MongoDB" />
                        </div>
                    </div>
                </div>
                <div className="seccion" id="Contacto">
                    <div className="seccion-titulo">Contacto</div>
                    <div className="contacto">
                        <div className="contacto-formulario">
                            <div className="contacto-formulario-titulo">
                                Envía un mensaje
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Nombre
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="text" className="contacto-formulario-campo-texto" />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Correo
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="text" className="contacto-formulario-campo-texto" />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Asunto
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="text" className="contacto-formulario-campo-texto" />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Mensaje
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="textarea" className="contacto-formulario-campo-textarea" />
                                </div>
                            </div>
                            <div className="contacto-formulario-boton">
                                Enviar
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Home