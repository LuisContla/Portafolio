const Technologie = (props) => {

    const { txt, icono } = props;
    const src = "../images/" + icono + ".png";

    return (
        <>
            <div className="technologie-info">
                <img className="whatido-section-text-technologies-icon" src={src} alt={txt} />
                <p>{txt}</p>
            </div>

        </>
    )
}

export default Technologie