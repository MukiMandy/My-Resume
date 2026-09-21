import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Search, 
  Layers, 
  GraduationCap, 
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo, educationData } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

const designValues = [
  {
    icon: Search,
    title: "Empathy-First Research",
    description: "Uncovering latent user pain points through heuristic audits, user journey maps, and competitive SWOT analysis to guide purposeful interfaces.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Layers,
    title: "Scalable Design Systems",
    description: "Building consistent, reusable Figma component libraries and design tokens compliant with WCAG accessibility standards.",
    color: "from-green-600 to-teal-600",
  },
  {
    icon: Code2,
    title: "Engineering-Ready Handoff",
    description: "Bridging the gap between design and development with HTML/CSS fluency, clear documentation, and AI-assisted UI validation.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship & Growth",
    description: "Dedicated to mentoring aspiring designers—guiding 6+ talent from foundational wireframes to successful industry job placements.",
    color: "from-emerald-600 to-lime-600",
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="About Sri Mukesh"
          title="Bridging Empathy & Product Strategy"
          subtitle="A UX/UI Designer focused on turning complex workflows into intuitive, visually compelling human experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-4"
            >
              <h3 className="text-xl font-bold font-display text-forest-950 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Career Story & Philosophy
              </h3>
              
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {personalInfo.summary}
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium italic">
                "{personalInfo.quote}"
              </div>

              <div className="pt-2 border-t border-emerald-900/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="text-sm font-bold text-forest-900">{personalInfo.location}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Specialization</div>
                  <div className="text-sm font-bold text-emerald-800">B2B & Mobile UI/UX</div>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-4"
            >
              <h3 className="text-lg font-bold font-display text-forest-950 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                Education & Professional Foundations
              </h3>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div key={edu.degree} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {edu.institution} • <span className="text-emerald-700 font-semibold">{edu.period}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {edu.details}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 4 Core Design Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {designValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => sounds.playHover()}
                  className="glass-card p-6 rounded-3xl flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${val.color} p-[1px] mb-5 shadow-sm`}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold font-display text-forest-950 group-hover:text-emerald-700 transition-colors mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Applied in 35+ Wireframes</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
