import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { 
  BarChart3, 
  Database, 
  Code2, 
  LayoutDashboard, 
  Cpu, 
  Globe,
  BrainCircuit
} from 'lucide-react';

// Explicit mapping of icon names string to React components
const ICON_MAP: Record<string, React.ElementType> = {
  'BarChart3': BarChart3,
  'Database': Database,
  'Code2': Code2,
  'LayoutDashboard': LayoutDashboard,
  'BrainCircuit': BrainCircuit,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textDim mt-4 max-w-2xl mx-auto">
            Leveraging cutting-edge tools for data analysis, machine learning models, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            // Get icon from map, default to Code2 if not found
            const IconComponent = ICON_MAP[category.icon] || Code2;

            return (
              <div 
                key={index} 
                className="bg-secondary border border-slate-800 p-6 rounded-xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                  <IconComponent size={24} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, sIndex) => (
                    <li key={sIndex} className="flex items-center text-textDim text-sm group-hover:text-slate-200 transition-colors">
                      <span className="w-1.5 h-1.5 bg-accent/50 group-hover:bg-accent rounded-full mr-2 transition-colors"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;