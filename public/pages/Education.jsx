import EducacionElemento from "../components/EducacionElemento";

import ECA from "../images/ECA.jpeg";
import CECYT9 from "../images/CECyT9.png";
import ESCOM from "../images/ESCOM.jpg";

import Certifications from "../components/Certifications";
import Degrees from "../components/Degrees";
import EducationImg from "../../src/assets/containers/EducationImg";

import { chosenTheme } from "../styles/theme";

function Education() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Educación</div>
                        <br />
                        <div className="nombre-texto">Formación Académica y Certificaciones</div>
                    </div>
                    <div className="nombre-imagen">
                        <EducationImg theme={chosenTheme} />
                    </div>
                </div>
                <div className="education">
                    
                </div>
            </div>
        </>
    )
}

export default Education