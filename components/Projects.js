import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Plataforma de administración para tiendas online con análisis de datos, gestión de inventario y reportes personalizados.',
      image: '',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      url: '#',
      github: 'https://github.com'
    },
    {
      id: 2,
      title: 'App de Productividad',
      description: 'Aplicación para gestión de tareas, notas y seguimiento de hábitos con sincronización en la nube y recordatorios.',
      image: '',
      tags: ['React Native', 'Firebase', 'Redux', 'Express'],
      url: '#',
      github: 'https://github.com'
    },
    {
      id: 3,
      title: 'Portal de Noticias',
      description: 'Sitio web de noticias en tiempo real con filtrado por categorías, sistema de comentarios y panel de administración.',
      image: '',
      tags: ['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'],
      url: '#',
      github: 'https://github.com'
    },
    {
      id: 4,
      title: 'App de Fitness',
      description: 'Aplicación para seguimiento de entrenamientos, nutrición y progreso físico con gráficos personalizados.',
      image: '',
      tags: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
      url: '#',
      github: 'https://github.com'
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