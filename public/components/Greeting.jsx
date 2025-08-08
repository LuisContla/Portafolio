import FeelingProud from "../../src/assets/containers/FeelingProud";
import RedSocial from "../components/RedSocial";
import { chosenTheme } from "../styles/theme";

function Greeting() {

    return (
        <>
            <div className="nombre" data-aos="fade-up">
                <div className="nombre-titulo">
                    <div className="nombre-nombre">¡Hola! Soy Luis Contla</div>
                    <br />
                    <div className="nombre-texto">Ingeniero en Sistemas Computacionales enfocado en el Desarrollo Web que siempre se esfuerza por trabajar en productos integrales que desarrollan sistemas sociales y técnicos sostenibles y escalables para generar un impacto.</div>
                    <div className="redes">
                        <RedSocial red="LinkedIn" link="https://www.linkedin.com/in/luiscontla/" />
                        <RedSocial red="GitHub" link="https://github.com/LuisContla"/>
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