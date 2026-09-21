import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Target, 
  Search, 
  Lightbulb, 
  TrendingUp, 
  Sparkles
} from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

export const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-forest-950/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="absolute top-6 right-6 p-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-slate-500 hover:text-forest-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10 mb-6 border-b border-emerald-900/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-forest-950">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics Highlight Pill */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 flex items-center justify-between mb-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Validated Key Result</div>
                <div className="text-base sm:text-lg font-extrabold text-emerald-800">{project.metric}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {project.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white text-emerald-800 border border-emerald-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 4 Step UX Deep Dive */}
          <div className="space-y-6">
            
            {/* 1. Problem */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-rose-700">
                <Target className="w-4 h-4" />
                <span>01. The Problem Space</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* 2. Research & Insights */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-700">
                <Search className="w-4 h-4" />
                <span>02. User Research & Insights</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudy.research}
              </p>
            </div>

            {/* 3. Solution */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                <Lightbulb className="w-4 h-4" />
                <span>03. UX Solution & Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* 4. Measurable Impact */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-green-700">
                <TrendingUp className="w-4 h-4" />
                <span>04. Impact & Evaluation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudy.impact}
              </p>
            </div>

          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-emerald-900/10 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Designed with Figma & User-Centered Research</span>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
