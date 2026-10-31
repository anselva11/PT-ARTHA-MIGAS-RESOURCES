import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Operations from './components/Operations';
import Projects from './components/Projects';
import HSE from './components/HSE';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { companyProfile } from './data/companyData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledService, setPrefilledService] = useState('');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'operations', 'projects', 'hse', 'why-choose-us', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i] === 'why-choose-us' ? 'about' : sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForContact = (serviceTitle) => {
    setPrefilledService(serviceTitle);
  };

  const handleWhatsAppQuickChat = () => {
    const text = encodeURIComponent(
      `Hello PT Artha Migas Resources, I would like to inquire about energy drilling services and commercial collaboration.`
    );
    window.open(`https://wa.me/${companyProfile.contact.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-surface-light text-slate-800 flex flex-col selection:bg-gold-500 selection:text-navy-950 font-sans">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Corporate Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services onSelectServiceForContact={handleSelectServiceForContact} />
        <Operations />
        <Projects />
        <HSE />
        <WhyChooseUs />
        <Contact prefilledSubject={prefilledService} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick Communication">
        <button
          type="button"
          onClick={handleWhatsAppQuickChat}
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 border border-emerald-400/40 group"
          aria-label="Direct WhatsApp Communication"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            Direct WhatsApp Desk
          </span>
        </button>
      </aside>
    </div>
  );
}

