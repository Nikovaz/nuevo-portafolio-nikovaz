// lib/gsap.js
let gsap;
let ScrollTrigger;

// Función segura para inicializar GSAP y sus plugins
export const initGSAP = () => {
  if (typeof window !== 'undefined') {
    try {
      // Importación dinámica para evitar problemas SSR
      if (!gsap) {
        gsap = require('gsap');
      }
      
      if (!ScrollTrigger) {
        ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;
        
        // Registrar plugins
        if (gsap.registerPlugin) {
          gsap.registerPlugin(ScrollTrigger);
          
          // Configuración global para GSAP
          gsap.config({
            nullTargetWarn: false, // Deshabilitar advertencias de objetivos nulos
          });
          
          console.log('GSAP y ScrollTrigger inicializados correctamente');
        } else {
          console.error('Error: gsap.registerPlugin no está disponible');
        }
      }
    } catch (error) {
      console.error('Error al inicializar GSAP:', error);
    }
  }
};

// Exportamos una versión segura de gsap y ScrollTrigger
export const getGSAP = () => {
  if (typeof window !== 'undefined') {
    return gsap || require('gsap');
  }
  return null;
};

export const getScrollTrigger = () => {
  if (typeof window !== 'undefined') {
    return ScrollTrigger || require('gsap/dist/ScrollTrigger').ScrollTrigger;
  }
  return null;
};