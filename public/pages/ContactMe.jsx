import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FotoPng from "../images/FotoPerfil.jpg";

function ContactMe() {
    const MIN_SECONDS_TO_SUBMIT = 3;
    const COOLDOWN_SECONDS = 45;

    const formRef = useRef(null);
    const pageLoadTimeRef = useRef(Date.now());
    const lastSentTimeRef = useRef(0);
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState({ type: "", message: "" });
    const [formValues, setFormValues] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: ""
    });
    const [touched, setTouched] = useState({
        nombre: false,
        correo: false,
        asunto: false,
        mensaje: false
    });

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const getFieldError = (fieldName, value) => {
        const cleanValue = value.trim();

        if (fieldName === "nombre") {
            if (!cleanValue) return "Escribe tu nombre.";
            if (cleanValue.length < 2) return "El nombre debe tener al menos 2 caracteres.";
            return "";
        }

        if (fieldName === "correo") {
            if (!cleanValue) return "Escribe tu correo.";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(cleanValue)) return "Ingresa un correo valido.";
            return "";
        }

        if (fieldName === "asunto") {
            if (!cleanValue) return "Escribe un asunto.";
            if (cleanValue.length < 4) return "El asunto debe tener al menos 4 caracteres.";
            return "";
        }

        if (fieldName === "mensaje") {
            if (!cleanValue) return "Escribe tu mensaje.";
            if (cleanValue.length < 10) return "El mensaje debe tener al menos 10 caracteres.";
            return "";
        }

        return "";
    };

    const validationErrors = {
        nombre: getFieldError("nombre", formValues.nombre),
        correo: getFieldError("correo", formValues.correo),
        asunto: getFieldError("asunto", formValues.asunto),
        mensaje: getFieldError("mensaje", formValues.mensaje)
    };

    const hasValidationErrors = Object.values(validationErrors).some(Boolean);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleInputBlur = (event) => {
        const { name } = event.target;
        setTouched((previous) => ({
            ...previous,
            [name]: true
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const now = Date.now();

        setTouched({
            nombre: true,
            correo: true,
            asunto: true,
            mensaje: true
        });

        if (hasValidationErrors) {
            setFeedback({
                type: "error",
                message: "Corrige los campos marcados antes de enviar."
            });
            return;
        }

        if (!publicKey || !serviceId || !templateId) {
            setFeedback({
                type: "error",
                message: "Faltan variables de entorno de EmailJS. Revisa VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID y VITE_EMAILJS_TEMPLATE_ID."
            });
            return;
        }

        if (!formRef.current) {
            setFeedback({
                type: "error",
                message: "No se pudo inicializar el formulario. Intenta recargar la página."
            });
            return;
        }

        const formData = new FormData(formRef.current);
        const honeypot = String(formData.get("company_website") || "").trim();

        if (honeypot) {
            // Si un bot completa este campo oculto, evitamos enviar y devolvemos mensaje neutro.
            setFeedback({
                type: "success",
                message: "Mensaje enviado correctamente. Te responderé lo antes posible."
            });
            return;
        }

        const secondsSinceLoad = Math.round((now - pageLoadTimeRef.current) / 1000);
        if (secondsSinceLoad < MIN_SECONDS_TO_SUBMIT) {
            setFeedback({
                type: "error",
                message: `Envio bloqueado por seguridad. Espera al menos ${MIN_SECONDS_TO_SUBMIT} segundos antes de enviar.`
            });
            return;
        }

        const secondsSinceLastSent = Math.round((now - lastSentTimeRef.current) / 1000);
        if (lastSentTimeRef.current && secondsSinceLastSent < COOLDOWN_SECONDS) {
            setFeedback({
                type: "error",
                message: `Espera ${COOLDOWN_SECONDS - secondsSinceLastSent} segundos antes de volver a enviar otro mensaje.`
            });
            return;
        }

        try {
            setIsSending(true);
            setFeedback({ type: "", message: "" });

            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            lastSentTimeRef.current = Date.now();

            setFeedback({
                type: "success",
                message: "Mensaje enviado correctamente. Te responderé lo antes posible."
            });
            formRef.current.reset();
            setFormValues({
                nombre: "",
                correo: "",
                asunto: "",
                mensaje: ""
            });
            setTouched({
                nombre: false,
                correo: false,
                asunto: false,
                mensaje: false
            });
        } catch (error) {
            console.error("Error al enviar correo con EmailJS:", error);

            let errorMessage = "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.";

            if (!navigator.onLine) {
                errorMessage = "No tienes conexion a internet. Verifica tu red e intenta nuevamente.";
            } else if (error?.status === 400) {
                errorMessage = "Solicitud invalida hacia EmailJS. Revisa los nombres de variables del template y los campos del formulario.";
            } else if (error?.status === 401 || error?.status === 403) {
                errorMessage = "Credenciales de EmailJS invalidas o sin permisos. Verifica Public Key, Service ID y Template ID.";
            } else if (error?.status === 404) {
                errorMessage = "No se encontro el servicio o template de EmailJS. Confirma los IDs configurados.";
            } else if (error?.status === 429) {
                errorMessage = "Demasiadas solicitudes en poco tiempo. Espera un minuto y vuelve a intentar.";
            } else if (typeof error?.text === "string" && error.text.toLowerCase().includes("network")) {
                errorMessage = "Hubo un problema de red al contactar EmailJS. Intenta nuevamente en unos segundos.";
            }

            setFeedback({
                type: "error",
                message: errorMessage
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <div className="contenedor-principal">
                <div className="education">
                    <div className="contacto" data-aos="fade-up">
                        <div className="contacto-paneles">
                            <aside className="contacto-panel-informacion">
                                <div className="contacto-panel-perfil">
                                    <img src={FotoPng} alt="Luis Contla" className="contacto-imagen-imagen" />
                                </div>
                                <h3 className="contacto-formulario-titulo">Contáctame</h3>
                                <p className="contacto-panel-descripcion">
                                    Estoy disponible en casi todas las redes sociales. Puedes escribirme y te responderé en menos de 24 horas.
                                    También puedo ayudarte con Machine Learning, IA, React, Android, Cloud y desarrollo Open Source.
                                </p>
                                <p className="contacto-formulario-subtitulo">Hablemos de tu proyecto</p>
                                <h3 className="contacto-formulario-titulo">Cuéntame tu idea y te respondo en menos de 24 horas</h3>
                                <div className="contacto-disponibilidad" role="status" aria-label="Estado de disponibilidad">
                                    <span className="contacto-disponibilidad-punto"></span>
                                    Disponible para freelance
                                </div>
                                <div className="contacto-panel-bloques" aria-label="Compromisos del formulario de contacto">
                                    <div className="contacto-panel-bloque">Respuesta dentro de 24 horas</div>
                                    <div className="contacto-panel-bloque">No comparto tu correo</div>
                                    <div className="contacto-panel-bloque">Sin spam</div>
                                </div>
                                <div className="contacto-panel-links">
                                    <a href="mailto:luiscontla@gmail.com" className="contacto-panel-link">Enviar por email</a>
                                    <a href="https://www.linkedin.com/in/luiscontla/" target="_blank" rel="noreferrer" className="contacto-panel-link">LinkedIn</a>
                                </div>
                            </aside>
                            <form ref={formRef} className="contacto-formulario" onSubmit={handleSubmit}>
                                <div className="contacto-formulario-header">
                                    <div className="contacto-formulario-titulo">Envía un mensaje</div>
                                </div>
                                <div className="contacto-formulario-elemento">
                                    <label htmlFor="nombre" className="contacto-formulario-etiqueta">Nombre</label>
                                    <div className="contacto-formulario-campo">
                                        <input id="nombre" name="nombre" type="text" className={`contacto-formulario-campo-texto ${touched.nombre && validationErrors.nombre ? "contacto-formulario-campo-texto--error" : ""}`} required minLength={2} maxLength={80} value={formValues.nombre} onChange={handleInputChange} onBlur={handleInputBlur} aria-invalid={Boolean(touched.nombre && validationErrors.nombre)} aria-describedby="nombre-help" placeholder="Tu nombre" />
                                    </div>
                                    <p id="nombre-help" className={`contacto-formulario-ayuda ${touched.nombre && validationErrors.nombre ? "contacto-formulario-ayuda--error" : ""}`}>{touched.nombre && validationErrors.nombre ? validationErrors.nombre : "Como quieres que te llame."}</p>
                                </div>
                                <div className="contacto-formulario-elemento">
                                    <label htmlFor="correo" className="contacto-formulario-etiqueta">Correo</label>
                                    <div className="contacto-formulario-campo">
                                        <input id="correo" name="correo" type="email" className={`contacto-formulario-campo-texto ${touched.correo && validationErrors.correo ? "contacto-formulario-campo-texto--error" : ""}`} required maxLength={120} value={formValues.correo} onChange={handleInputChange} onBlur={handleInputBlur} aria-invalid={Boolean(touched.correo && validationErrors.correo)} aria-describedby="correo-help" placeholder="tu-correo@ejemplo.com" />
                                    </div>
                                    <p id="correo-help" className={`contacto-formulario-ayuda ${touched.correo && validationErrors.correo ? "contacto-formulario-ayuda--error" : ""}`}>{touched.correo && validationErrors.correo ? validationErrors.correo : "Usare este correo para responderte."}</p>
                                </div>
                                <div className="contacto-formulario-elemento">
                                    <label htmlFor="asunto" className="contacto-formulario-etiqueta">Asunto</label>
                                    <div className="contacto-formulario-campo">
                                        <input id="asunto" name="asunto" type="text" className={`contacto-formulario-campo-texto ${touched.asunto && validationErrors.asunto ? "contacto-formulario-campo-texto--error" : ""}`} required minLength={4} maxLength={120} value={formValues.asunto} onChange={handleInputChange} onBlur={handleInputBlur} aria-invalid={Boolean(touched.asunto && validationErrors.asunto)} aria-describedby="asunto-help" placeholder="Ej. Propuesta de colaboracion" />
                                    </div>
                                    <p id="asunto-help" className={`contacto-formulario-ayuda ${touched.asunto && validationErrors.asunto ? "contacto-formulario-ayuda--error" : ""}`}>{touched.asunto && validationErrors.asunto ? validationErrors.asunto : "Resume en una linea el motivo del mensaje."}</p>
                                </div>
                                <div className="contacto-formulario-elemento">
                                    <label htmlFor="mensaje" className="contacto-formulario-etiqueta">Mensaje</label>
                                    <div className="contacto-formulario-campo">
                                        <textarea id="mensaje" name="mensaje" className={`contacto-formulario-campo-textarea ${touched.mensaje && validationErrors.mensaje ? "contacto-formulario-campo-texto--error" : ""}`} required minLength={10} maxLength={2000} value={formValues.mensaje} onChange={handleInputChange} onBlur={handleInputBlur} aria-invalid={Boolean(touched.mensaje && validationErrors.mensaje)} aria-describedby="mensaje-help" placeholder="Cuéntame brevemente tu idea, fecha objetivo y alcance." />
                                    </div>
                                    <p id="mensaje-help" className={`contacto-formulario-ayuda ${touched.mensaje && validationErrors.mensaje ? "contacto-formulario-ayuda--error" : ""}`}>{touched.mensaje && validationErrors.mensaje ? validationErrors.mensaje : "Entre mas contexto compartas, mejor respuesta te puedo dar."}</p>
                                </div>
                                <div className="contacto-formulario-honeypot" aria-hidden="true">
                                    <label htmlFor="company_website">Website</label>
                                    <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                                </div>
                                <button type="submit" className="contacto-formulario-boton" disabled={isSending}>
                                    {isSending ? (
                                        <span className="contacto-formulario-boton-texto">
                                            <span className="contacto-formulario-spinner" aria-hidden="true"></span>
                                            Enviando mensaje...
                                        </span>
                                    ) : (
                                        <span className="contacto-formulario-boton-texto">Enviar mensaje</span>
                                    )}
                                </button>
                                {feedback.message && (
                                    <p className={`contacto-formulario-feedback contacto-formulario-feedback--${feedback.type}`}>
                                        {feedback.message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe