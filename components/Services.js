import { motion } from 'framer-motion';

const Services = () => {
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.1, 0.9] }
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mis <span className="text-purple-400">Servicios</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tarjeta 1: Desarrollo Web */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-8 text-center"
            variants={itemVariants}
          >
            <div className="mb-6">
              <svg 
                className="w-16 h-16 mx-auto mb-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Desarrollo de Aplicaciones Web a Medida</h3>
            <p className="text-gray-400 mb-6">
              NICOVAZ crea plataformas web, e-commerce y sistemas internos desde cero utilizando tecnologías modernas (MERN) para garantizar rendimiento y escalabilidad.
            </p>
            <motion.a 
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Ver Proyectos Web
            </motion.a>
          </motion.div>

          {/* Tarjeta 2: Automatización con IA */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-8 text-center"
            variants={itemVariants}
          >
            <div className="mb-6">
              <svg 
                className="w-16 h-16 mx-auto mb-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Agentes de IA y Automatización para WhatsApp</h3>
            <p className="text-gray-400 mb-6">
              Implemento agentes inteligentes con IA para automatizar la atención al cliente, calificar leads y gestionar ventas 24/7, integrados directamente en tus canales de comunicación.
            </p>
            <motion.a 
              href="#ia"
              className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Descubrir Automatización
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
