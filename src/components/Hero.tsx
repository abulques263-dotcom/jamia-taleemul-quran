import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Sparkles, Phone, MessageCircle, ArrowDown, GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-islamic-pattern text-white">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#064e3b]/80 via-[#d4af37]/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Decorative Islamic Geometric Star Crest */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Admissions Open Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064e3b]/90 border border-[#d4af37] shadow-inner mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f1d592]">
            {INSTITUTION_DATA.admissionsStatus}
          </span>
          <span className="text-xs text-[#d4af37] hidden sm:inline">• Established 2006</span>
        </div>

        {/* Main Urdu Heading */}
        <div className="my-3 sm:my-5">
          <h1 
            dir="rtl"
            className="urdu text-4xl sm:text-6xl md:text-7xl font-bold tracking-normal text-white drop-shadow-md leading-[2.2]"
          >
            {INSTITUTION_DATA.nameUrdu}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#d4af37] uppercase mt-2 font-sans">
            {INSTITUTION_DATA.nameEnglish}
          </p>
        </div>

        {/* Subtle Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 my-3 sm:my-4 opacity-90">
          <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          <div className="w-2.5 h-2.5 rotate-45 border border-[#d4af37] bg-[#064e3b]"></div>
          <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        </div>

        {/* Important Urdu Tagline */}
        <div className="mb-4 sm:mb-6">
          <p 
            dir="rtl" 
            className="urdu text-2xl sm:text-3xl md:text-4xl font-semibold text-[#f1d592] drop-shadow-sm leading-[2.1]"
          >
            {INSTITUTION_DATA.taglineUrdu}
          </p>
        </div>

        {/* English Tagline Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-200 font-serif italic leading-relaxed mb-5 sm:mb-6 text-balance">
          {INSTITUTION_DATA.taglineEnglish}
        </p>

        {/* 3 Main Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          
          {/* Admission Button */}
          <a
            href="#admission"
            id="hero-admission-btn"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg hover:bg-[#e5c158] hover:scale-102 active:scale-98 transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Admission</span>
          </a>

          {/* Contact Us Button */}
          <a
            href="#contact"
            id="hero-contact-btn"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#064e3b] text-white border-2 border-[#d4af37] font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#085f48] active:scale-98 transition-all shadow-md"
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
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#20ba59] active:scale-98 transition-all shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-7 sm:mt-9 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#f8f6f0]/10 border border-[#d4af37]/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37] text-[#064e3b] flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#d4af37] font-sans">Established</div>
              <div className="text-sm font-bold text-white">Since 2006</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f8f6f0]/10 border border-[#d4af37]/30 backdrop-blur-sm">
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
