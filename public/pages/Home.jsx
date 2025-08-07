import Greeting from "../components/Greeting";
import WhatIDo from "../components/WhatIDo";

function Home() {

    return (
        <>
            <div className="contenedor-principal">
                <Greeting />
                <WhatIDo />
            </div>
        </>
    )
}

export default Home