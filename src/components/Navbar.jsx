import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, ChevronRight, Compass } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Our Services', href: '#services', id: 'services' },
    { label: 'Operations', href: '#operations', id: 'operations' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'HSE', href: '#hse', id: 'hse' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-navy-800/80 py-3.5'
          : 'bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-md"
            aria-label="PT Artha Migas Resources Home"
          >
            <div className="relative w-10 h-10 rounded-lg bg-navy-850 border border-gold-500/40 flex items-center justify-center shadow-inner group-hover:border-gold-500 transition-colors">
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-105"
                fill="none"
              >
                <path d="M50 15L78 78H64L50 46L36 78H22L50 15Z" fill="currentColor" />
                <path d="M50 36L61 62H39L50 36Z" fill="#123B5D" />
                <circle cx="50" cy="72" r="4" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-white text-base sm:text-lg leading-tight group-hover:text-gold-400 transition-colors">
                PT ARTHA MIGAS RESOURCES
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium">
                Oil & Gas Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-navy-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold text-navy-950 bg-gold-500 hover:bg-gold-400 transition-all duration-200 shadow-sm hover:shadow-gold-glow active:scale-[0.98] border border-gold-400"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-navy-800/60 focus:outline-none focus:ring-2 focus:ring-gold-500 border border-slate-700/50"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-navy-900 border-b border-navy-800 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? 'bg-navy-800 text-gold-400 font-semibold border-l-4 border-gold-500 pl-3'
                        : 'text-slate-300 hover:text-white hover:bg-navy-850'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-navy-800">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md text-sm font-semibold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 transition-colors shadow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

