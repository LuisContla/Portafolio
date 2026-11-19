import proyectosJSON from "../documents/proyectos.json";
import aluraJSON from "../documents/alura.json";
import santanderJSON from "../documents/santander.json";

function Stats() {
    const totalCertificaciones = aluraJSON.length + santanderJSON.length;
    const stats = [
        { numero: String(proyectosJSON.length), label: "Proyectos" },
        { numero: String(totalCertificaciones), label: "Certificaciones" },
        { numero: "5", label: "Áreas de especialización" },
        { numero: "20+", label: "Tecnologías" },
    ];
    return (
        <div className="stats" data-aos="fade-up">
            {stats.map((s, i) => (
                <div className="stats-elemento" key={i}>
                    <div className="stats-numero">{s.numero}</div>
                    <div className="stats-label">{s.label}</div>
                </div>
            ))}
        </div>
    );
}
export default Stats;
