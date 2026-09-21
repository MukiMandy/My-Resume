import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Code, 
  Heart, 
  Sparkles, 
  Wrench, 
  CheckCircle,
  Cpu
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillsCategories } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

const tabList = [
  { id: 'hard', label: 'Hard Skills & UX Methods', icon: Layers },
  { id: 'tools', label: 'Design Tools & Software', icon: Wrench },
  { id: 'tech', label: 'Technical & Code', icon: Code },
  { id: 'soft', label: 'Soft Skills & Leadership', icon: Heart },
];

export const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState('hard');

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Expertise Matrix"
          title="Skills & Tooling Ecosystem"
          subtitle="A comprehensive toolkit combining rigorous user research, high-fidelity UI design, and technical engineering empathy."
        />

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabList.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-600/25 scale-105'
                    : 'bg-white border border-emerald-600/15 text-slate-700 hover:text-emerald-700 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Panel */}
        <div className="max-w-5xl mx-auto">
          
          {/* 1. Hard Skills Grid with Animated Meters */}
          {activeTab === 'hard' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skillsCategories.hardSkills.map((skill, idx) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => sounds.playHover()}
                  className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-forest-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Meter */}
                  <div className="w-full h-2.5 rounded-full bg-emerald-100 overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.04 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-green-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 2. Tools & Software Cards */}
          {activeTab === 'tools' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {skillsCategories.tools.map((tool) => (
                <div
                  key={tool.name}
                  onMouseEnter={() => sounds.playHover()}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {tool.proficiency}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 3. Technical & Code */}
          {activeTab === 'tech' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skillsCategories.technical.map((tech, idx) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => sounds.playHover()}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-forest-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-600" />
                      {tech.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-emerald-100 overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 4. Soft Skills Cards */}
          {activeTab === 'soft' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skillsCategories.softSkills.map((soft) => (
                <div
                  key={soft}
                  onMouseEnter={() => sounds.playHover()}
                  className="glass-card p-5 rounded-2xl flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                    {soft}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
