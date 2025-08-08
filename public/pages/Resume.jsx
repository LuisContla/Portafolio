import PDFFile from "../documents/LuisAndresContlaMotaCV.pdf";
import PNGFile from "../images/LuisAndresContlaMotaCV.png";

function Resume() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="resume">
                    <div className="resume-download-button" data-aos="zoom-out">
                        <a href={PDFFile} download>Descargar Currículum</a>
                    </div>
                    <div className="resume-preview" data-aos="flip-right">
                        <img src={PNGFile} alt="Currículum Luis Contla" className="resume-preview-image"/>
                    </div>
                    <div className="resume-download-button" data-aos="zoom-out">
                        <a href={PDFFile} download>Descargar Currículum</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume