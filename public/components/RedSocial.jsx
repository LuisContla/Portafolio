import { Link } from "react-router-dom";

const RedSocial = (props) => {

    const { red, link } = props;
    const src = "../images/" + red + ".png";

    return (
        <>
            <div className="redes-elemento">
                <img className="redes-elemento-icono" src={src} alt={red} />
            </div>
        </>
    )
}

export default RedSocial