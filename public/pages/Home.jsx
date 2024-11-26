import EducacionElemento from "../components/EducacionElemento";
import ProyectCard from "../components/ProyectCard";
import Habilidad from "../components/Habiilidad";

import pfp from "../images/FotoPerfil.jpg";
import placeImg from "../images/FotoProyecto.jpg";

function Home() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Hola, soy Luis Contla 👋</div>
                        <div className="nombre-texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, autem dignissimos iusto est maxime nihil architecto. Libero maiores amet quidem neque. Debitis consectetur quia, officia maiores qui sed. Dolorum, corrupti?</div>
                    </div>
                    <div className="nombre-imagen">
                        <img className="nombre-imagen-imagen" src={pfp} alt="Luis Andrés Contla Mota" />
                    </div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Acerca de mi</div>
                    <div className="about-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est ullam totam laboriosam quos obcaecati eos quis perspiciatis, veritatis maiores voluptatem. Harum debitis autem enim velit accusamus quos nisi suscipit?</div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Educación</div>
                    <div className="educacion">
                        <EducacionElemento img={pfp} titulo="Centro Educativo ECA" texto="Educación Básica" fecha="2009-2018" />
                        <EducacionElemento img={pfp} titulo="CECyT 9 Juan de Dios Bátiz" texto="Técnico en Programación" fecha="2018-2021" />
                        <EducacionElemento img={pfp} titulo="Escuela Superior de Cómputo" texto="Ingeniero en Sistemas Comuptacionales" fecha="2021-Actualidad" />
                    </div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Habilidades</div>
                    <div className="habilidades">
                        <div className="habilidades-elementos">
                            <Habilidad txt="React"/>
                            <Habilidad txt="HTML"/>
                            <Habilidad txt="CSS"/>
                            <Habilidad txt="JavaScript"/>
                        </div>
                    </div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Proyectos</div>
                    <div className="proyectos">
                        <ProyectCard img={placeImg} titulo="Encriptador de Texto" texto="Encripador de Texto creado para el curso de Alura ONE por Oracle" fecha="2024" />
                        <ProyectCard img={placeImg} titulo="Encriptador de Texto" texto="Encripador de Texto creado para el curso de Alura ONE por Oracle" fecha="2024" />
                        <ProyectCard img={placeImg} titulo="Encriptador de Texto" texto="Encripador de Texto creado para el curso de Alura ONE por Oracle" fecha="2024" />
                    </div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Servicios</div>
                </div>
                <div className="seccion">
                    <div className="seccion-titulo">Contacto</div>
                </div>
            </div>
        </>
    )
}

export default Home