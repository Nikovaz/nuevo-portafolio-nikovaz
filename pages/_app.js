import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { initGSAP } from '../lib/gsap';
import { initErrorHandling } from '../lib/error-handler';
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Inicializar el manejo de errores
    if (typeof window !== 'undefined') {
      // Iniciar manejo de errores global
      initErrorHandling();
      
      // Inicializar GSAP de manera segura
      try {
        initGSAP();
        console.log('GSAP inicializado en _app.js');
      } catch (error) {
        console.error('Error al inicializar GSAP en _app.js:', error);
      }
    }
    
    // Evitar el comportamiento de desplazamiento predeterminado en cambios de ruta
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}

export default MyApp;