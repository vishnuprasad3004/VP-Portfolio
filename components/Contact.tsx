import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate network request
    setTimeout(() => {
      setFormState('sent');
      // Reset after a delay
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('njvishnun@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-primary border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textDim mt-4">
            Open for opportunities in Data Analysis and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-secondary rounded-2xl p-8 border border-slate-800 h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                    <Mail size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-textDim mb-1">Email Me</p>
                      <div className="flex items-center gap-3">
                        <a href="mailto:njvishnun@gmail.com" className="text-white hover:text-accent transition-colors font-medium">
                            njvishnun@gmail.com
                        </a>
                        <button 
                          onClick={handleCopyEmail}
                          className="text-textDim hover:text-white transition-colors relative group"
                          title="Copy Email"
                        >
                          {copied ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                          <span className="absolute left-full ml-2 px-2 py-1 bg-slate-700 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {copied ? 'Copied!' : 'Copy'}
                          </span>
                        </button>
                      </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                    <Phone size={20} />
                    </div>
                    <div>
                    <p className="text-sm text-textDim mb-1">Call Me</p>
                    <p className="text-white font-medium">+91 70102 59813</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                    <MapPin size={20} />
                    </div>
                    <div>
                    <p className="text-sm text-textDim mb-1">Location</p>
                    <p className="text-white font-medium">3, First Street, Nehru Nagar, Coimbatore</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <h4 className="text-white font-medium mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/vishnuprasad3004" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-textDim hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-textDim hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-secondary/30 p-8 rounded-2xl border border-slate-800" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-textDim font-medium">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-textDim font-medium">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-textDim font-medium">Subject</label>
              <input 
                type="text" 
                id="subject"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Job Opportunity"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-textDim font-medium">Message</label>
              <textarea 
                id="message"
                rows={4}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Hello VP, I have a project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formState !== 'idle'}
              className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                  formState === 'sent' 
                  ? 'bg-green-500 text-white cursor-default' 
                  : 'bg-accent hover:bg-accentDark text-primary'
              }`}
            >
              <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          Send Message <Send size={20} />
                      </motion.span>
                  )}
                  {formState === 'sending' && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          Sending...
                      </motion.span>
                  )}
                  {formState === 'sent' && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          Message Sent <CheckCircle size={20} />
                      </motion.span>
                  )}
              </AnimatePresence>
            </button>
          </form>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-sm text-textDim">
          <p>© {new Date().getFullYear()} Vishnu Prasad J. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Designed by VP</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;