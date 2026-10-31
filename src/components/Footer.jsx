import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Globe, Shield, FileText } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Operations', href: '#operations' },
    { label: 'Projects & Experience', href: '#projects' },
    { label: 'HSE Commitments', href: '#hse' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 relative z-10" aria-label="Corporate Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-navy-850">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-gold-500" fill="none">
                  <path d="M50 15L78 78H64L50 46L36 78H22L50 15Z" fill="currentColor" />
                  <path d="M50 36L61 62H39L50 36Z" fill="#123B5D" />
                  <circle cx="50" cy="72" r="4" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-white text-base tracking-wider block">
                  {companyProfile.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                  Energy & Drilling Solutions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An Indonesian energy company committed to operational excellence, field safety, and specialized drilling solutions powering national energy development.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Corporate Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#home"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 flex items-center justify-center transition-colors"
                aria-label="Official Web Network"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-bold text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {companyProfile.services.map((serv) => (
                <li key={serv.id}>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors inline-block text-slate-400"
                  >
                    {serv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Overview (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-bold text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{companyProfile.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${companyProfile.contact.email}`} className="hover:text-white transition-colors">
                  {companyProfile.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`tel:${companyProfile.contact.phoneCallable}`} className="hover:text-white transition-colors">
                  {companyProfile.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 PT Artha Migas Resources. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-1">
              Republic of Indonesia Energy & Oilfield Support Services Provider.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-500">
              Confidentiality & Compliance Assured
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 hover:text-white hover:border-gold-500/40 transition-colors shadow flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span className="text-[11px] font-medium hidden sm:inline">Top</span>
              <ArrowUp className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

