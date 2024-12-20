import { Link } from "react-router-dom";

const Habilidad = (props) => {

    const { txt, icono, link } = props;
    const src = "../images/" + icono + ".png";

    return (
        <>
            <div className="habilidades-elementos-elemento">
                <img className="habilidades-elementos-elemento-icono" src={src} alt={txt} />
                <div className="habilidades-elementos-elemento-texto">
                    {txt}
                </div>
            </div>
        </>
    )
}

export default Habilidad