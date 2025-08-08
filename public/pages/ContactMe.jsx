import FotoPng from "../images/FotoPerfil.jpg";

function ContactMe() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Contáctame</div>
                        <br />
                        <div className="nombre-texto">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.</div>
                    </div>
                    <div className="nombre-imagen">
                        <img src={FotoPng} alt="LuisContla" className="contacto-imagen-imagen" />
                    </div>
                </div>
                <div className="education">
                    <div className="education-title" data-aos="fade-up">Mándame un Correo</div>
                    <div className="contacto" data-aos="fade-up">
                        <div className="contacto-formulario">
                            <div className="contacto-formulario-titulo">
                                Envía un mensaje
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Nombre
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="text" className="contacto-formulario-campo-texto" />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Correo
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="text" className="contacto-formulario-campo-texto" />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Asunto
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="text" className="contacto-formulario-campo-texto" />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <div className="contacto-formulario-etiqueta">
                                    Mensaje
                                </div>
                                <div className="contacto-formulario-campo">
                                    <input type="textarea" className="contacto-formulario-campo-textarea" />
                                </div>
                            </div>
                            <div className="contacto-formulario-boton">
                                Enviar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe