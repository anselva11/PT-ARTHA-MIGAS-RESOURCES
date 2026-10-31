import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Sprout, Activity, CheckCircle2, ShieldCheck, HeartHandshake, AlertTriangle } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function HSE() {
  const pillarIcons = {
    ShieldAlert: ShieldAlert,
    Sprout: Sprout,
    Activity: Activity,
  };

  return (
    <section id="hse" className="py-24 sm:py-32 bg-navy-950 text-white relative overflow-hidden" aria-labelledby="hse-title">
      {/* Background Ambience */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-navy-900 border border-gold-500/30 text-gold-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Health, Safety & Environment
          </div>
          
          <h2 id="hse-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Safety Is Our Priority.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {companyProfile.headline}
          </p>
        </div>

        {/* Central Core Principle Banner */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-navy-700/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gold-500/5 -skew-x-12 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Absolute Stop-Work Authority (SWA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  We empower every employee, contractor, and operational partner with full authority and responsibility to halt any task whenever safety, health, or environmental conditions are deemed compromised.
                </p>
              </div>
            </div>

            <div className="shrink-0 px-4 py-2 rounded-lg bg-navy-950/80 border border-navy-700 text-gold-400 font-mono text-xs uppercase tracking-wider font-semibold">
              Zero Compromise
            </div>
          </div>
        </div>

        {/* Three Visual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyProfile.hsePillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.iconName] || ShieldAlert;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative p-8 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-gold-500/50 hover:bg-navy-850 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Pillar Top Icon & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-navy-950 border border-navy-700 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-400 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    {pillar.title}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {pillar.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Focus Points List */}
                <div className="pt-6 border-t border-navy-800/80 space-y-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Operational Tenets
                  </span>
                  {pillar.focusPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible Stewardship Note */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            Our HSE management philosophy adheres to continuous procedural discipline, systematic operational hazard evaluation, and full alignment with Indonesian regulatory standards for upstream energy operations.
          </p>
        </div>
      </div>
    </section>
  );
}

