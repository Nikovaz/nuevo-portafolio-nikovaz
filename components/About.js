import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && sectionRef.current && textRef.current && imageRef.current) {
      // Animación con GSAP
      gsap.fromTo(
        textRef.current,
        { 
          x: -50, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out" 
        }
      );
      
      gsap.fromTo(
        imageRef.current,
        { 
          x: 50, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.3, 
          ease: "power3.out" 
        }
      );
    }
  }, [isInView]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sobre <span className="text-purple-400">Mí</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Desarrollador Fullstack apasionado por la tecnología
            </h3>
            <p className="text-gray-300">
              Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web modernas y responsivas. 
              Mi enfoque se centra en crear experiencias de usuario excepcionales utilizando las tecnologías más 
              recientes y prácticas de desarrollo eficientes.
            </p>
            <p className="text-gray-300">
              Con una sólida base en JavaScript y sus frameworks como React, Next.js y Node.js, 
              disfruto transformando ideas creativas en soluciones digitales funcionales y atractivas.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3 text-white">Mis habilidades incluyen:</h4>
              <div className="grid grid-cols-2 gap-2">
                <motion.div 
                  className="bg-gray-800 px-4 py-2 rounded-md text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  React / Next.js
                </motion.div>
                <motion.div 
                  className="bg-gray-800 px-4 py-2 rounded-md text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Node.js / Express
                </motion.div>
                <motion.div 
                  className="bg-gray-800 px-4 py-2 rounded-md text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  JavaScript / TypeScript
                </motion.div>
                <motion.div 
                  className="bg-gray-800 px-4 py-2 rounded-md text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Tailwind CSS / SASS
                </motion.div>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-purple-500 rounded-xl opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 p-5 rounded-xl shadow-2xl border border-purple-500/30">
              <img 
                src="/images/profile.jpg" 
                alt="Foto de perfil"
                className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-transform duration-300"
                onError={(e) => {
                  console.error('Error loading image');
                  e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_189077579c1%20text%20%7B%20fill%3A%23A855F7%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_189077579c1%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%231E293B%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22149.5%22%20y%3D%22209.1%22%3EFoto%20de%20Perfil%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                }}
              />
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-medium">Email</h4>
                    <p className="text-gray-300">nikovaz1515@gmail.com"</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-medium">Ubicación</h4>
                    <p className="text-gray-300">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;