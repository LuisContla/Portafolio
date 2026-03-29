import "../public/styles/styles.css";
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from "../public/components/Nav";
import Footer from "../public/components/Footer";

import Home from "../public/pages/Home";
import Education from "../public/pages/Education";
import Proyects from "../public/pages/Proyects";
import Resume from "../public/pages/Resume";
import ContactMe from "../public/pages/ContactMe";
import AluraCertifications from "../public/pages/AluraCertifications";
import SantanderCertifications from "../public/pages/SantanderCertifications";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de transición
      once: true, // Si la animación debe ocurrir solo una vez
    });
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Proyects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/alura" element={<AluraCertifications />} />
        <Route path="/santander" element={<SantanderCertifications />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;