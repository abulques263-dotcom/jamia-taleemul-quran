import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { HeartHandshake, Phone, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export const DonationSection: React.FC = () => {
  return (
    <section id="donation" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>{INSTITUTION_DATA.donation.subheadingEnglish}</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {INSTITUTION_DATA.donation.headingUrdu}
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* Community Support Presentation Box */}
        <div className="bg-[#064e3b] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-4 border-[#d4af37] relative overflow-hidden text-center">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            
            <div className="w-16 h-16 rounded-full bg-[#d4af37] text-[#064e3b] mx-auto flex items-center justify-center mb-6 shadow-md">
              <HeartHandshake className="w-8 h-8" />
            </div>

            <div dir="rtl" className="urdu text-3xl sm:text-4xl font-bold text-[#f1d592] mb-2 leading-[2.2]">
              {INSTITUTION_DATA.donation.headingUrdu}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-serif">
              Community Goodwill & Support
            </h3>

            {/* Exact English paragraphs as requested */}
            <div className="space-y-4 text-stone-200 text-base sm:text-lg leading-relaxed mb-8 font-serif">
              <p>
                Jamia Taleemul Quran is a small community-supported institution that continues its educational work with the support and donations of people from the surrounding community.
              </p>
              <p className="font-bold text-[#f1d592]">
                Those who wish to support the institution's educational work may contact the institution directly.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${INSTITUTION_DATA.phone}`}
                id="donation-call-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-widest hover:bg-[#e5c158] hover:scale-102 active:scale-98 transition-all shadow-xl font-sans"
              >
                <Phone className="w-4 h-4" />
                <span>{INSTITUTION_DATA.donation.buttonText}</span>
              </a>

              <a
                href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20wish%20to%20support%20the%20educational%20work%20at%20Jamia%20Taleemul%20Quran`}
                target="_blank"
                rel="noopener noreferrer"
                id="donation-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#20ba59] active:scale-98 transition-all shadow-md font-sans"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Direct Contact Reference */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-300 font-sans">
              <div>Phone: <strong className="text-white font-mono">{INSTITUTION_DATA.phone}</strong></div>
              <div>•</div>
              <div>WhatsApp: <strong className="text-white font-mono">{INSTITUTION_DATA.whatsapp}</strong></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
