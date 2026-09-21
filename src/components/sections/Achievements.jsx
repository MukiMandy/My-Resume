import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Users
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { achievementsData } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

const iconMap = {
  award: Trophy,
  star: Star,
  users: Users
};

export const Achievements = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Honors & Impact"
          title="Recognitions & Milestones"
          subtitle="Acknowledged for innovative design thinking, enterprise excellence, and uplifting the next generation of designers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onMouseEnter={() => sounds.playHover()}
                className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden border border-emerald-600/15 hover:border-emerald-400"
              >
                {/* Glowing Corner Aura */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-emerald-400/20 via-green-300/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
                    {item.award}
                  </span>

                  <h3 className="text-lg font-bold font-display text-forest-950 group-hover:text-emerald-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
