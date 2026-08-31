import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { BookOpen, Sparkles, Award, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>{INSTITUTION_DATA.about.subheadingEnglish}</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {INSTITUTION_DATA.about.headingUrdu}
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Identity Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#064e3b] p-8 text-white shadow-xl border-4 border-[#d4af37] relative overflow-hidden">
              
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#d4af37] text-[#064e3b] flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                  ق
                </div>

                <div dir="rtl" className="mb-4">
                  <div className="urdu text-3xl font-bold text-white leading-[2.1]">
                    {INSTITUTION_DATA.nameUrdu}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-[#d4af37] mt-1 font-sans font-bold">
                    {INSTITUTION_DATA.nameEnglish}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/15 text-sm font-sans">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-stone-300">Established</span>
                    <span className="font-bold text-[#f1d592]">{INSTITUTION_DATA.establishedYear}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-stone-300">Founder & Mohtamim</span>
                    <div className="text-right">
                      <span className="font-bold text-[#f1d592] block">{INSTITUTION_DATA.founderEnglish}</span>
                      <span dir="rtl" className="urdu text-xs text-[#d4af37] block">{INSTITUTION_DATA.founderUrdu}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-stone-300">Hifz Memorization</span>
                    <span className="font-bold text-emerald-300">1,000+ Students</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-stone-300">Institutional Model</span>
                    <span className="font-bold text-[#f1d592]">Community Supported</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Paragraphs (Strict English text as given in prompt) */}
          <div className="lg:col-span-7 space-y-5">
            {INSTITUTION_DATA.about.paragraphs.map((paragraph, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#e5e1da] border-l-4 border-l-[#064e3b] hover:border-[#064e3b]/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#064e3b]/10 text-[#064e3b] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#064e3b]" />
                  </div>
                  <p className="text-[#1a1a1a] text-base sm:text-lg leading-relaxed font-serif">
                    {paragraph}
                  </p>
                </div>
              </div>
            ))}

            {/* Quote / Highlight */}
            <div className="p-6 rounded-2xl bg-[#f8f6f0] border-l-4 border-[#d4af37] border border-[#e5e1da] flex items-center gap-4">
              <div className="flex-1">
                <div dir="rtl" className="urdu text-2xl font-bold text-[#064e3b] mb-1">
                  {INSTITUTION_DATA.taglineUrdu}
                </div>
                <div className="text-xs sm:text-sm text-stone-600 font-serif italic">
                  {INSTITUTION_DATA.taglineEnglish}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
