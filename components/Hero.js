import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  // Animación del indicador de desplazamiento
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const scrollIndicator = scrollIndicatorRef.current;
    if (!scrollIndicator) return;

    let animationFrameId;
    let startTime;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const yPos = Math.sin(elapsed / 500) * 5;
      const opacity = 0.7 - Math.abs(yPos) / 20;
      
      if (scrollIndicator) {
        scrollIndicator.style.transform = `translate(-50%, ${yPos}px)`;
        scrollIndicator.style.opacity = opacity;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Fondo tecnológico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("/circuit-pattern.svg")',
          backgroundSize: '200px 200px'
        }} />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <motion.div 
        className="container mx-auto px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Imagen de perfil con efecto de rebote */}
        <motion.div 
          className="relative mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="relative w-40 h-40 mx-auto"
            whileHover="hover"
            variants={imageVariants}
          >
           
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-purple-400 mb-4 tracking-widest"
          variants={childVariants}
        >
          DESARROLLADOR FULL-STACK Y ESPECIALISTA EN IA
        </motion.p>
        
        <motion.h1 
          ref={titleRef}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          variants={childVariants}
        >
          Soluciones Web y Automatización con IA para Potenciar tu Negocio
        </motion.h1>

        <motion.p 
          ref={descriptionRef}
          className="text-xl md:text-2xl mb-12 text-gray-400"
          variants={childVariants}
        >
          NICOVAZ - Desarrollador Full-Stack especializado en el ecosistema MERN y experto en la implementación de agentes inteligentes para WhatsApp
        </motion.p>

        <div className="flex justify-center gap-8 mb-24">
          <motion.a 
            href="#projects"
            className="px-8 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={childVariants}
          >
            Ver Proyectos
          </motion.a>
          <motion.a 
            href="#contact"
            className="px-8 py-4 border-2 border-purple-500 text-white rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            variants={childVariants}
          >
            Contactarme
          </motion.a>
        </div>

        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          ref={scrollIndicatorRef}
          variants={childVariants}
        >
          <span className="text-purple-400">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;