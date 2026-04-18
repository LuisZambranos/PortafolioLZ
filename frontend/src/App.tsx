import { useEffect } from 'react';
import ParticlesBackground from './components/ui/ParticlesBackground';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects'; // <-- Importamos la nueva sección
import Stack from './components/sections/Stack'; // <-- Importamos la nueva sección
import About from './components/sections/About'; // <-- Importamos la nueva sección
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact'; // <-- Importamos la nueva sección
import Footer from './components/layout/Footer'; // <-- Importamos el Footer
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects /> 
        <Stack />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;