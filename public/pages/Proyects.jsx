import placeImg from "../images/FotoProyecto.jpg";
import Encriptador from "../images/Encriptador.png";
import DaysOfCode from "../images/7DaysOfCode.png";
import AluraFlix from "../images/AluraFlix.png";
import GameOfLife from "../images/JuegoDeLaVida.png";
import Rule30 from "../images/Regla30.png";
import Rule184 from "../images/Regla184.png";

import ProyectCard from "../components/ProyectCard";
import ProyectsImg from "../../src/assets/containers/ProjectsImg";

import { chosenTheme } from "../styles/theme";

function Education() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Proyectos</div>
                        <br />
                        <div className="nombre-texto">Mis proyectos utilizan una amplia variedad de herramientas tecnológicas de última generación. Mi área de especialización se enfoca en el desarrollo Front-End de aplicaciones web utilizando posteriormente infraestructura en la nube.</div>
                    </div>
                    <div className="nombre-imagen">
                        <ProyectsImg theme={chosenTheme} />
                    </div>
                </div>
                <div className="education">
                    <div className="education-title">Algunos de mis Proyectos</div>
                    <div className="proyectos">
                        <ProyectCard img={Encriptador} titulo="Encriptador de Texto" texto="Encripador de Texto creado para el curso de Alura ONE por Oracle" fecha="2024" git="https://github.com/LuisContla/Encriptador-de-Texto" web="https://encriptador-de-texto-beryl.vercel.app/" />
                        <ProyectCard img={DaysOfCode} titulo="7 Days of Code" texto="Me propuse completar el '7 Days of Code' creado por Jose González, Instructor Front-End en Alura, para mejorar mis habilidades en lógica de programación. Estos desafíos los recopilé en una página Web." fecha="2024" git="https://github.com/LuisContla/7-Days-of-Code" web="https://7-days-of-code-jet.vercel.app/" />
                        <ProyectCard img={placeImg} titulo="AluraGeek" texto="Programa de Gestión de Productos creado para el curso de Alura ONE por Oracle" fecha="2024" git="https://github.com/LuisContla/AluraGeek" web=""/>
                        <ProyectCard img={placeImg} titulo="AluraFlix" texto="Programa tipo Reproducción de Video creado para el curso de Alura ONE por Oracle" fecha="2024" git="https://github.com/LuisContla/AluraFlix" web=""/>
                        <ProyectCard img={placeImg} titulo="TrashGamez" texto="Página web para el estudio de Videojuegos TrashGamez" fecha="2025" />
                        <ProyectCard img={GameOfLife} titulo="Juego de la Vida de Conway" texto="Proyecto Académico acerca de una simulación del Juego de la Vida de Conway" fecha="2025" git="https://github.com/LuisContla/JuegoDeLaVidaConway" web="https://juego-de-la-vida-conway.vercel.app/" />
                        <ProyectCard img={Rule30} titulo="Simulación de Regla 30 de Wolfram" texto="Proyecto Académico acerca de una simulación de la Regla 30 de Automatas Celulares de Wolfram" fecha="2025" git="https://github.com/LuisContla/WolframRegla30" web="https://wolfram-regla30.vercel.app/" />
                        <ProyectCard img={Rule184} titulo="Regla 184 Gráfica de Wolfram" texto="Proyecto Académico acerca de una simulación gráfica de la Regla 184 de Automatas Celulares de Wolfram" fecha="2025" git="https://github.com/LuisContla/WolframRegla184Grafico" web="https://wolfram-regla184-grafico.vercel.app/" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education