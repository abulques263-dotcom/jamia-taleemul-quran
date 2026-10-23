import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Sparkles, Phone, MessageCircle, ArrowDown, GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-islamic-pattern text-white">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#064e3b]/80 via-[#d4af37]/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Decorative Islamic Geometric Star Crest */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Admissions Open Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064e3b]/90 border border-[#d4af37] shadow-inner mb-3 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f1d592]">
            {INSTITUTION_DATA.admissionsStatus}
          </span>
          <span className="text-xs text-[#d4af37] hidden sm:inline">• Established 2006</span>
        </div>

        {/* Main Urdu Heading */}
        <div className="my-1 sm:my-2">
          <h1 
            dir="rtl"
            className="urdu text-3xl sm:text-5xl md:text-6xl font-bold tracking-normal text-white drop-shadow-md leading-[1.75]"
          >
            {INSTITUTION_DATA.nameUrdu}
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#d4af37] uppercase mt-1 font-sans">
            {INSTITUTION_DATA.nameEnglish}
          </p>
        </div>

        {/* Subtle Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 my-1 sm:my-2 opacity-90">
          <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          <div className="w-2.5 h-2.5 rotate-45 border border-[#d4af37] bg-[#064e3b]"></div>
          <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        </div>

        {/* Important Urdu Tagline */}
        <div className="mb-2 sm:mb-3">
          <p 
            dir="rtl" 
            className="urdu text-xl sm:text-2xl md:text-3xl font-semibold text-[#f1d592] drop-shadow-sm leading-[1.7]"
          >
            {INSTITUTION_DATA.taglineUrdu}
          </p>
        </div>

        {/* English Tagline Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-stone-200 font-serif italic leading-relaxed mb-3 sm:mb-4 text-balance">
          {INSTITUTION_DATA.taglineEnglish}
        </p>

        {/* 3 Main Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          
          {/* Prominent donation action */}
          <a
            href="#donation"
            id="hero-donate-btn"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#e5c158] transition-all"
          >
            <HeartHandshake className="w-5 h-5" />
            <span>Donate Now</span>
          </a>

          {/* Admission Button */}
          <a
            href="#/academics"
            id="hero-admission-btn"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#e5c158] transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Admission</span>
          </a>

          {/* Contact Us Button */}
          <a
            href="#/support"
            id="hero-contact-btn"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#064e3b] text-white border border-[#d4af37] font-bold text-xs uppercase tracking-wider hover:bg-[#085f48] transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Contact Us</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20admission%20and%20courses%20at%20Jamia%20Taleemul%20Quran`}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-stone-200">
          <a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex items-center gap-2 hover:text-[#f1d592]"><Phone className="h-4 w-4 text-[#d4af37]" />{INSTITUTION_DATA.phoneFormatted}</a>
          <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#f1d592]"><MessageCircle className="h-4 w-4 text-[#25D366]" />WhatsApp</a>
          <a href="#contact" className="inline-flex items-center gap-2 hover:text-[#f1d592]"><Phone className="h-4 w-4 text-[#d4af37]" />Contact & location</a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f8f6f0]/10 border border-[#d4af37]/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37] text-[#064e3b] flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#d4af37] font-sans">Established</div>
              <div className="text-sm font-bold text-white">Since 2006</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f8f6f0]/10 border border-[#d4af37]/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37] text-[#064e3b] flex items-center justify-center flex-shrink-0 font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#d4af37] font-sans">Hifz Completed</div>
              <div className="text-sm font-bold text-white">1,000+ Children</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f8f6f0]/10 border border-[#d4af37]/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37] text-[#064e3b] flex items-center justify-center flex-shrink-0 font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#d4af37] font-sans">Community Model</div>
              <div className="text-sm font-bold text-white">Community Supported</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
