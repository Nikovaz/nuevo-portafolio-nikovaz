import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef(null);
  const progressRefs = useRef([]);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Agregar referencia para cada barra de progreso
  const addToProgressRefs = (el) => {
    if (el && !progressRefs.current.includes(el)) {
      progressRefs.current.push(el);
    }
  };

  const skills = [
  { name: 'Frontend', progress: 95, color: 'from-purple-500 to-blue-500' },
  { name: 'Backend', progress: 85, color: 'from-pink-500 to-red-500' },
  { name: 'Bases de Datos', progress: 90, color: 'from-indigo-500 to-violet-500' },
  { name: 'Herramientas de Desarrollo', progress: 80, color: 'from-gray-500 to-slate-500' },
  { name: 'IA y Automatización', progress: 75, color: 'from-lime-500 to-green-500' },
  { name: 'Plataformas Cloud y APIs', progress: 70, color: 'from-cyan-500 to-blue-300' },
  // Podrías considerar eliminar o ajustar estas si no se basan en la carrera de Coderhouse:
  // { name: 'UI/UX Design', progress: 80, color: 'from-green-500 to-teal-500' },
  // { name: 'Mobile Development', progress: 75, color: 'from-yellow-500 to-orange-500' },
  // { name: 'DevOps', progress: 70, color: 'from-red-500 to-pink-500' },
];

const techCategories = [
  {
    name: 'Frontend',
    techs: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS']
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'Express', 'REST API', 'Socket.io', 'Strapi']
  },
  {
    name: 'Database',
    techs: ['MongoDB', 'Firebase', 'Mongoose', 'MongoAtlas', 'Supabase']
  },
  {
    name: 'Herramientas de Desarrollo',
    techs: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Webpack', 'Jest', 'GitHub Actions', 'Postman', 'Ngrok']
  },
  {
    name: 'IA y Automatización',
    techs: ['Gemini', 'n8n', 'Manychat']
  },
  {
    name: 'Plataformas Cloud y APIs',
    techs: ['Google Cloud', 'Firebase', 'Cloud con MCP']
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    if (isInView && progressRefs.current.length) {
      progressRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { width: 0 },
          {
            width: `${skills[index].progress}%`,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.2 + (index * 0.1)
          }
        );
      });
    }
  }, [isInView, skills]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis <span className="text-purple-400">Habilidades</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Barras de progreso */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Áreas de Experiencia
            </h3>
            
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-medium">{skill.progress}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    ref={addToProgressRefs}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech stack */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Stack Tecnológico
            </h3>
            
            {techCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-xl font-medium">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, i) => (
                    <motion.span
                      key={i}
                      variants={itemVariants}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-sm hover:border-purple-400 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;