import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para escuchar el scroll de la ventana
  useEffect(() => {
    const toggleVisibility = () => {
      // 500px es aproximadamente la altura donde termina el Hero
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-60 w-12 h-12 flex items-center justify-center rounded-full bg-lz-dark/80 backdrop-blur-md border border-lz-purple text-lz-white hover:bg-lz-purple hover:text-lz-white shadow-[0_0_15px_rgba(138,43,226,0.3)] hover:shadow-[0_0_20px_var(--color-lz-purple)] transition-all duration-300 group"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;