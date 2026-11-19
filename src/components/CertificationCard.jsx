import React from 'react';

function CertificationCard({ course }) {
    function handleDemo(demo) {
        if (demo) {
            return (<a className="certificationCard-button" href={demo} target="_blank" rel="noopener noreferrer">Ver Demo</a>);
        }
    }

    return (
        <div className="certificationCard-element">
            <div className="certificationCard-info">
                {course.icono && (
                    <div className="certificationCard-icon">
                        <img src={course.icono} alt="" className="certificationCard-icon-image" />
                    </div>
                )}
                <div className="certificationCard-text">
                    <div className="certificationCard-name">
                        <p>{course.curso}</p>
                    </div>
                    {course.categoria && (
                        <div className="certificationCard-category">
                            <p>{course.categoria}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="certificationCard-buttons">
                {course.certificado && (
                    <a className="certificationCard-button" href={course.certificado} target="_blank" rel="noopener noreferrer">Ver Certificado</a>
                )}
                {handleDemo(course.demo)}
            </div>
        </div>
    );
}

export default CertificationCard;
