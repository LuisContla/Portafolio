import { Link } from "react-router-dom";

const Certifications = (props) => {

    const { img, curso, institucion, link, badge } = props;

    return (
        <>
            <div className="certifications-element" data-aos="zoom-in">
                <div className="certifications-element-image">
                    <img src={img} alt={institucion} className="certifications-element-image-image" />
                    {badge && <div className="certifications-badge">{badge}</div>}
                </div>
                <div className="certifications-element-content">
                    <div className="certification-name">{curso}</div>
                    <div className="certification-institution">{institucion}</div>
                </div>
                <div className="certifications-element-button">
                    {link && (
                        <Link className="education-button" to={link}>Ver Certificaciones</Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default Certifications