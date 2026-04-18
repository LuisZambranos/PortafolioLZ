import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  // Extraemos la lógica centralizada del hook
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      // 1. Activar el fondo borroso al bajar
      setScrolled(window.scrollY > 50);

      // 2. Lógica directa por ID
      const sections = ['sobre-mi', 'proyectos', 'stack', 'certificados', 'contacto'];
      let currentActive = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Lógica: Detecta si la sección está en el viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            currentActive = id;
          }
        }
      });

      // Si estamos en el Hero (muy arriba), limpiamos la selección
      if (window.scrollY < 300) {
        setActiveSection('');
      } else if (currentActive) {
        setActiveSection(currentActive);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi', id: 'sobre-mi' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Stack', href: '#stack', id: 'stack' },
    { name: 'Certificados', href: '#certificados', id: 'certificados' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <>
      {/* 1. LOGO INDEPENDIENTE */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-6 z-60 cursor-pointer flex items-start"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 md:-mt-2 rounded-xl bg-linear-to-br from-lz-purple via-lz-fuchsia to-lz-orange shadow-[0_0_15px_var(--color-lz-purple)]">
          <span className="text-2xl md:text-3xl font-black text-lz-white tracking-tighter">LZ</span>
        </div>
      </motion.div>

      {/* 2. NAVBAR FIXED */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-lz-bg/80 backdrop-blur-md border-b border-lz-border/50 shadow-lg' 
            : 'py-6 bg-transparent border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          <div className="hidden md:flex items-center z-50 cursor-pointer pl-28">
            <span className="text-xl font-extrabold text-lz-white tracking-wider">
              LUIS <span className="text-lz-purple">ZAMBRANO</span>
            </span>
          </div>

          <div className="md:hidden w-10"></div>

          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-lg font-extrabold text-lz-white tracking-wider z-40 pointer-events-none">
            LUIS <span className="text-lz-purple">ZAMBRANO</span>
          </div>
          
          {/* BLOQUE CENTRAL DESKTOP: Menú */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-lz-dark/90 border border-lz-border rounded-full px-8 py-3">
            <ul className="flex gap-8 text-lz-muted font-medium text-sm">
              {navLinks.map((link) => (
                <li key={link.name} className="relative flex flex-col items-center">
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id); // Usando el Hook
                    }}
                    className={`transition-colors duration-300 ${
                      activeSection === link.id ? 'text-lz-white' : 'hover:text-lz-white'
                    }`}
                  >
                    {link.name}
                  </a>
                  
                  {/* PUNTITO INDICADOR ANIMADO */}
                  <AnimatePresence>
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="navDot"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-lz-purple"
                      />
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>

          <a 
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacto'); // Usando el Hook
            }}
            className="hidden md:flex items-center gap-2 text-lz-white font-semibold hover:text-lz-orange transition-colors duration-300 cursor-pointer"
          >
            Hablemos <span className="text-lg">&rarr;</span>
          </a>

          <button 
            className="md:hidden text-lz-white z-50 bg-lz-dark border border-lz-border p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.nav>

      {/* 3. MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-lz-bg/95 backdrop-blur-xl flex flex-col items-center justify-center h-screen"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-lz-white">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id); // Usando el Hook
                      setIsOpen(false);
                    }}
                    className={`${activeSection === link.id ? 'text-lz-purple' : 'hover:text-lz-purple'} transition-colors`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.1 }}>
                <a 
                  href="#contacto" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contacto'); // Usando el Hook
                    setIsOpen(false);
                  }} 
                  className="text-lz-orange mt-4 block"
                >
                  Hablemos
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;