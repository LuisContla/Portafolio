import FeelingProud from "../../src/assets/containers/FeelingProud";
import RedSocial from "../components/RedSocial";
import { chosenTheme } from "../styles/theme";
import { Link } from "react-router-dom";

function Greeting() {

    return (
        <>
            <div className="nombre" data-aos="fade-up">
                <div className="nombre-titulo">
                    <div className="nombre-nombre">¡Hola! Soy Luis Contla</div>
                    <br />
                    <div className="nombre-texto">Ingeniero en Sistemas enfocado en Desarrollo Web Full Stack. Construyo aplicaciones modernas, escalables y con buena experiencia de usuario.</div>
                    <div className="redes">
                        <RedSocial red="LinkedIn" link="https://www.linkedin.com/in/luiscontla/" />
                        <RedSocial red="GitHub" link="https://github.com/LuisContla"/>
                    </div>
                    <div className="greeting-cta">
                        <Link to="/projects" className="greeting-cta-boton">Ver mis proyectos</Link>
                        <Link to="/contact" className="greeting-cta-boton greeting-cta-boton--secundario">Contáctame</Link>
                    </div>
                </div>
                <div className="nombre-imagen">
                    <FeelingProud theme={chosenTheme} />
                </div>
            </div>
        </>
    )
}

export default Greeting