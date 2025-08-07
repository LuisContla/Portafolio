import "../public/styles/styles.css";

import Nav from "../public/components/Nav";
import Footer from "../public/components/Footer";

import Home from "../public/pages/Home";
import Education from "../public/pages/Education";
import Proyects from "../public/pages/Proyects";
import Resume from "../public/pages/Resume";
import ContacMe from "../public/pages/ContactMe";

function App() {

  return (
    <>
      <Nav />
      <Education />
      <Footer />
    </>
  )
}

export default App
