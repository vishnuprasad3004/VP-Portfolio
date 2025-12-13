import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-xl border-b border-slate-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Modern Abstract Logo Shape */}
              <div className="absolute inset-0 bg-accent rounded-tr-lg rounded-bl-lg transform rotate-0 transition-transform duration-300 group-hover:rotate-180 opacity-20"></div>
              <div className="absolute inset-0 bg-accent/10 border border-accent rounded-tr-lg rounded-bl-lg"></div>
              <span className="relative font-black text-accent text-xl tracking-tighter z-10">VP</span>
            </div>
            
            <div className="hidden sm:flex flex-col justify-center">
                <span className="text-white font-bold text-lg leading-none tracking-wide group-hover:text-accent transition-colors duration-300">
                    VISHNU
                </span>
                <span className="text-textDim text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300">
                    PRASAD J
                </span>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm font-medium text-textDim hover:text-white transition-colors duration-300 py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Contact Button */}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 bg-accent hover:bg-accentDark text-primary font-bold text-sm rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 ml-6 border-l border-slate-800 pl-6 z-50">
            <a 
              href="https://github.com/vishnuprasad3004" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 text-textDim hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            {/* Mail Button Redirects to Contact Section */}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="p-2 text-textDim hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
              title="Contact Me"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textDim hover:text-white p-3 focus:outline-none rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-textDim hover:text-white hover:bg-slate-700/50 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-primary bg-accent hover:bg-accentDark block px-4 py-3 rounded-lg text-base font-bold transition-colors shadow-lg shadow-accent/10 mt-4 text-center"
                >
                  Contact Me
              </a>
              
              <div className="flex gap-6 mt-8 px-4 border-t border-slate-700 pt-6 justify-center">
                <a href="https://github.com/vishnuprasad3004" className="text-textDim hover:text-accent p-2">
                  <Github size={24} />
                </a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-textDim hover:text-accent p-2">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;