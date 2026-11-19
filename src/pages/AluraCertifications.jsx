import { useState } from "react";
import aluraJSON from "../documents/alura.json";
import CertificationCard from "../components/CertificationCard";

const CATEGORIAS_ALURA = ["Todos", ...new Set(aluraJSON.map((c) => c.categoria).filter(Boolean))];

function AluraCertifications() {
    const [categoriaActiva, setCategoriaActiva] = useState("Todos");
    const [busqueda, setBusqueda] = useState("");

    const cursosFiltrados = aluraJSON.filter((course) => {
        const coincideCategoria = categoriaActiva === "Todos" || course.categoria === categoriaActiva;
        const coincideBusqueda = course.curso.toLowerCase().includes(busqueda.trim().toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    return (
        <>
            <div className="contenedor-principal">
                <div className="nombre" data-aos="fade-up">
                    <div className="nombre-titulo">
                        <div className="nombre-nombre">Oracle Next Education</div>
                        <br />
                        <div className="nombre-texto">Participé en Oracle Next Education (ONE), un programa de capacitación gratuito y 100% virtual de Oracle. Este programa tiene como objetivo formar a personas en tecnologías de la información y conectarlas con el mercado laboral en Latinoamérica y el Caribe. A continuación, se detallan las certificaciones de los cursos que completé en el marco de este programa:</div>
                    </div>
                    <div className="nombre-imagen">
                        <img src="/images/ONE.png" alt="Oracle Next Education" className="certificaciones-portada-imagen certificaciones-portada-imagen--one" />
                    </div>
                </div>
                <div className="certificationCard">
                    <div className="filtros-barra">
                        <input
                            type="search"
                            className="buscador-input"
                            placeholder="Buscar certificación por nombre..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            aria-label="Buscar certificación por nombre"
                        />
                        <div className="filtros-contenedor" role="group" aria-label="Filtrar certificaciones por categoría">
                            {CATEGORIAS_ALURA.map((categoria) => {
                                const cantidad =
                                    categoria === "Todos"
                                        ? aluraJSON.length
                                        : aluraJSON.filter((c) => c.categoria === categoria).length;
                                return (
                                    <button
                                        key={categoria}
                                        type="button"
                                        className={`filtro-boton ${categoriaActiva === categoria ? "filtro-boton--activo" : ""}`}
                                        onClick={() => setCategoriaActiva(categoria)}
                                    >
                                        {categoria} ({cantidad})
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="certificationCard-container">
                        {cursosFiltrados.map(course => (
                            <CertificationCard key={course.certificado || course.curso} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AluraCertifications