import "../public/styles/styles.css";
import { Routes, Route } from 'react-router-dom';

import Nav from "../public/components/Nav";
import Footer from "../public/components/Footer";

import Home from "../public/pages/Home";
import Education from "../public/pages/Education";
import Proyects from "../public/pages/Proyects";
import Resume from "../public/pages/Resume";
import ContactMe from "../public/pages/ContactMe";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Proyects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;