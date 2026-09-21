import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

export const StatsCounter = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => sounds.playHover()}
              className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Ambient Green Hover Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-300/10 rounded-full blur-2xl group-hover:bg-emerald-400/25 transition-all" />

              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-5xl font-extrabold font-display text-gradient-green tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 font-mono">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-forest-950 mb-1">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
