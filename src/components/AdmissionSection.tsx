import React, { useState } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, MapPin, CheckCircle, Copy, Check, GraduationCap, ArrowRight } from 'lucide-react';

export const AdmissionSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(INSTITUTION_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INSTITUTION_DATA.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="admission" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span className="w-2 h-2 rounded-full bg-[#064e3b]"></span>
            <span>{INSTITUTION_DATA.admissionsStatus}</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.2]"
          >
            {INSTITUTION_DATA.admission.headingUrdu}
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* Admission Card Main Container */}
        <div className="rounded-3xl bg-[#f8f6f0] border-2 border-[#d4af37] shadow-xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle Background */}
          <div className="absolute -top-12 -right-12 w-60 h-60 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#064e3b] mb-4 font-serif">
              {INSTITUTION_DATA.admission.subheadingEnglish}
            </h3>

            {/* Exact English description from prompt */}
            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-serif">
              <p className="font-bold text-[#064e3b]">
                Admissions are currently open at Jamia Taleemul Quran.
              </p>
              <p>
                Parents who wish to provide their children with Qur'anic education, Islamic learning, moral development and essential academic education are welcome to contact the institution for admission information.
              </p>
            </div>
          </div>

          {/* Contact & Inquiry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5e1da] shadow-sm flex flex-col justify-between hover:border-[#064e3b] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#064e3b]/10 text-[#064e3b] flex items-center justify-center font-bold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f8f6f0] text-[#064e3b] border border-[#d4af37]/50 font-sans">
                    Voice Calling
                  </span>
                </div>

                <div className="text-xs text-stone-500 font-bold uppercase tracking-wider font-sans">Direct Admission Contact</div>
                <div className="text-xl sm:text-2xl font-bold text-[#064e3b] mt-1 font-mono tracking-tight">
                  {INSTITUTION_DATA.phone}
                </div>
                <div className="text-xs text-stone-500 mt-1 font-serif">
                  Available for admission inquiries and parent guidance.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e5e1da] flex items-center gap-3">
                <a
                  href={`tel:${INSTITUTION_DATA.phone}`}
                  id="admission-call-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-wider hover:bg-[#e5c158] shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone Number"
                  className="p-3 rounded-lg bg-[#f8f6f0] text-stone-700 hover:bg-stone-200 transition-colors border border-[#e5e1da]"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5e1da] shadow-sm flex flex-col justify-between hover:border-[#25D366] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-sans">
                    Instant Messaging
                  </span>
                </div>

                <div className="text-xs text-stone-500 font-bold uppercase tracking-wider font-sans">WhatsApp Inquiries</div>
                <div className="text-xl sm:text-2xl font-bold text-[#064e3b] mt-1 font-mono tracking-tight">
                  {INSTITUTION_DATA.whatsapp}
                </div>
                <div className="text-xs text-stone-500 mt-1 font-serif">
                  Send a WhatsApp message for admission details and questions.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e5e1da] flex items-center gap-3">
                <a
                  href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20admission%20for%20my%20child%20at%20Jamia%20Taleemul%20Quran`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="admission-whatsapp-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>

          {/* Address Box */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-[#e5e1da] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#064e3b]/10 text-[#064e3b] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#064e3b] uppercase tracking-wider font-sans">Institution Address</div>
                <p className="text-stone-800 text-sm sm:text-base font-medium mt-0.5 font-serif">
                  {INSTITUTION_DATA.address}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#f8f6f0] hover:bg-stone-200 border border-[#e5e1da] text-stone-800 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors font-sans"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Address Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
