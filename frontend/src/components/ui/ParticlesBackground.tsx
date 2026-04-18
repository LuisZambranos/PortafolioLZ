import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <>
      {/* 1. EL HALO MORADO (Efecto "glow" de fondo) */}
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_40%,rgba(76,29,149,0.15)_0%,#050508_70%)]"></div>
      
      {/* 2. LA RED DE PARTÍCULAS */}
      <Particles
        id="tsparticles"
        className="fixed inset-0 -z-10"
        options={{
          background: {
            color: { value: "transparent" },
          },
          particles: {
            number: {
              value: 60,
              density: { enable: true },
            },
            color: {
              value: ["#8A2BE2", "#FF6B00", "#ffffff"],
            },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: {
              value: { min: 1, max: 3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#8A2BE2", // Morado lz- para las líneas
              opacity: 0.3, // Aumentamos un poquito la opacidad para que resalte
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: { opacity: 0.8 }, // Brillo más fuerte al conectar con el mouse
              },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ParticlesBackground;