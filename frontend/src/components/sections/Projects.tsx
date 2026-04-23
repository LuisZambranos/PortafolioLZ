import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "AJ Studio Panel",
    category: "Sistema de Gestión y Reservas",
    challenge: "Reducir los tiempos muertos por mala gestion de reservas y optimización del flujo interno en la barbería.",
    solution: "Desarrollo de un sistema organizativo con agenda inteligente, reservas automatizadas, pasarela de pagos y panel administrativo completo.",
    impact: [
      "Reducción del 100% en tiempo administrativo manual.",
      "Incremento en la percepción de la barbería.",
      "Control total sobre los ingresos y agenda del personal."
    ],
    tech: ["React", "TypeScript", "Tailwind", "Firebase", "Vite"],
    gradient: "from-lz-purple to-lz-orange",
    link: "https://ajstudio.cl/",
    image: "/homeAJStudio.png" 
  },
  {
    id: 2,
    title: "Finax",
    category: "Dashboard Financiero",
    challenge: "Desorden en las finanzas personales, carencia de control y gestión de sus ingresos y gastos.",
    solution: "Aplicación web de alto rendimiento orientada a la gestión clara de las finanzas mediante una experiencia de usuario sencilla.",
    impact: [
      "Carga de datos financieros en tiempo real.",
      "Interfaz intuitiva que aumenta la satisfacción del usuario.",
      "Arquitectura escalable para futuros módulos."
    ],
    tech: ["React", "Vite", "TypeScript", "CSS"],
    gradient: "from-lz-orange to-lz-fuchsia",
    link: "https://finax-cl.vercel.app/",
    image: "/FinaxDashboard.jpeg" 
  },
  {
    id: 3,
    title: "Fletes Jez",
    category: "Logística y Operaciones",
    challenge: "Reducir el tiempo de respuesta de las cotizaciones, mejorar la productividad de la empresa.",
    solution: "Sistema a medida para cotizar automaticamente, panel de gestion de reservas para optimizar los procesos.",
    impact: [
      "Mejora significativa en los tiempos de respuesta.",
      "Mayor resultados en busqueda de clientes.",
      "Centralización de la información operativa."
    ],
    tech: ["React", "Vite", "TypeScript","JavaScript", "CSS", "Firebase"],
    gradient: "from-lz-fuchsia to-lz-purple",
    link: "https://fletesjez.vercel.app/",
    image: "/FletesJez.jpg" 
  },
    {
    id: 4,
    title: "Escuela Unión Latinoamericana",
    category: "Gestión y Marketing Educacional",
    challenge: "Digitalizar la gestión administrativa y potenciar la captación de alumnos mediante una plataforma moderna.",
    solution: "Desarrollo de un sitio web robusto con sistema de postulaciones, catálogo de cursos y noticias de la escuela.",
    impact: [
      "Difusión de noticias del colegio.",
      "Incremento del 40% en la visibilidad orgánica en buscadores.",
      "Plataforma centralizada para comunicación con padres de familia."
    ],
    tech: ["React", "TypeScript", "Tailwind", "Sanity", "Vite"],
    gradient: "from-red-600 to-pink-600",
    link: "https://escuelaula.cl/",
    image: "/escuelaula.png" 
  }
];

const Projects = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 z-10" id="proyectos">
      
      {/* Título de la Sección */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center md:text-left"
      >
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-lz-white mb-4">
          Sistemas que generan <span className="text-lz-purple">Resultados</span>
        </h2>
        <p className="text-lz-muted text-lg max-w-2xl">
          Sistemas desarrollados con enfoque en rendimiento y usabilidad. Cada proyecto demuestra la capacidad para resolver desafíos reales mediante código estructurado, haciendo énfasis en buenas prácticas y orden.
        </p>
      </motion.div>

      {/* Contenedor de Proyectos */}
      <div className="flex flex-col gap-32">
        
        {projectsData.map((project, index) => {
          const isEven = index % 2 !== 0; 
          
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}
            >
              
              {/* LADO 1: MOCKUP VISUAL */}
              <div className="w-full md:w-1/2 relative group perspective-1000">
                <div className={`absolute -inset-1 bg-linear-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700`}></div>
                
                <div className="relative bg-lz-dark/90 backdrop-blur-xl border border-lz-border rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  
                  {/* ========================================= */}
                  {/* NUEVA BARRA SUPERIOR MAC CON URL CENTRADA   */}
                  {/* ========================================= */}
                  {/* Ajusté la altura a h-10 para que la barra de búsqueda respire mejor */}
                  <div className="h-10 bg-lz-dark border-b border-lz-border flex items-center relative px-4">
                    
                    {/* Botones anclados absolutamente a la izquierda */}
                    <div className="flex gap-2 absolute left-4">
                      <div className="w-3 h-3 rounded-full bg-mac-close"></div>
                      <div className="w-3 h-3 rounded-full bg-mac-min"></div>
                      <div className="w-3 h-3 rounded-full bg-mac-max"></div>
                    </div>
                    
                    {/* Contenedor centrado para la URL */}
                    <div className="mx-auto w-[60%] sm:w-[70%]">
                      <div className="bg-lz-white/5 border border-lz-border text-lz-muted text-[10px] sm:text-xs text-center px-3 py-1 rounded-md truncate font-mono select-none">
                        {project.link}
                      </div>
                    </div>

                  </div>
                  {/* ========================================= */}
                  
                  {/* Área de la imagen */}
                  <div className="aspect-4/3 md:aspect-video relative overflow-hidden bg-lz-bg">
                    <img 
                      src={project.image} 
                      alt={`Mockup de ${project.title}`} 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-lz-muted font-bold tracking-widest">${project.title}</div>`;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* LADO 2: TEXTO Y DETALLES */}
              <div className="w-full md:w-1/2 flex flex-col relative">
                
                <span className="absolute -top-16 -left-6 md:-left-12 text-[8rem] md:text-[12rem] font-['Space_Grotesk'] font-bold text-lz-white/3 select-none pointer-events-none leading-none z-0">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  
                  <h3 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-lz-white mb-3">
                    {project.title}
                  </h3>
                  <span className="text-lz-purple font-bold text-xs tracking-widest uppercase mb-8 block">
                    {project.category}
                  </span>
                  
                  <div className="mb-6">
                    <span className="text-lz-white font-bold text-sm block mb-2">Reto</span>
                    <p className="text-lz-muted text-base leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-lz-white font-bold text-sm block mb-2">Solución</span>
                    <p className="text-lz-muted text-base leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className={`relative rounded-xl p-px bg-linear-to-br ${project.gradient} mb-8`}>
                    <div className="bg-lz-dark rounded-[11px] p-5 md:p-6 h-full">
                      <h4 className="text-lz-orange font-bold text-lg mb-4 flex items-center gap-2">
                        ⚡ El Impacto
                      </h4>
                      <ul className="text-lz-muted text-sm space-y-2 list-disc pl-5 marker:text-lz-purple">
                        {project.impact.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-semibold text-lz-muted bg-lz-white/5 border border-lz-border px-3 py-1.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center self-start sm:self-auto bg-lz-orange hover:bg-lz-orange-hover text-lz-white font-bold py-3 px-8 rounded transition-all duration-300 shadow-[0_0_15px_var(--color-lz-orange)] shrink-0"
                      >
                        Ver Sistema &rarr;
                      </a>
                  </div>
                  
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;