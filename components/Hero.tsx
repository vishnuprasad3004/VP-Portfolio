import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

// Data simulating Data Processing Volume vs Model Accuracy
const data = [
  { month: 'Jan', processed: 320, accuracy: 65 },
  { month: 'Feb', processed: 450, accuracy: 72 },
  { month: 'Mar', processed: 400, accuracy: 76 },
  { month: 'Apr', processed: 600, accuracy: 82 },
  { month: 'May', processed: 550, accuracy: 88 },
  { month: 'Jun', processed: 750, accuracy: 94 },
  { month: 'Jul', processed: 900, accuracy: 98 },
];

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
            Professional Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            I am <span className="text-accent">Vishnu Prasad</span>
            <br />
            <span className="text-2xl md:text-4xl text-slate-300">Data Analyst & ML Engineer</span>
          </h1>
          <p className="text-textDim text-lg mb-8 leading-relaxed max-w-xl">
            Specializing in turning complex datasets into actionable business insights. 
            Expert in <strong>Machine Learning</strong>, <strong>Power BI</strong>, and <strong>Predictive Analytics</strong>. 
            I build robust data pipelines and intelligent models to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-accent hover:bg-accentDark text-primary font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-transparent border border-slate-600 hover:border-accent hover:text-accent text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Visual Element / Chart Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-secondary/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                   ML Model Performance Trends
                </h3>
                <p className="text-xs text-textDim mt-1 max-w-xs">
                  This chart visualizes the correlation between <strong>data volume (bars)</strong> and <strong>model accuracy (line)</strong> over time.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
            </div>
            
            <div className="h-[300px] w-full relative">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={data}>
                    <defs>
                      <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="left" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Data (TB)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10 }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} unit="%" label={{ value: 'Accuracy (%)', angle: 90, position: 'insideRight', fill: '#94a3b8', fontSize: 10 }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                      cursor={{ fill: '#334155', opacity: 0.2 }}
                      labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px' }}/>
                    <Bar yAxisId="left" dataKey="processed" name="Data Volume (TB)" fill="url(#colorBar)" barSize={24} radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="accuracy" name="Model Accuracy (%)" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-primary/50 p-3 rounded-lg text-center">
                <p className="text-xs text-textDim">Peak Acc</p>
                <p className="text-accent font-bold text-lg">98.5%</p>
              </div>
              <div className="bg-primary/50 p-3 rounded-lg text-center">
                <p className="text-xs text-textDim">Data Volume</p>
                <p className="text-white font-bold text-lg">3.9 PB</p>
              </div>
              <div className="bg-primary/50 p-3 rounded-lg text-center">
                <p className="text-xs text-textDim">Analysis</p>
                <p className="text-blue-400 font-bold text-lg">Trend +</p>
              </div>
            </div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-slate-800 border border-slate-600 p-4 rounded-lg shadow-xl"
          >
            <div className="flex items-center gap-3">
               <div className="bg-blue-500/20 p-2 rounded-lg">
                 <span className="text-2xl">📊</span>
               </div>
               <div>
                 <p className="text-xs text-textDim">Focus</p>
                 <p className="text-white font-bold">Data & AI</p>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;