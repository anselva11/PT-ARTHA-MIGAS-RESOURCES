import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Wrench,
  Gauge,
  Cpu,
  Building2,
  Truck,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { companyProfile } from '../data/companyData';
import ServiceModal from './ServiceModal';

export default function Services({ onSelectServiceForContact }) {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Drill':
      case 'Flame':
        return <Flame className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Flame className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-navy-950 text-white relative overflow-hidden" aria-labelledby="services-title">
      {/* Background Ambience */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 id="services-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Integrated Capabilities for the Modern Energy Sector
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Delivering robust engineering, specialized equipment staging, and field-tested solutions designed to reduce risk and elevate operational efficiency.
          </p>
        </div>

        {/* 3-Column Modern Grid for 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {companyProfile.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between p-8 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-gold-500/50 hover:bg-navy-850/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500 transition-all duration-500" />

              <div>
                {/* Header within Card: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-navy-950 border border-navy-700/80 flex items-center justify-center group-hover:border-gold-500/40 group-hover:bg-navy-900 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xl font-mono font-bold text-slate-600 group-hover:text-gold-400/60 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Badge */}
                <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-gold-400/90 mb-2">
                  {service.badge}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Action: Learn More Link */}
              <div className="pt-6 border-t border-navy-800/80 mt-auto flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 group-hover:translate-x-0.5 transition-all focus:outline-none"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <span className="text-[11px] text-slate-500 font-mono">
                  API & HSE Aligned
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">Custom Operational Requirements?</h4>
              <p className="text-xs text-slate-400">Our engineering and procurement team can tailor specialized scopes for onshore or offshore fields.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm"
          >
            Request Technical Consultation
          </a>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={(title) => {
          if (onSelectServiceForContact) {
            onSelectServiceForContact(title);
          }
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  );
}

