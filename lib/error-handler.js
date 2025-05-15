// Este archivo proporciona funciones para manejo global de errores

/**
 * Inicializa el manejo global de errores en el navegador
 */
export const initErrorHandling = () => {
  if (typeof window !== 'undefined') {
    // Capturar errores de JavaScript no manejados
    window.onerror = function(message, source, lineno, colno, error) {
      console.error('Error no manejado:', { message, source, lineno, colno });
      return false; // Permite que el manejo de errores predeterminado también continúe
    };
    
    // Capturar errores de promesas no manejados
    window.addEventListener('unhandledrejection', function(event) {
      console.error('Promesa rechazada no manejada:', event.reason);
    });
    
    // Función auxiliar para recuperar GSAP si falla
    window.recoverGSAP = function() {
      try {
        const gsap = require('gsap');
        const ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP recuperado manualmente');
        
        return { gsap, ScrollTrigger };
      } catch (error) {
        console.error('Error al recuperar GSAP manualmente:', error);
        return null;
      }
    };
  }
};

/**
 * Intenta ejecutar una función con manejo de errores
 * @param {Function} fn La función a ejecutar
 * @param {any} fallback Valor a devolver si la función falla
 */
export const trySafely = (fn, fallback = null) => {
  try {
    return fn();
  } catch (error) {
    console.error('Error en función segura:', error);
    return fallback;
  }
};

export default {
  initErrorHandling,
  trySafely
};