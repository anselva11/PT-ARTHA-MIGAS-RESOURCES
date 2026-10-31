import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, Compass, Layers, ShieldCheck } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import OperationModal from './OperationModal';

export default function Operations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inspectItem, setInspectItem] = useState(null);

  const categories = [
    'All',
    'Offshore Operations',
    'Onshore Operations',
    'Drilling Equipment',
    'Oilfield Operations',
    'Industrial Infrastructure'
  ];

  const filteredOperations = activeCategory === 'All'
    ? companyProfile.operations
    : companyProfile.operations.filter(op => op.category === activeCategory);

  return (
    <section id="operations" className="py-24 sm:py-32 bg-surface-light text-slate-800 relative overflow-hidden" aria-labelledby="operations-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="operations-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Engineering Excellence. Reliable Operations.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Delivering robust energy field services across challenging terrains and offshore marine environments with rigorous execution discipline.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-navy-900 text-gold-400 shadow-md border border-navy-800'
                  : 'bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Operations Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredOperations.map((operation, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={operation.id}
              className="group relative rounded-xl overflow-hidden bg-navy-900 shadow-xl border border-slate-200 hover:border-gold-500/60 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                <img
                  src={operation.image}
                  alt={operation.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Visual Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded bg-navy-900/90 text-gold-400 font-bold text-[10px] uppercase tracking-wider border border-gold-500/30 backdrop-blur-md">
                    {operation.category}
                  </span>
                </div>

                {/* Inspect Lightbox Button */}
                <button
                  type="button"
                  onClick={() => setInspectItem(operation)}
                  className="absolute bottom-4 right-4 z-10 p-2 rounded-full bg-navy-900/90 text-white hover:text-gold-400 border border-slate-700 backdrop-blur-md transition-colors opacity-90 group-hover:opacity-100 shadow"
                  aria-label={`Inspect ${operation.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-navy-900 text-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gold-400/90 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{operation.location}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2.5 group-hover:text-gold-300 transition-colors">
                    {operation.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {operation.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-navy-800 flex flex-wrap gap-1.5">
                  {operation.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-navy-850 text-slate-300 border border-navy-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Operational Assurance Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 italic">
            * Operational photography reflects typical industrial equipment, wellhead configurations, and marine drilling scopes supported by our technical services.
          </p>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <OperationModal
        operation={inspectItem}
        isOpen={!!inspectItem}
        onClose={() => setInspectItem(null)}
      />
    </section>
  );
}

