import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  
  // Variantes para las animaciones de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.1, 0.9] }
    }
  };

  // Animación del indicador de desplazamiento
  useEffect(() => {
    // Garantizar que el código se ejecute solo en el cliente
    if (typeof window === 'undefined') return;
    
    const scrollIndicator = scrollIndicatorRef.current;
    if (!scrollIndicator) return;

    // Usar requestAnimationFrame para una animación suave
    let animationFrameId;
    let startTime;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Movimiento sinusoidal suave
      const yPos = Math.sin(elapsed / 500) * 5;
      const opacity = 0.7 - Math.abs(yPos) / 20;
      
      if (scrollIndicator) {
        scrollIndicator.style.transform = `translate(-50%, ${yPos}px)`;
        scrollIndicator.style.opacity = opacity;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Limpiar animación al desmontar
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0" />
      
      {/* Efecto de partículas o ruido simplificado */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundColor: '#000',
        backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <motion.div 
        className="container mx-auto px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="text-purple-400 mb-4 tracking-widest"
          variants={childVariants}
        >
          DESARROLLADOR FULLSTACK
        </motion.p>
        
        <motion.h1 
          ref={titleRef}
          className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
          variants={childVariants}
        >
          Nicolas Galarza Vazquez
        </motion.h1>
        
        <motion.p 
          ref={descriptionRef}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
          variants={childVariants}
        >
          Creando experiencias digitales impactantes y funcionales con las últimas tecnologías web.
        </motion.p>
        
        <motion.div
          variants={childVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-purple-600 overflow-hidden rounded-full transition-all duration-300 ease-in-out hover:bg-purple-700"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </a>
          
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-transparent border border-white/30 overflow-hidden rounded-full transition-all duration-300 ease-in-out hover:border-white/70"
          >
            <span className="relative z-10">Contacto</span>
            <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path 
            d="M12 5L12 19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;