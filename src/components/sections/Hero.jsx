import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Check, 
  ShieldCheck, 
  Users,
  ExternalLink,
  Target,
  Rocket
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Headlines & Action CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Status Badge from Reference Theme */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-semibold text-emerald-900 shadow-sm mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="font-medium text-emerald-800">Grateful for the journey 💚 • Open for UX/UI Roles</span>
          </motion.div>

          {/* Name & Dynamic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2 mb-4"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-700 font-mono">
              Hi, I am
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-forest-950 leading-[1.08]">
              {personalInfo.name}
            </h1>
            
            <div className="h-12 sm:h-14 flex items-center overflow-hidden">
              <motion.span
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-gradient-green"
              >
                {personalInfo.roles[roleIndex]}
              </motion.span>
            </div>
          </motion.div>

          {/* Summary / Mission */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-700 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
          >
            Crafting user-centric, high-impact digital products across web, mobile, and enterprise dashboards with 
            <strong className="text-emerald-700 font-bold"> 4+ years of industry experience</strong>. From deep user research to pixel-perfect design systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            {/* View Projects */}
            <a
              href="#projects"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:to-green-700 shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center gap-2.5 group transform hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Copy Email Quick Action */}
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => sounds.playHover()}
              className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-white border border-emerald-600/20 text-forest-900 hover:text-emerald-700 hover:border-emerald-500 shadow-sm flex items-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Direct Contact Anchor */}
            <a
              href="#contact"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-50/80 border border-emerald-200 text-forest-800 hover:bg-emerald-100 hover:text-emerald-900 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Social Links & Location Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-xs text-slate-600"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              {personalInfo.location}
            </span>
            <span className="text-slate-300">•</span>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => sounds.playHover()}
              className="hover:text-emerald-700 font-semibold transition-colors flex items-center gap-1"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300">•</span>
            <a 
              href="https://www.behance.net" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => sounds.playHover()}
              className="hover:text-emerald-700 font-semibold transition-colors flex items-center gap-1"
            >
              Behance <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

        </div>

        {/* Right Column: Hero Portrait filling layout cleanly without bg text */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          
          {/* Main Visual Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg aspect-[3/4] sm:aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-2 border-emerald-300/80 bg-emerald-50 group"
          >
            {/* Full-bleed clean professional portrait */}
            <img
              src="/assets/sri-mukesh-portrait.jpg"
              alt="Sri Mukesh B - UX/UI Designer"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out select-none"
            />

            {/* Subtle bottom fade and vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-black/5 pointer-events-none" />

            {/* Floating Badge 1: 10K Followers & Connections (Top Right) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-5 right-5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300 shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-forest-950 font-display flex items-center gap-1">
                  <span>10K+</span>
                  <span className="text-[10px] text-emerald-600 font-bold">Community</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Followers & Connections</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Consistency is key (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-6 left-5 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300 shadow-xl flex items-center gap-2.5 z-20 max-w-[260px]"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-forest-950 leading-tight">
                  Consistency is Key 🌿
                </div>
                <div className="text-[10px] text-emerald-800 font-medium italic mt-0.5">
                  "Deivathal aagatheninum..."
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 3: TCS Experience (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-5 left-5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-lg flex items-center gap-2 z-20"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <div className="text-[11px] font-bold text-forest-900">
                TCS Enterprise UX
              </div>
            </motion.div>

            {/* Floating Pill: Let's grow Together (Bottom Right) */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 right-5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white text-xs font-bold shadow-xl flex items-center gap-1.5 z-20"
            >
              <Rocket className="w-4 h-4" />
              <span>Let's grow Together!</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
