import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Componentes
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Registrar ScrollTrigger con GSAP
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Animación de carga inicial
      const tl = gsap.timeline({
        onComplete: () => setLoading(false)
      });
      
      tl.to('.loader', {
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: 'power2.inOut'
      });

      // Efecto de parallax para las secciones
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );
      });
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
          NIKOVAZ
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={mainRef} className="bg-black text-white min-h-screen">
      <Head>
        <title>Nicolas Galarza Vazquez | Desarrollador Fullstack</title>
        <meta name="description" content="Portafolio profesional de Nicolas Galarza Vazquez, desarrollador fullstack apasionado por la creación de experiencias web únicas y funcionales." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
