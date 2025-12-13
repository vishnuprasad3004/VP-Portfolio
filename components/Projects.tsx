import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
             <div className="w-20 h-1 bg-accent rounded-full"></div>
             <p className="text-textDim mt-4">A selection of my recent work in Web Development, Data Analytics, and AI.</p>
           </div>
           <a href="https://github.com/vishnuprasad3004" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-colors mt-4 md:mt-0">
             View All on GitHub <Github size={18} />
           </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-secondary rounded-xl overflow-hidden border border-slate-800 flex flex-col h-full group"
            >
              {/* Card Header Gradient */}
              <div className="h-2 bg-gradient-to-r from-accent to-blue-500"></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-blue-400 bg-blue-400/10 rounded-full">
                    {project.category}
                  </div>
                  <Layers className="text-slate-600 group-hover:text-accent transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-accent mb-4 font-medium">{project.role}</p>
                
                <p className="text-textDim text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-accent transition-colors pt-4 border-t border-slate-800 w-full"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;