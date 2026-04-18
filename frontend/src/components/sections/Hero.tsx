// Importamos el tipo 'Variants' para que TypeScript no se queje
import { motion, type Variants } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Hero = () => {
  // Extraemos la función centralizada de nuestro Hook
  const { scrollToSection } = useSmoothScroll();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative max-w-7xl mx-auto px-6 pt-25 pb-32 flex flex-col items-center text-center md:items-start md:text-left z-10 min-h-[90vh]"
    >     
      
      <motion.h1 
        variants={itemVariants}
        className="font-['Space_Grotesk'] pt-20 text-7xl md:text-[7rem] font-black text-lz-white leading-none tracking-tighter mb-5 drop-shadow-lg"
      >
        Luis <br />
        <span className="pb-2 pr-2 text-transparent bg-clip-text bg-linear-to-r from-lz-purple via-lz-fuchsia to-lz-orange">
          Zambrano
        </span>
      </motion.h1>

      <motion.div variants={itemVariants} className="mb-8">
        <span className="inline-flex items-center gap-2 border border-lz-purple/30 bg-lz-purple/10 text-lz-purple font-semibold tracking-widest uppercase text-xs py-1.5 px-4 rounded-full">
          <span className="w-2 h-2 rounded-full bg-lz-purple animate-pulse"></span>
          Buscando oportunidades laborales
        </span>
      </motion.div>
      
      <motion.div variants={itemVariants} className="max-w-md mb-10 mx-auto md:mx-0">
        <h2 className="font-['Space_Grotesk'] text-lz-white font-bold text-lg md:text-xl mb-4">
          Desarrollador Full Stack —
        </h2>
        <p className="text-base md:text-lg text-lz-muted leading-relaxed drop-shadow-md">
          Enfocado en crear soluciones eficientes y escalables. Apasionado por resolver problemas complejos a través de código limpio y una arquitectura sólida.
        </p>
      </motion.div>
      
      <motion.div 
        variants={itemVariants} 
        className="mt-8 md:mt-0 md:absolute md:bottom-42 md:right-6 flex flex-col items-center md:items-end gap-4 w-full md:w-auto"
      >
        <button 
          // CORREGIDO: Usamos la función del hook centralizado
          onClick={() => scrollToSection('proyectos')}
          className="bg-lz-white text-lz-bg font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_var(--color-lz-orange)] hover:scale-105 active:scale-95 cursor-pointer"
        >
          Ver Proyectos
        </button>

        <div className="flex flex-col items-center md:items-end gap-2">
           <span className="text-lz-muted text-sm flex items-center gap-2 pr-4">
             <span className="animate-bounce">↓</span> scroll para explorar
           </span>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Hero;