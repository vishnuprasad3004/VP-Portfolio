import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;