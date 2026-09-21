import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    sounds.playClick();
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="4+ years of designing enterprise B2B delivery platforms, telecom portals, and enterprise tools at scale."
        />

        <div className="relative border-l-2 border-emerald-300 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((exp, idx) => {
            return (
              <motion.div
                key={exp.project}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:border-green-500 group-hover:scale-125 transition-all duration-300 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 m-auto mt-0.5" />
                </div>

                {/* Experience Card */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  onMouseEnter={() => sounds.playHover()}
                  className="glass-card p-6 sm:p-8 rounded-3xl cursor-pointer border border-emerald-600/15 hover:border-emerald-500/40 transition-all"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                          {exp.company}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-forest-950">
                        {exp.project}
                      </h3>
                      <div className="text-sm font-bold text-emerald-700">
                        {exp.role}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5 font-mono font-medium">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 pt-2">
                    {exp.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-4 border-t border-emerald-900/10 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 mr-2">Key Focus:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
