import EducacionElemento from "../components/EducacionElemento";
import ProyectCard from "../components/ProyectCard";
import Habilidad from "../components/Habiilidad";

import pfp from "../images/FotoPerfil.jpg";
import ECA from "../images/ECA.jpeg";
import CECYT9 from "../images/CECyT9.png";
import ESCOM from "../images/ESCOM.jpg";

import placeImg from "../images/FotoProyecto.jpg";
import Encriptador from "../images/Encriptador.png";
import DaysOfCode from "../images/7DaysOfCode.png";

function Home() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Hola, soy Luis Contla 👋</div>
                        <div className="nombre-texto">Ingeniero en Sistemas Computacionales enfocado en el Desarrollo Web.</div>
                    </div>
                    <div className="nombre-imagen">
                        <img className="nombre-imagen-imagen" src={pfp} alt="Luis Andrés Contla Mota" />
                    </div>
                </div>
                <div className="seccion" id="About">
                    <div className="seccion-titulo">Acerca de mi</div>
                    <div className="about-texto">Gran motivación para seguir perfeccionando habilidades y crecer profesionalmente. Confío plenamente en mi capacidad de producir ideas interesantes para el desarrollo de nuevos softwares útiles. Mi objetivo es aportar mi experiencia y conocimiento en programación y tecnología a empresas e instituciones</div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Educación</div>
                    <div className="educacion">
                        <EducacionElemento img={ECA} titulo="Centro Educativo ECA" texto="Educación Básica" fecha="2009-2018" link="https://www.ecagrupoeducativo.mx/eca" />
                        <EducacionElemento img={CECYT9} titulo="CECyT 9 Juan de Dios Bátiz" texto="Técnico en Programación" fecha="2018-2021" link="https://www.cecyt9.ipn.mx/"/>
                        <EducacionElemento img={ESCOM} titulo="Escuela Superior de Cómputo" texto="Ingeniero en Sistemas Comuptacionales" fecha="2021-Actualidad" link="https://www.escom.ipn.mx/"/>
                    </div>
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
                <div className="seccion" id="Proyectos">
                    <div className="seccion-titulo">Proyectos</div>
                    <div className="proyectos">
                        <ProyectCard img={Encriptador} titulo="Encriptador de Texto" texto="Encripador de Texto creado para el curso de Alura ONE por Oracle" fecha="2024" git="https://github.com/LuisContla/Encriptador-de-Texto" web="https://encriptador-de-texto-beryl.vercel.app/" />
                        <ProyectCard img={DaysOfCode} titulo="7 Days of Code" texto="Me propuse completar el '7 Days of Code' creado por Jose González, Instructor Front-End en Alura, para mejorar mis habilidades en lógica de programación. Estos desafíos los recopilé en una página Web." fecha="2024" git="https://github.com/LuisContla/7-Days-of-Code" web="https://7-days-of-code-jet.vercel.app/" />
                        <ProyectCard img={placeImg} titulo="AluraGeek" texto="Encripador de Texto creado para el curso de Alura ONE por Oracle" fecha="2024" />
                    </div>
                </div>
                <div className="seccion" id="Redes">
                    <div className="seccion-titulo">Redes Sociales</div>
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
                </div>
            </div>
        </>
    )
}

export default Home