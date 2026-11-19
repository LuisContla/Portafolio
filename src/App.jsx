import "./styles/styles.css";
import { Routes, Route, useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Proyects from "./pages/Proyects";
import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import AluraCertifications from "./pages/AluraCertifications";
import SantanderCertifications from "./pages/SantanderCertifications";
import GoogleCertifications from "./pages/GoogleCertifications";
import NotFound from "./pages/NotFound";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de transición
      once: true, // Si la animación debe ocurrir solo una vez
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        <Route path="/google" element={<GoogleCertifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;