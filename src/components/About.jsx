import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Leaf, ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  const iconMap = {
    ShieldCheck: ShieldCheck,
    HeartHandshake: HeartHandshake,
    Leaf: Leaf,
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-slate-800 relative overflow-hidden" aria-labelledby="about-title">
      {/* Subtle decorative geometric background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-light/60 -skew-x-12 transform origin-top-right pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-navy-100 text-navy-800 font-semibold text-xs tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Who We Are
          </div>
          <h2 id="about-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Committed to Powering Indonesia's Energy Sector.
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Drilling Photograph & Visual Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Gold Border Frame */}
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-tr from-gold-500/30 to-navy-800/20 transform rotate-1 blur-[1px]" />
              
              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-navy-900">
                <img
                  src="https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial Oilfield Extraction Rig and Pump Jack at Sunset"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Visual Vignette & Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-md bg-navy-900/90 backdrop-blur-md border border-navy-700 text-white shadow-lg">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    Drilling Operational Standards
                  </div>
                  <p className="text-xs text-slate-300">
                    Precision engineering and rigorous safety standards for Indonesian energy frontiers.
                  </p>
                </div>
              </div>

              {/* Decorative Floating Stat/Badge */}
              <div className="absolute -bottom-5 -right-5 sm:bottom-6 sm:-right-8 bg-gold-500 text-navy-950 px-5 py-4 rounded-md shadow-xl border border-gold-400 font-display">
                <div className="text-xs font-bold tracking-wider uppercase text-navy-950/80">Core Mission</div>
                <div className="text-base sm:text-lg font-black leading-tight">Energy Reliability & Safety</div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Introduction & 3 Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal mb-8 border-l-4 border-gold-500 pl-5">
              {companyProfile.aboutText}
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-10">
              In an industry that powers nations, precision and reliability are paramount. PT Artha Migas Resources approaches every operational engagement with disciplined execution, modern engineering knowledge, and an absolute dedication to safeguarding personnel, assets, and the natural environment. We position ourselves as a dependable domestic partner capable of meeting modern upstream challenges.
            </p>

            {/* Three Company Values */}
            <div className="space-y-5 mb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-navy-850">
                Our Guiding Principles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {companyProfile.values.map((val) => {
                  const Icon = iconMap[val.icon] || ShieldCheck;
                  return (
                    <div
                      key={val.id}
                      className="p-5 rounded-lg bg-surface-light border border-slate-200/90 hover:border-gold-500/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-md bg-navy-900 text-gold-400 flex items-center justify-center mb-3.5 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-navy-900 text-base mb-1 group-hover:text-navy-800">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Discover Our Company Button */}
            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 transition-all duration-200 shadow-md group"
              >
                <span>Discover Our Company</span>
                <ChevronRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Our Company Modal / Overview Dialog */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-about-title"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
            {/* Modal Header */}
            <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                <h3 id="modal-about-title" className="font-display text-lg font-bold text-white tracking-wide">
                  About PT Artha Migas Resources
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div>
                <h4 className="text-xs uppercase font-bold text-navy-800 tracking-wider mb-2">Corporate Profile</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  PT Artha Migas Resources operates as an Indonesian private entity dedicated to the energy, oil, and natural gas services domain. Our business model centers on delivering dependable operational value, technical expertise, and compliant industrial supply chains to energy concessionaires and oilfield contractors.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-navy-800 tracking-wider mb-2">Strategic Focus</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-surface-light rounded border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>Drilling campaign technical readiness & support</span>
                  </div>
                  <div className="p-3 bg-surface-light rounded border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>Tubular goods & oilfield equipment procurement</span>
                  </div>
                  <div className="p-3 bg-surface-light rounded border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>Strict compliance with safety & HSE regulations</span>
                  </div>
                  <div className="p-3 bg-surface-light rounded border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>Long-term strategic domestic industry partnerships</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-navy-50 border border-navy-100 text-xs text-navy-800">
                <span className="font-semibold block mb-1">Corporate Notice:</span>
                PT Artha Migas Resources strictly adheres to verified factual documentation and transparent governance. We invite energy partners to initiate direct discussions for qualification, vendor onboarding, and operational collaboration.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-surface-light px-6 py-4 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => {
                  setModalOpen(false);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2 text-xs font-semibold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-md transition-colors"
              >
                Inquire Collaboration
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

