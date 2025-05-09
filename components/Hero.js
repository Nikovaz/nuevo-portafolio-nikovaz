import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

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

  // Efecto de escritura para el título
  useEffect(() => {
    if (titleRef.current) {
      // Configuración para la animación de texto
      const title = titleRef.current;
      const text = title.innerText;
      title.innerText = '';
      
      // Crear spans para cada carácter
      [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'inline-block opacity-0';
        title.appendChild(span);
      });
      
      // Animar cada carácter
      gsap.to(title.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        delay: 0.5,
        ease: "power2.out",
      });
    }

    // Animación del scroll indicador
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        opacity: 0.7,
        repeat: -1,
        duration: 1.5,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0" />
      
      {/* Efecto de partículas o ruido */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 2000 1500\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'a\'%3E%3CfeTurbulence baseFrequency=\'.5\' numOctaves=\'2\' seed=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23a)\' opacity=\'.2\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover'
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
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
        >
          Nicolas Galarza Vazquez
        </h1>
        
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
