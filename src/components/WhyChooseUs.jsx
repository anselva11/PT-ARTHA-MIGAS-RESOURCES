import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Users, CheckCircle2, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function WhyChooseUs() {
  const iconMap = {
    Award: Award,
    Layers: Layers,
    Users: Users,
    CheckCircle2: CheckCircle2,
  };

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-white text-slate-800 relative overflow-hidden" aria-labelledby="why-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="why-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Built on Reliability, Integrity & Technical Precision
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In the demanding environment of oil and gas operations, PT Artha Migas Resources provides the discipline and stability our partners depend upon.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {companyProfile.whyChooseUs.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-xl bg-surface-light border border-slate-200/90 hover:border-gold-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon with Subtle Glow */}
                  <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-mono text-gold-600 font-bold uppercase tracking-wider block mb-1">
                    Pillar 0{idx + 1}
                  </span>

                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-navy-850">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-navy-800">
                  <span>Standard of Practice</span>
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industrial Partnership Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-8 sm:p-12 text-white shadow-2xl border border-navy-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
              Strategic Partnership
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
              Collaborate With an Agile, Dedicated Domestic Energy Partner
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We welcome prospective collaboration with national oil companies, international operators, EPC contractors, and service providers seeking dependable operational support across the Indonesian archipelago.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 transition-colors shadow-md"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

