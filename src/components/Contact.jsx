import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function Contact({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: prefilledSubject || '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Update subject if parent component passes pre-filled service inquiry
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${prefilledSubject}`,
      }));
    }
  }, [prefilledSubject]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter at least 3 characters.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Organization name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Corporate Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Phone number is required.';
    } else if (!/^[0-9+()\- ]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone or mobile number.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify the inquiry subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details in the message area.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please write at least 15 characters to explain your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate reliable dispatch / API submission with simulated delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello PT Artha Migas Resources, I would like to inquire regarding energy services and drilling operations.`
    );
    window.open(`https://wa.me/${companyProfile.contact.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-navy-950 text-white relative overflow-hidden" aria-labelledby="contact-title">
      {/* Background Ambience */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-navy-900 border border-gold-500/30 text-gold-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Direct Communication
          </div>

          <h2 id="contact-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Let's Build Energy Opportunities Together.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our executive desk or operational team to discuss project requirements, vendor qualification, or joint energy initiatives.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Corporate Office & WhatsApp Access */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-xl bg-navy-900/90 border border-navy-800 shadow-xl space-y-6">
              <h3 className="font-display text-xl font-bold text-white border-b border-navy-800 pb-4">
                Corporate Headquarters
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-700 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Registered Office (Placeholder)
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {companyProfile.contact.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-700 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Corporate Email (Placeholder)
                  </span>
                  <a
                    href={`mailto:${companyProfile.contact.email}`}
                    className="text-sm text-gold-400 hover:text-gold-300 font-medium block transition-colors"
                  >
                    {companyProfile.contact.email}
                  </a>
                  <a
                    href={`mailto:${companyProfile.contact.inquiryEmail}`}
                    className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    Inquiries: {companyProfile.contact.inquiryEmail}
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-700 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Telephone (Placeholder)
                  </span>
                  <a
                    href={`tel:${companyProfile.contact.phoneCallable}`}
                    className="text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    {companyProfile.contact.phoneDisplay}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {companyProfile.contact.workingHours}
                  </div>
                </div>
              </div>

              {/* Notice note */}
              <div className="pt-4 border-t border-navy-800 text-[11px] text-slate-400 leading-normal flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>
                  All official correspondence, tender tenders, and commercial vendor packets are reviewed by PT Artha Migas Resources operational management.
                </span>
              </div>
            </div>

            {/* Quick WhatsApp Channel Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-navy-900 to-navy-850 border border-emerald-500/30 shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant WhatsApp Desk</h4>
                  <p className="text-xs text-slate-400">Configured number: {companyProfile.contact.whatsappDisplay}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
              >
                <span>Chat Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-navy-900/90 border border-navy-800 shadow-2xl relative">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Direct Operational Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Please complete the form below. Our corporate relations team will review your scope and respond promptly.
              </p>

              {/* Success Notification Alert */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500 text-emerald-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Inquiry Received Successfully</h4>
                    <p className="text-xs text-emerald-300 mt-0.5">
                      Thank you for contacting PT Artha Migas Resources. Your inquiry has been documented, and our team will get in touch with you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ir. Budi Santoso"
                      className={`w-full px-4 py-3 rounded-md bg-navy-950 border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-navy-700 focus:border-gold-500 focus:ring-gold-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Company / Organization <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. PT Energi Nusantara"
                      className={`w-full px-4 py-3 rounded-md bg-navy-950 border ${
                        errors.companyName ? 'border-rose-500 focus:ring-rose-500' : 'border-navy-700 focus:border-gold-500 focus:ring-gold-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-md bg-navy-950 border ${
                        errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-navy-700 focus:border-gold-500 focus:ring-gold-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812-XXXX-XXXX"
                      className={`w-full px-4 py-3 rounded-md bg-navy-950 border ${
                        errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-navy-700 focus:border-gold-500 focus:ring-gold-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Service Interest <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Drilling Support & Equipment Supply Tender Inquiry"
                    className={`w-full px-4 py-3 rounded-md bg-navy-950 border ${
                      errors.subject ? 'border-rose-500 focus:ring-rose-500' : 'border-navy-700 focus:border-gold-500 focus:ring-gold-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message / Operational Scope <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on project location, timeline, equipment requirements, or services required..."
                    className={`w-full px-4 py-3 rounded-md bg-navy-950 border ${
                      errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-navy-700 focus:border-gold-500 focus:ring-gold-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md font-semibold text-xs uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-400 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                        <span>Processing Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

