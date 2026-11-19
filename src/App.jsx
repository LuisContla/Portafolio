import "./styles/styles.css";
import { Routes, Route, useLocation } from 'react-router-dom';

import { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Education = lazy(() => import("./pages/Education"));
const Proyects = lazy(() => import("./pages/Proyects"));
const Resume = lazy(() => import("./pages/Resume"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const AluraCertifications = lazy(() => import("./pages/AluraCertifications"));
const SantanderCertifications = lazy(() => import("./pages/SantanderCertifications"));
const GoogleCertifications = lazy(() => import("./pages/GoogleCertifications"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
      <Suspense fallback={<div className="contenedor-principal" style={{ minHeight: "70vh" }} />}>
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
      </Suspense>
      <Footer />
    </>
  );
}

export default App;