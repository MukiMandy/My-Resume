import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  X,
  FileCheck2
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { certificationsData } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

export const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Specializations"
          subtitle="Continuous learning credentials across UX research, enterprise testing, and industry-grade tool workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => sounds.playHover()}
              className="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group border border-emerald-600/15 hover:border-emerald-500/40"
            >
              <div>
                {/* Top Badge & Verified status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified
                  </span>
                </div>

                <div className="text-[11px] font-mono text-emerald-700 font-bold mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display text-forest-950 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {cert.badge}
                </span>

                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveCert(cert);
                  }}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                sounds.playClick();
                setActiveCert(null);
              }}
              className="fixed inset-0 bg-forest-950/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-white border border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
            >
              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveCert(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-emerald-50 text-slate-500 hover:text-forest-900"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-emerald-700 font-bold">{activeCert.issuer}</div>
                  <h4 className="text-lg font-bold text-forest-950">{activeCert.title}</h4>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                <p>{activeCert.description}</p>
                <div className="pt-2 flex items-center gap-2 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Credential successfully validated in Sri Mukesh's official portfolio.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveCert(null);
                }}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
