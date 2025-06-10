import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: "easeInOut" // Usando un valor predefinido válido
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut" // Usando un valor predefinido válido
      }
    }
  };
  
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" // Usando un valor predefinido válido
      }
    })
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <motion.nav 
        className="container mx-auto px-6 py-4 flex justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <Link href="/" legacyBehavior>
          <motion.a 
            className="text-2xl font-bold tracking-tighter"
            whileHover="hover"
            variants={imageVariants}
          >
            NICOVAZ
          </motion.a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={linkVariants}
            >
              <Link href={link.href} legacyBehavior>
                <a className="hover:text-purple-400 transition-colors duration-300">
                  {link.name}
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center text-center md:hidden z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  className="my-4"
                >
                  <Link href={link.href} legacyBehavior>
                    <a 
                      className="text-2xl font-medium hover:text-purple-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
