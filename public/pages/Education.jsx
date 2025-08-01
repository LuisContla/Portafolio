import EducacionElemento from "../components/EducacionElemento";

import ECA from "../images/ECA.png";
import CECYT9 from "../images/CECyT9.png";
import ESCOM from "../images/ESCOM.png";

import Certifications from "../components/Certifications";
import Degrees from "../components/Degrees";
import EducationImg from "../../src/assets/containers/EducationImg";

import ONE from "../images/ONE.png";
import Santander from "../images/Santander.png";

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
                    <div className="education-title">Trayectoria Académica</div>
                    <Degrees img={ECA} nombre="Centro Educativo ECA" grado="Educación Básica" fecha="2009-2018" link="https://www.ecagrupoeducativo.mx/eca" />
                    <Degrees img={CECYT9} nombre="CECyT 9 Juan de Dios Bátiz" grado="Técnico en Programación" fecha="2018-2021" link="https://www.cecyt9.ipn.mx/" />
                    <Degrees img={ESCOM} nombre="Escuela Superior de Cómputo" grado="Ingeniero en Sistemas Comuptacionales" fecha="2021-Actualidad" link="https://www.escom.ipn.mx/" />
                </div>
                <div className="certifications">
                    <div className="education-title">Certificaciones</div>
                    <dev className="certifications-container">
                        <Certifications img={ONE} curso="Oracle Next Education" institucion="Oracle" link/>
                        <Certifications img={Santander} curso="Python" institucion="Santander Open Academy" link/>
                    </dev>
                </div>
            </div>
        </>
    )
}

export default Education