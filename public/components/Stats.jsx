function Stats() {
    const stats = [
        { numero: "8", label: "Proyectos" },
        { numero: "51", label: "Certificaciones" },
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
