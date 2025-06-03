import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const projects = [
    {
      id: 1,
      title: 'Freelance: Pagina web "Corte caninos a domicilio" ',
      description: 'Sitio web de Corte Canino Martino - Servicio de peluquería canina profesional con servicio a domicilio. Desarrollado con React y diseño moderno y responsive.',
      image: '../images/CorteCanino.png',
      tags: ['HTML', 'CSS'],
      url: 'https://nikovaz.github.io/PeluqueriaCaninaMartino/',
      github: 'https://github.com/Nikovaz/PeluqueriaCaninaMartino.git'
    },
    {
      id: 2,
      title: 'Reparacion de celulares',
      description: 'Matias Cell Repair Este proyecto es un sitio web para un servicio técnico de reparación de celulares.',
      image: '../images/serviceCelularLogo.png',
      tags: ['HTML, CSS, JavaScript, Batchfile'],
      url: 'https://tienda-matias-vazquez-ju7m.vercel.app/',
      github: 'https://github.com/Nikovaz/TiendaPibeMV.git'
    },
    {
      id: 3,
      title: 'Logistica Chamon',
      description: 'Sitio Web de Mensajería Este es el código fuente del sitio web para Chamon, un servicio de mensajería especializado en envíos para vendedores de Mercado Libre Flex en CABA y AMBA (Argentina).',
      image: '../images/logoChamon.png',
      tags: ['React Native', 'Firebase', 'Redux', 'Express'],
      url: 'https://nikovaz.github.io/chamon/',
      github: 'https://github.com/Nikovaz/chamon.git'
    },
    {
      id: 4,
      title: 'Portafolio Andrea Delgado',
      description: '',
      image: '../images/andrea.png',
      tags: ['CSS, HTML, JavaScript'],
      url: 'https://nikovaz.github.io/portafolioAndreaDelgado/',
      github: 'https://github.com/Nikovaz/portafolioAndreaDelgado'
    },
    {
      id: 5,
      title: 'Proyecto Final Backend 2',
      description: 'Este proyecto es una aplicación de ecommerce que incluye un sistema de gestión de usuarios con autenticación y autorización. Permite a los usuarios registrarse, iniciar sesión y realizar operaciones CRUD sobre su información.',
      image: '../images/Backend2.png',
      tags: ['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'],
      url: 'https://nikovaz.github.io/PreentregaBackend2.NicolasGV/',
      github: 'https://github.com/Nikovaz/PreentregaBackend2.NicolasGV.git'
    }, 
    {
      id: 6,
      title: 'Proyecto Final Backend 1',
      description: 'Este proyecto es una aplicación de backend desarrollada como parte del curso de Backend en CODER. La aplicación permite gestionar productos y carritos de compras, incluyendo funcionalidades para agregar, actualizar, eliminar y visualizar productos y carritos. Además, se implementa una funcionalidad en tiempo real utilizando Socket.IO.',
      image: '../images/Backend1.png',
      tags: ['JavaScript'],
      github: 'https://github.com/Nikovaz/entregaFinalBackend1.NicolasGalarzaVazquez.git'
    },
    {
      id: 7,
      title: 'Proyecto Final React',
      description: 'Bienvenido a nuestro proyecto de e-commerce dedicado a la venta de boxers y medias de alta calidad. Este proyecto está diseñado para proporcionar una experiencia de compra sencilla y agradable, tanto para los usuarios finales como para los administradores.',
      image: '../images/React.png',
      tags: ['CSS, HTML, JavaScript'],
      url: 'https://proyectofinal-react-galarza-vazquez-1lrx-ptn1mr00t.vercel.app/',
      github: 'https://github.com/Nikovaz/Proyectofinal.react.GalarzaVazquez.git'
    },
    {
      id: 8,
      title: 'Proyecto Final JavaScript',
      description: 'Primer proyecto de CoderHouse en el curso de JavaScript',
      image: '../images/JS.png',
      tags: ['CSS, HTML, JavaScript'],
      github: 'https://github.com/Nikovaz/ProyentoFinal.JS.Galarza.vazquez.git'
    },
    {
      id: 9,
      title: 'Proyecto Final Coderhouse Desarrollo Web ',
      description: 'Primer proyecto de CoderHouse en el curso de Desarrollo Web',
      image: '../images/gardel.png',
      tags: ['HTML, SCSS'],
      url: 'https://pre-entrega3-galarza-vazquez.vercel.app/',
      github: 'https://github.com/Nikovaz/PF.GalarzaVazquez.git'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.1, 0.9]
      }
    }
  };
  
  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis <span className="text-purple-400">Proyectos</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-purple-900 bg-opacity-30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-3">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105"
                    >
                      Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white border border-white px-4 py-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-gray-700 text-purple-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="#contact" legacyBehavior>
            <a className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-purple-700 transform hover:-translate-y-1">
              ¿Tienes un proyecto en mente? Contáctame
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;