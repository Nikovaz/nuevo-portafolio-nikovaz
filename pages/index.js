import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Componentes
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import IA from '../components/IA';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Solo un breve retraso para la animación de carga
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      <div className="loader fixed inset-0 flex items-center justify-center bg-black z-50">
        <motion.div
          className="text-white text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          NICOVAZ
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={mainRef} className="bg-black text-white min-h-screen">
      <Head>
        <title>NICOVAZ | Desarrollador Fullstack y Especialista en IA</title>
        <meta name="description" content="NICOVAZ - Desarrollador fullstack especializado en el ecosistema MERN y experto en la implementación de agentes inteligentes para WhatsApp." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconectar con CDNs críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <IA />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}