const RedSocial = (props) => {

    const { red, link } = props;
    const src = "/images/" + red + ".png";

    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="redes-elemento">
                    <img className="redes-elemento-icono" src={src} alt={red} loading="lazy" decoding="async" />
                </div>
            </a>
        </>
    )
}

export default RedSocial