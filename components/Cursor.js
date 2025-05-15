import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  // Implementación segura del cursor personalizado
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  
  // Si estamos en un dispositivo móvil, no mostramos el cursor personalizado
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Verificar si estamos en el cliente y si es un dispositivo móvil
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      // Comprobar inicialmente
      checkMobile();
      
      // Actualizar en cambios de tamaño
      window.addEventListener('resize', checkMobile);
      
      // Si no es móvil, agregamos los listeners del cursor
      if (!isMobile) {
        const updatePosition = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
          setVisible(true);
        };
        
        const hideOnLeave = () => {
          setVisible(false);
        };
        
        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseenter', updatePosition);
        window.addEventListener('mouseleave', hideOnLeave);
        
        return () => {
          window.removeEventListener('mousemove', updatePosition);
          window.removeEventListener('mouseenter', updatePosition);
          window.removeEventListener('mouseleave', hideOnLeave);
          window.removeEventListener('resize', checkMobile);
        };
      }
      
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, [isMobile]);
  
  // Si es móvil o no estamos en el cliente, no mostramos nada
  if (isMobile || typeof window === 'undefined') {
    return null;
  }
  
  return (
    <motion.div
      className="hidden md:block pointer-events-none fixed top-0 left-0 z-50 w-5 h-5 rounded-full bg-purple-500 mix-blend-difference"
      style={{
        x: position.x - 10,
        y: position.y - 10
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default Cursor;