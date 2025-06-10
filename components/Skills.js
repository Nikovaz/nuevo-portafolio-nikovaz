import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const techCategories = [
    {
      name: 'Frontend',
      techs: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' }
      ]
    },
    {
      name: 'Backend',
      techs: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
      ]
    },
    {
      name: 'Database',
      techs: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'MongoAtlas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' }
      ]
    },
    {
      name: 'Herramientas de Desarrollo',
      techs: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg' }
      ]
    },
    {
      name: 'IA y Automatización',
      techs: [
        { name: 'Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
        { name: 'n8n', icon: '/images/n8n copy.png' },
        { name: 'Manychat', icon: '/images/WHATSAAP.png' },
        { name: 'Claude', icon: '/images/META copy.png' }
      ]
    },
    {
      name: 'Plataformas Cloud y APIs',
      techs: [
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Meta API', icon: '/images/META copy.png' },
        { name: 'WhatsApp API', icon: '/images/WHATSAAP.png' },
        { name: 'Google Sheets API', icon: '/images/sheet.png' },
        { name: 'Google Drive API', icon: '/images/google drive.png' },
        { name: 'Gmail API', icon: '/images/gmail.png' },
        { name: 'Hostinger VPS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hostinger/hostinger-original.svg' },
        { name: 'WhatsApp Business API', icon: '/images/WHATSAAP.png' }
      ]
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
        
        <div className="grid grid-cols-1 gap-16">
          {/* Tech stack */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-8"
          >
            {techCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                  {category.name}
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {category.techs.map((tech, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-12 h-12 mb-2"
                      />
                      <span className="text-sm text-gray-400">{tech.name}</span>
                    </motion.div>
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