import { motion } from 'framer-motion';

const IA = () => {
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
    <section id="ia" className="py-24 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-lg">
            ¿Cansado de perder clientes por no responder a tiempo?
          </h2>
          <h3 className="text-2xl md:text-3xl text-purple-400 mb-8">
            Automatiza tu atención con IA
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Implemento agentes inteligentes con IA para automatizar la atención al cliente, calificar leads y gestionar ventas 24/7, integrados directamente en tus canales de comunicación.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Beneficios */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-purple-900/80 rounded-xl p-8 text-center backdrop-blur-lg border border-purple-500/20"
            variants={itemVariants}
          >
            <h4 className="text-xl font-bold mb-4 text-white">¿Qué obtienes?</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Respuestas instantáneas 24/7
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Calificación automática de leads
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seguimiento de conversaciones
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Integración con WhatsApp Business
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Panel de control personalizado
              </li>
            </ul>
          </motion.div>

          {/* Tecnologías */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-purple-900/80 rounded-xl p-8 text-center backdrop-blur-lg border border-purple-500/20"
            variants={itemVariants}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Tecnologías que uso</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-full text-purple-300 border border-purple-500/30">n8n</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-full text-purple-300 border border-purple-500/30">Evolution API</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-full text-purple-300 border border-purple-500/30">Hostinger VPS</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-full text-purple-300 border border-purple-500/30">WhatsApp Business API</span>
            </div>
          </motion.div>

          {/* Para quién es */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-purple-900/80 rounded-xl p-8 text-center backdrop-blur-lg border border-purple-500/20"
            variants={itemVariants}
          >
            <h4 className="text-xl font-bold mb-4 text-white">¿Para quién es ideal?</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comercios en Once
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                PyMEs con alta demanda
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tiendas online
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Consultorios médicos
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Empresas de servicios
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <span className="mr-2">🚀</span>
            Solicitar una Asesoría Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IA;
