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

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const now = Date.now();

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
                        <form ref={formRef} className="contacto-formulario" onSubmit={handleSubmit}>
                            <div className="contacto-formulario-titulo">
                                Envía un mensaje
                            </div>
                            <div className="contacto-formulario-elemento">
                                <label htmlFor="nombre" className="contacto-formulario-etiqueta">
                                    Nombre
                                </label>
                                <div className="contacto-formulario-campo">
                                    <input id="nombre" name="nombre" type="text" className="contacto-formulario-campo-texto" required minLength={2} maxLength={80} />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <label htmlFor="correo" className="contacto-formulario-etiqueta">
                                    Correo
                                </label>
                                <div className="contacto-formulario-campo">
                                    <input id="correo" name="correo" type="email" className="contacto-formulario-campo-texto" required maxLength={120} />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <label htmlFor="asunto" className="contacto-formulario-etiqueta">
                                    Asunto
                                </label>
                                <div className="contacto-formulario-campo">
                                    <input id="asunto" name="asunto" type="text" className="contacto-formulario-campo-texto" required minLength={4} maxLength={120} />
                                </div>
                            </div>
                            <div className="contacto-formulario-elemento">
                                <label htmlFor="mensaje" className="contacto-formulario-etiqueta">
                                    Mensaje
                                </label>
                                <div className="contacto-formulario-campo">
                                    <textarea id="mensaje" name="mensaje" className="contacto-formulario-campo-textarea" required minLength={10} maxLength={2000} />
                                </div>
                            </div>
                            <div className="contacto-formulario-honeypot" aria-hidden="true">
                                <label htmlFor="company_website">Website</label>
                                <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                            </div>
                            <button type="submit" className="contacto-formulario-boton" disabled={isSending}>
                                {isSending ? "Enviando..." : "Enviar"}
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
        </>
    )
}

export default ContactMe