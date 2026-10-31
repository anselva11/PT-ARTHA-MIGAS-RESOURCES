import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Flame, Compass, Wrench } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-20"
      aria-label="Hero Section"
    >
      {/* Background Image with Cinematic Industrial Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1786374228080-72d31024e7b5?auto=format&fit=crop&w=2100&q=85"
          alt="Offshore Oil & Gas Drilling Platform Silhouette"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />

        {/* Multi-layered Deep Navy Gradient Overlays for Readability & Drama */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        
        {/* Subtle Industrial Grid Texture */}
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
      </div>

      {/* Floating Accent Highlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        
        {/* Small Company Identifier Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-800/80 border border-gold-500/30 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400" />
          <span className="text-xs uppercase tracking-[0.22em] text-gold-400 font-semibold">
            {companyProfile.name}
          </span>
          <span className="text-slate-500 text-xs">|</span>
          <span className="text-xs text-slate-300 font-medium">Energy & Drilling Solutions</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-5xl"
        >
          POWERING ENERGY.{' '}
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400">
            BUILDING THE FUTURE.
          </span>
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed text-balance"
        >
          {companyProfile.headline}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => handleScrollTo('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold-500/20 group border border-gold-400"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider text-white bg-navy-900/80 hover:bg-navy-800 border border-slate-700/80 hover:border-gold-500/50 backdrop-blur-sm active:scale-[0.98] transition-all duration-200"
          >
            <span>Contact Our Team</span>
          </button>
        </motion.div>

        {/* Three Quick Operational Metrics Highlights (Qualitative & Authentic) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-4xl border-t border-slate-800/80 pt-8"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold tracking-wide">Strict HSE Protocols</div>
              <div className="text-xs text-slate-400">Zero-compromise safety focus</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold tracking-wide">Integrated Solutions</div>
              <div className="text-xs text-slate-400">Drilling & field operational support</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold tracking-wide">Domestic Expertise</div>
              <div className="text-xs text-slate-400">Onshore & offshore campaign readiness</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-400 hover:text-gold-400 transition-colors z-20"
        onClick={() => handleScrollTo('about')}
        role="button"
        aria-label="Scroll down to About Us section"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleScrollTo('about');
        }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

