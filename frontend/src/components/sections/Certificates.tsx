import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Award } from 'lucide-react';

import cert1 from '../../assets/certificates/CrecimientoDigital.png';
import cert2 from '../../assets/certificates/Diseño-GestionAgilProyectos.png';
import cert3 from '../../assets/certificates/Diseño-ProgramacionWeb.png';
import cert4 from '../../assets/certificates/FundamentosProgramacion-DiseñoWeb.png';
import cert5 from '../../assets/certificates/Inmersion-Inteligencia-Artificial.png';
import cert6 from '../../assets/certificates/PowerBI-IA.png';

const certificates = [
  { id: 1, image: cert1, title: "Crecimiento Digital" },
  { id: 2, image: cert2, title: "Gestión Ágil de Proyectos" },
  { id: 3, image: cert3, title: "Diseño y Programación Web" },
  { id: 4, image: cert4, title: "Fundamentos de Programación" },
  { id: 5, image: cert5, title: "Inmersión en IA" },
  { id: 6, image: cert6, title: "Power BI e Inteligencia Artificial" }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedCert(index);
  const closeLightbox = () => setSelectedCert(null);

  const nextCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCert !== null) {
      setSelectedCert((selectedCert + 1) % certificates.length);
    }
  };

  const prevCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCert !== null) {
      setSelectedCert((selectedCert - 1 + certificates.length) % certificates.length);
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 z-10" id="certificados">
      {/* Cabecera */}
      <div className="mb-16 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lz-orange font-mono text-sm tracking-widest mb-4 block uppercase items-center justify-center md:justify-start gap-2"
        >
          <Award size={16} /> — Formación Continua
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold text-lz-white leading-none mb-6"
        >
          Mis Certificados
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lz-muted text-lg max-w-2xl mx-auto md:mx-0"
        >
          El aprendizaje constante es la clave para estar a la vanguardia. Estas son algunas de las certificaciones que respaldan mis habilidades.
        </motion.p>
      </div>

      {/* Grid de Certificados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute -inset-1 bg-linear-to-br from-lz-purple to-lz-orange rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative rounded-xl overflow-hidden border border-lz-border bg-lz-dark/50 aspect-4/3 flex items-center justify-center">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-lz-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-lz-purple text-white px-4 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Ver Certificado
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-lz-bg/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-lz-muted hover:text-lz-white transition-colors p-2 bg-lz-dark/50 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-5xl flex items-center justify-center">
              {/* Botón Anterior */}
              <button 
                className="absolute left-0 md:-left-12 z-10 p-3 bg-lz-dark/80 border border-lz-border text-lz-white rounded-full hover:bg-lz-purple hover:border-lz-purple transition-all shadow-xl backdrop-blur-md hidden sm:block"
                onClick={prevCert}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Imagen Central */}
              <motion.img
                key={selectedCert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={certificates[selectedCert].image}
                alt={certificates[selectedCert].title}
                className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-[0_0_50px_rgba(138,43,226,0.15)] border border-lz-border object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Botón Siguiente */}
              <button 
                className="absolute right-0 md:-right-12 z-10 p-3 bg-lz-dark/80 border border-lz-border text-lz-white rounded-full hover:bg-lz-orange hover:border-lz-orange transition-all shadow-xl backdrop-blur-md hidden sm:block"
                onClick={nextCert}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Controles para Móvil */}
            <div className="absolute bottom-24 sm:hidden flex gap-8 z-10">
              <button onClick={prevCert} className="p-3 bg-lz-dark/80 border border-lz-border text-lz-white rounded-full"><ChevronLeft size={24} /></button>
              <button onClick={nextCert} className="p-3 bg-lz-dark/80 border border-lz-border text-lz-white rounded-full"><ChevronRight size={24} /></button>
            </div>

            {/* Indicador Visual (Rayitas) */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-3 px-4" onClick={(e) => e.stopPropagation()}>
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCert(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === selectedCert 
                      ? 'w-12 bg-lz-purple' 
                      : 'w-6 bg-lz-border hover:bg-lz-muted'
                  }`}
                  aria-label={`Ver certificado ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
