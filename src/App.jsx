import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/layout/CustomCursor';
import { InteractiveBackground } from './components/common/InteractiveBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StatsCounter } from './components/sections/StatsCounter';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { SkillsMatrix } from './components/sections/SkillsMatrix';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#F8FAF6] text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-800 overflow-x-hidden font-sans">
        {/* Interactive Precision Cursor */}
        <CustomCursor />

        {/* Ambient Animated Botanical Light & Particles */}
        <InteractiveBackground />

        {/* Fixed Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 space-y-8">
          <Hero />
          <StatsCounter />
          <About />
          <Projects />
          <Experience />
          <SkillsMatrix />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
