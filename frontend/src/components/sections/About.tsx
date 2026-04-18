import { motion, type Variants } from 'framer-motion';
import avatar from '../../assets/avatar.jpg';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 z-10" id="sobre-mi">
      
      {/* Título de Sección */}
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lz-orange font-mono text-xs tracking-widest mb-4 block uppercase"
        >
          — Conóceme
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold text-lz-white leading-none"
        >
          Sobre Mí
        </motion.h2>
        <div className="h-2 w-24 bg-linear-to-r from-lz-purple to-lz-orange mt-4 rounded-full"></div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-lz-dark/40 border border-lz-border p-8 md:p-12 rounded-4xl backdrop-blur-sm relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lz-purple/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lz-orange/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Avatar */}
        <motion.div variants={itemVariants} className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-linear-to-br from-lz-purple via-lz-fuchsia to-lz-orange shadow-[0_0_30px_rgba(138,43,226,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-lz-bg relative">
              <img 
                src={avatar} 
                alt="Luis Zambrano" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.div variants={itemVariants} className="w-full md:w-2/3 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-['Space_Grotesk'] font-bold text-lz-white mb-6">
            Ingeniero Informático <span className="text-lz-purple">(en formación)</span>
          </h3>
          <div className="space-y-6 text-lz-muted text-lg leading-relaxed">
            <p>
              Soy estudiante de último año de Ingeniería en Informática y me gusta mucho la frase <span className="text-lz-white font-semibold">"Learn by doing"</span>. Mi pasión es desarrollar sistemas capaces de entregar soluciones, creando propuestas con resultados reales desde cero.
            </p>
            <p>
              Mi objetivo es aportar valor técnico empleando mis habilidades blandas mientras absorbo conocimientos de los mejores referentes del sector. Busco la oportunidad de demostrar mis capacidades técnicas, comunicativas y capacidad de ejecución en proyectos de alto impacto.
            </p>
          </div>


        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
