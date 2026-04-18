import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-lz-bg border-t border-lz-border pt-20 pb-10 px-6 z-10 overflow-hidden">
      {/* Resplandor de fondo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-lz-purple/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          
          {/* Logo y Branding */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-['Space_Grotesk'] font-extrabold text-lz-white tracking-wider">
              Luis <span className="text-lz-purple">Zambrano</span>
            </div>
            <p className="text-lz-muted text-sm max-w-xs leading-relaxed">
              Forjando el futuro digital con ingeniería de software de alto rendimiento y diseño estratégico.
            </p>
          </div>

          {/* Redes Sociales (SVGs Nativos) */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a 
              href="https://github.com/LuisZambranos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-lz-white/5 border border-lz-border flex items-center justify-center text-lz-white hover:bg-lz-purple hover:border-lz-purple transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19 4.8a5.3 5.3 0 0 0-.1-3.2s-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0C5.3 1.2 4.1 1.6 4.1 1.6a5.3 5.3 0 0 0-.1 3.2A5.1 5.1 0 0 0 2 9.8c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 7.5 20v2"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/luis-zambranos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-lz-white/5 border border-lz-border flex items-center justify-center text-lz-white hover:bg-lz-purple hover:border-lz-purple transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-lz-white/5 border border-lz-border flex items-center justify-center text-lz-white hover:bg-lz-purple hover:border-lz-purple transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Separador y Copyright */}
        <div className="pt-8 border-t border-lz-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-lz-muted text-xs font-medium">
            © {currentYear} Luis Zambrano • Todos los derechos reservados.
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-lz-white text-xs font-bold uppercase tracking-widest hover:text-lz-orange transition-colors group"
          >
            Volver arriba 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <div className="flex gap-6 text-xs text-lz-muted">
            <span className="cursor-default">Desarrollado con React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;