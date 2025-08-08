import { Link } from "react-router-dom";

const Degrees = (props) => {

    const { img, nombre, grado, fecha, link, summary } = props;

    return (
        <>
            <div className="education-element" data-aos="fade-right">
                <div className="education-element-image">
                    <img src={img} alt={nombre} className="education-element-image-image" />
                </div>
                <div className="education-element-content">
                    <div className="education-element-content-header">
                        <div className="education-school-degree">
                            <div className="school-name">{nombre}</div>
                            <div className="school-degree">{grado}</div>
                        </div>
                        <div className="education-school-time">{fecha}</div>
                    </div>
                    <div className="education-element-content-details">
                        <p>{summary}</p>
                        <Link className="education-button" to={link} target="_blank" rel="noopener noreferrer" >Visitar Sitio Web</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Degrees