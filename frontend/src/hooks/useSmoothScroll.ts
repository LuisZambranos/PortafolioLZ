export const useSmoothScroll = () => {
  // Subimos el offset a 160 para que el título quede bien arriba
  const scrollToSection = (targetId: string, offset: number = 1) => {
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};