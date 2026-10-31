import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose, onSelectServiceForContact }) {
  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-navy-900 border border-navy-700/80 rounded-xl shadow-2xl text-slate-200 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="bg-navy-950 px-6 py-5 border-b border-navy-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                {service.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {service.badge}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-navy-800 transition-colors"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 id="service-modal-title" className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Capabilities */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-3">
                Scope & Key Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-md bg-navy-850/80 border border-navy-700 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition Note */}
            <div className="p-4 rounded-lg bg-navy-950 border border-gold-500/30 text-xs text-slate-300">
              <span className="text-gold-400 font-semibold block mb-1">Industrial Commitment:</span>
              All service engagements are carried out under strict adherence to operational safety plans, API/SNI quality guidelines, and qualified Indonesian oilfield personnel.
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-navy-950 px-6 py-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Need technical specs or custom scope alignment?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectServiceForContact(service.title);
                  onClose();
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-md transition-colors"
              >
                <span>Inquire Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

