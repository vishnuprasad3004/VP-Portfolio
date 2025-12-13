import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                   <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 group-hover:border-blue-500 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                     <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   </div>
                   
                   <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-secondary p-6 rounded-xl border border-slate-800 shadow-sm">
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                     </div>
                     <time className="block mb-2 text-xs font-medium uppercase text-blue-400 flex items-center gap-1">
                       <Calendar size={12} /> {edu.year}
                     </time>
                     <p className="text-slate-300 text-sm font-medium mb-2">{edu.institution}</p>
                     {edu.description && <p className="text-slate-500 text-sm">{edu.description}</p>}
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Award className="text-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-secondary p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{cert.name}</h4>
                    <p className="text-sm text-textDim">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
              <h3 className="text-white font-bold mb-2">Continuous Learning</h3>
              <p className="text-textDim text-sm">
                Constantly expanding my skillset through platforms like Udemy, IBM, and Simplilearn. 
                Focusing on latest AI trends and Data Engineering pipelines.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
