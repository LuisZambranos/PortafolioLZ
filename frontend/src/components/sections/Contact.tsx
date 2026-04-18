import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className="text-lz-bg w-8 h-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.63 1.436h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const whatsappNumber = "56958913461";
  const message = encodeURIComponent("Hola Luis, he visto tu portafolio y me gustaría hablar contigo sobre una oportunidad.");

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Respuesta rápida • +56 9 58913461",
      icon: <WhatsappIcon className="w-8 h-8 text-lz-bg" />,
      link: `https://wa.me/${whatsappNumber}?text=${message}`,
      color: "bg-lz-success",
      borderColor: "border-lz-success/30",
      glowColor: "bg-lz-success/20",
      textColor: "text-lz-success"
    },
    {
      title: "Email",
      description: "luidfzambranos@gmail.com",
      icon: <Mail className="w-8 h-8 text-lz-bg" />,
      link: "mailto:luidfzambranos@gmail.com",
      color: "bg-lz-purple",
      borderColor: "border-lz-purple/30",
      glowColor: "bg-lz-purple/20",
      textColor: "text-lz-purple"
    },
    {
      title: "LinkedIn",
      description: "Conectemos profesionalmente",
      icon: <LinkedinIcon className="w-8 h-8 text-lz-bg" />,
      link: "https://www.linkedin.com/in/luis-zambranos",
      color: "bg-lz-orange",
      borderColor: "border-lz-orange/30",
      glowColor: "bg-lz-orange/20",
      textColor: "text-lz-orange"
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 z-10" id="contacto">
      
      {/* Cabecera de Sección */}
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lz-purple font-mono text-sm tracking-widest mb-4 block uppercase"
        >
          — CONECTEMOS
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-['Space_Grotesk'] text-6xl md:text-8xl font-bold text-lz-white leading-none mb-2"
        >
          Hablemos
        </motion.h2>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lz-muted text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
      >
        Si estás buscando a un desarrollador Full Stack comprometido, responsable y con ganas de aportar valor a tu equipo, no dudes en contactarme por cualquiera de estos medios.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group block"
          >
            <div className={`absolute -inset-1 ${method.glowColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`}></div>
            
            <div className={`relative bg-lz-dark/60 backdrop-blur-xl border ${method.borderColor} p-8 rounded-3xl flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:bg-lz-dark/80`}>
              <div className="relative w-16 h-16 mb-6">
                <div className={`absolute inset-0 ${method.color} rounded-xl blur-lg opacity-40 animate-pulse`}></div>
                <div className={`relative ${method.color} p-4 rounded-xl flex items-center justify-center w-full h-full`}>
                  {method.icon}
                </div>
              </div>

              <div>
                <h4 className="font-['Space_Grotesk'] text-2xl font-bold text-lz-white mb-2">
                  {method.title}
                </h4>
                <p className={`${method.textColor} font-medium text-sm`}>
                  {method.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;