import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Eye
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';
import { sounds } from '../../utils/soundEffects';

const categories = ["All", "Mobile App", "Product Enhancement", "EdTech"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category.includes(selectedCategory) || (selectedCategory === "EdTech" && p.category.includes("EdTech")));

  const handleOpenCaseStudy = (project) => {
    sounds.playClick();
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Featured Portfolio"
          title="Case Studies & Design Projects"
          subtitle="Explore selected end-to-end product design case studies with proven user engagement and operational improvements."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md shadow-emerald-600/25'
                    : 'bg-white border border-emerald-600/15 text-slate-700 hover:text-emerald-700 hover:border-emerald-400 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => sounds.playHover()}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-emerald-600/15"
            >
              {/* Card Header & Preview Simulation */}
              <div className="p-6 pb-0">
                {/* Visual Header Mockup */}
                <div className={`w-full h-44 rounded-2xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-md`}>
                  {/* Overlay texture */}
                  <div className="absolute inset-0 bg-emerald-950/15 backdrop-blur-[1px]" />
                  
                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-forest-950 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-emerald-800 flex items-center gap-1 shadow-sm">
                      <TrendingUp className="w-3 h-3 text-emerald-600" />
                      {project.metric}
                    </span>
                  </div>

                  {/* Wireframe Mockup Visual inside card */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div className="space-y-1">
                      <div className="w-24 h-2 rounded bg-white/50" />
                      <div className="w-16 h-2 rounded bg-white/40" />
                    </div>
                    <button
                      onClick={() => handleOpenCaseStudy(project)}
                      className="p-2.5 rounded-xl bg-white/30 hover:bg-white text-white hover:text-emerald-800 transition-colors backdrop-blur-md shadow-sm"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 space-y-3">
                  <h3 className="text-xl font-bold font-display text-forest-950 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Tags & Case Study CTA */}
              <div className="p-6 pt-4 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenCaseStudy(project)}
                  className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-50 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 text-emerald-800 hover:text-white border border-emerald-200 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep Dive Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
