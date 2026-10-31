import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Layers, CheckCircle2 } from 'lucide-react';

export default function OperationModal({ operation, isOpen, onClose }) {
  if (!isOpen || !operation) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="operation-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-navy-900 border border-navy-700 rounded-xl overflow-hidden shadow-2xl text-white"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-navy-950/80 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-sm transition-colors"
            aria-label="Close image inspection"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Large Image Preview */}
          <div className="relative aspect-video w-full bg-navy-950 overflow-hidden">
            <img
              src={operation.image}
              alt={operation.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider mb-2">
                {operation.category}
              </span>
              <h3 id="operation-modal-title" className="font-display text-2xl font-extrabold text-white">
                {operation.title}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
              <MapPin className="w-4 h-4" />
              <span>Location Context: {operation.location}</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {operation.description}
            </p>

            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Operational Highlights & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {operation.specs.map((spec, i) => (
                  <div key={i} className="p-3 rounded-lg bg-navy-850 border border-navy-700/80 text-xs flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-navy-950 px-6 py-3 border-t border-navy-800 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 rounded transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

