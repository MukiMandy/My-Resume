import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

export const Footer = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/10 relative z-10 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-base text-emerald-800">
              {personalInfo.name}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-semibold text-emerald-700">UX/UI Designer</span>
          </div>
          <p className="text-xs text-slate-500 text-center md:text-left max-w-sm">
            Grateful for the journey 💚 • Designed with user empathy, Figma systems, and modern motion.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sounds.playHover()}
          className="px-4 py-2.5 rounded-2xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-500 transition-all flex items-center gap-2 text-xs font-bold shadow-sm"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 text-emerald-600" />
        </button>

      </div>
    </footer>
  );
};
