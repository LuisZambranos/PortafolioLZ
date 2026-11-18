// Importamos el tipo 'Variants' para que TypeScript no se queje
import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const name = 'Luis-Zambrano';
const role = 'Ingeniero-Software';

const Hero = () => {
  // Efecto de escritura: primero el nombre, luego el rol; pausa y reinicia
  const [count, setCount] = useState(0);
  const total = name.length + role.length;

  useEffect(() => {
    const delay = count >= total ? 2500 : 90;
    const timer = setTimeout(() => setCount(count >= total ? 0 : count + 1), delay);
    return () => clearTimeout(timer);
  }, [count, total]);

  const typedName = name.slice(0, count);
  const typedRole = count > name.length ? role.slice(0, count - name.length) : '';

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
        <div className="relative inline-block group">
          {/* Resplandor degradado de fondo */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-lz-purple via-lz-fuchsia to-lz-orange rounded-lg blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <div className="relative flex items-center gap-3 bg-lz-dark/90 border border-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md select-none">
            {/* Puntos estilo ventana */}
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-mac-close"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-mac-min"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-mac-max"></span>
            </div>

            <div className="w-px h-4 bg-white/10"></div>

            {/* Prompt con efecto de escritura */}
            <div className="font-mono text-sm sm:text-base flex items-center min-w-68 sm:min-w-88">
              <span className="text-lz-success-light font-bold">~</span>
              <span className="text-lz-muted/60 mx-1.5">/</span>
              <span className="text-lz-purple font-semibold">{typedName}</span>
              {typedName.length === name.length && (
                <span className="text-lz-muted/60 mx-1.5">/</span>
              )}
              <span className="text-lz-orange font-semibold">{typedRole}</span>
              <span className="cursor-blink inline-block w-2 h-5 ml-1 rounded-xs bg-linear-to-b from-lz-fuchsia to-lz-orange"></span>
            </div>
          </div>
        </div>
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