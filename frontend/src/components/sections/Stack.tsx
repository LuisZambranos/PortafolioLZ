import { motion } from 'framer-motion';

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }, 
  {name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Gemini AI", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png" }, // Logo sutil de Google AI
  { name: "Claude AI", icon: "https://www.anthropic.com/favicon.ico" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Framer Motion", icon: "https://www.svgrepo.com/show/452207/framer.svg" },
  { name: "Trello", icon: "https://tse3.mm.bing.net/th/id/OIP.Clo0iuLcLzRmGHT7Vkh1mwHaHa?pid=Api&P=0&h=180" },
  { name: "Sanity.io", icon: "data:image/png;base64,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" },
];

const Stack = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 z-10" id="stack">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-['Space_Grotesk'] text-lz-white text-3xl md:text-5xl font-bold mb-4">
          Tecnologías de <span className="text-lz-purple">Vanguardia</span>
        </h2>
        <p className="text-lz-muted max-w-xl mx-auto">
          Dominio técnico en las herramientas que definen el presente y el futuro del desarrollo de software.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="relative group p-px rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Fondo de degradado que aparece solo en hover */}
            <div className="absolute inset-0 bg-linear-to-br from-lz-purple via-lz-fuchsia to-lz-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-slow"></div>
            
            {/* Contenido de la tarjeta */}
            <div className="relative flex flex-col items-center justify-center p-6 rounded-[15px] bg-lz-dark/90 backdrop-blur-sm border border-lz-border h-full transition-colors group-hover:bg-lz-dark/40">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lz-muted group-hover:text-lz-white text-sm font-bold tracking-tight transition-colors text-center">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;