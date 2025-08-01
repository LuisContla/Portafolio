import { Link } from "react-router-dom";

import plch from "../images/FotoProyecto.jpg";

const Certifications = (props) => {

    const { img, curso, institucion, link } = props;

    return (
        <>
            <div className="certifications-element">
                    <div className="certifications-element-image">
                        <img src={img} alt={institucion} className="certifications-element-image-image"/>
                    </div>
                    <div className="certifications-element-content">
                        <div className="certification-name">{curso}</div>
                        <div className="certification-institution">{institucion}</div>
                    </div>
            </div>
        </>
    )
}

export default Certifications