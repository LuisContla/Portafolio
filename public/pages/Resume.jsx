import PDFFile from "../documents/LuisAndresContlaMotaCV.pdf";
import PNGFile from "../images/LuisAndresContlaMotaCV.png";

function Resume() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="resume">
                    <div className="resume-download-button">
                        <a href={PDFFile} download>Descargar Currículum</a>
                    </div>
                    <div className="resume-preview">
                        <img src={PNGFile} alt="Currículum Luis Contla" className="resume-preview-image"/>
                    </div>
                    <div className="resume-download-button">
                        <a href={PDFFile} download>Descargar Currículum</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume