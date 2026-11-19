import Greeting from "../components/Greeting";
import WhatIDo from "../components/WhatIDo";
import Stats from "../components/Stats";

function Home() {
    return (
        <>
            <div className="contenedor-principal">
                <Greeting />
                <Stats />
                <WhatIDo />
            </div>
        </>
    )
}

export default Home