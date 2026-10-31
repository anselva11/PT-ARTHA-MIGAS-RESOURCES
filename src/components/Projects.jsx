import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Tag, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Offshore Support', 'Onshore Drilling', 'Oilfield Services', 'Industrial Procurement'];

  const filteredProjects = filter === 'All'
    ? companyProfile.projects
    : companyProfile.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-slate-800 relative overflow-hidden" aria-labelledby="projects-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-navy-100 text-navy-800 font-semibold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Projects & Experience
            </div>
            <h2 id="projects-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
              Demonstrated Industrial Capability & Energy Scope Execution
            </h2>
          </div>

          {/* Compliance Notice Badge */}
          <div className="p-3.5 rounded-lg bg-surface-light border border-slate-200 text-xs text-slate-600 max-w-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
            <span>
              <strong>Transparency Note:</strong> Representative scope case studies displayed illustrate technical capability frameworks in accordance with corporate disclosure policies.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded text-xs font-semibold tracking-wide transition-colors ${
                filter === cat
                  ? 'bg-navy-900 text-gold-400 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-navy-900/90 text-gold-400 border border-gold-500/30 backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>

                {/* Category & Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-gold-500 text-navy-950 px-2.5 py-0.5 rounded">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-navy-900/80 px-2.5 py-0.5 rounded backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Deliverables / Scope Pillars */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5">
                    Demonstrated Technical Scope
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-light border border-slate-200 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Collaboration Callout */}
        <div className="mt-16 p-8 rounded-xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-navy-800">
          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Ready to Discuss Tailored Campaign Solutions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect with our operations engineering desk to evaluate scope specifications, timeline requirements, and project execution frameworks.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 transition-colors shadow-md"
          >
            <span>Initiate Discussion</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

