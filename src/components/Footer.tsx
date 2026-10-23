import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, MapPin, BookOpen, ChevronRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#/home' },
    { label: 'About & Courses', href: '#/academics' },
    { label: 'Teachers & Staff', href: '#/academics' },
    { label: 'Admissions', href: '#/academics' },
    { label: 'Qur’an Learning', href: '#/academics' },
    { label: 'Zakat / Sadqa / Fitra', href: '#/support' },
    { label: 'Photo Gallery', href: '#/support' },
    { label: 'Contact', href: '#/support' },
  ];

  return (
    <footer className="bg-[#064e3b] text-white border-t-4 border-[#d4af37] relative overflow-hidden">
      
      {/* Subtle Background Geometric Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Prominent Identity Section */}
        <div className="text-center pb-12 border-b border-white/10 max-w-3xl mx-auto">
          
          <div className="w-14 h-14 rounded-full bg-[#d4af37] text-[#064e3b] mx-auto flex items-center justify-center mb-4 shadow-md">
            <BookOpen className="w-7 h-7" />
          </div>

          {/* Prominent Urdu Institution Name */}
          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[2.2] select-none"
          >
            {INSTITUTION_DATA.nameUrdu}
          </h2>

          <div className="text-xs font-bold tracking-widest text-[#f1d592] uppercase mt-1 font-sans">
            {INSTITUTION_DATA.nameEnglish} • Estd. 2006
          </div>

          {/* Prominent Urdu Tagline */}
          <div className="my-4">
            <p 
              dir="rtl"
              className="urdu text-2xl sm:text-3xl text-[#f1d592] leading-[2.1]"
            >
              {INSTITUTION_DATA.taglineUrdu}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto italic font-serif">
            "{INSTITUTION_DATA.taglineEnglish}"
          </p>
        </div>

        {/* Middle Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-white/10 text-sm">
          
          {/* Column 1: About Brief */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-sm text-[#f1d592] tracking-wider uppercase font-sans">
              About Jamia
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-serif">
              Founded in 2006 by Qari Ashfaque to provide Qur'anic education, Islamic learning, moral upbringing, and essential academic education.
            </p>
            <div className="pt-2 text-xs text-[#f1d592] font-serif">
              Founder / Mohtamim: <strong className="text-white">Qari Ashfaque (قاری اشفاق)</strong>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-sm text-[#f1d592] tracking-wider uppercase font-sans">
              Quick Links
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-sans">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-stone-300 hover:text-[#f1d592] transition-colors py-1 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-sm text-[#f1d592] tracking-wider uppercase font-sans">
              Contact Us
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300 font-serif">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a href={`tel:${INSTITUTION_DATA.phone}`} className="hover:text-white font-mono">
                  {INSTITUTION_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a 
                  href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono"
                >
                  {INSTITUTION_DATA.whatsapp}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {INSTITUTION_DATA.address}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-serif">
          <div>
            {INSTITUTION_DATA.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 transition-colors font-sans text-xs font-bold uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
