import RedSocial from "../components/RedSocial";

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer-element">Diseñado y Desarrollado por Luis Contla</div>
                <div className="footer-element">Copyright © 2025</div>
                <div className="footer-element">
                    <RedSocial red="LinkedIn" link="https://www.linkedin.com/in/luiscontla/" />
                    <RedSocial red="GitHub" link="https://github.com/LuisContla" />
                </div>
            </footer>
        </>
    )
}

export default Footer