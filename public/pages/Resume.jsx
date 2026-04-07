import PDFFile from "../documents/LuisAndresContlaMotaCV.pdf";
import PNGFile from "../images/LuisAndresContlaMotaCV.png";

function Resume() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="resume">
                    <div className="resume-actions resume-actions--top" data-aos="zoom-out">
                        <a href={PDFFile} className="resume-action-link" download aria-label="Descargar Currículum">
                            <span className="resume-action-link-text resume-action-link-text--desktop">Descargar Currículum</span>
                            <span className="resume-action-link-text resume-action-link-text--mobile">Descargar</span>
                        </a>
                        <a href={PDFFile} className="resume-action-link resume-action-link--open" target="_blank" rel="noopener noreferrer" aria-label="Abrir Currículum">
                            <span className="resume-action-link-text resume-action-link-text--desktop">Abrir Currículum</span>
                            <span className="resume-action-link-text resume-action-link-text--mobile">Abrir</span>
                        </a>
                    </div>
                    <div className="resume-preview" data-aos="flip-right">
                        <img src={PNGFile} alt="Currículum Luis Contla" className="resume-preview-image"/>
                    </div>
                    <div className="resume-actions resume-actions--bottom" data-aos="zoom-out">
                        <a href={PDFFile} className="resume-action-link" download>Descargar Currículum</a>
                        <a href={PDFFile} className="resume-action-link resume-action-link--open" target="_blank" rel="noopener noreferrer">Abrir Currículum</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume