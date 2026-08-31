import React from 'react';
import { INSTITUTION_DATA, COURSES_DATA, TEACHERS_DATA } from '../data/institutionData';
import { Download, Printer, FileText, CheckCircle2, Phone, MessageCircle, MapPin, Sparkles, Building, User } from 'lucide-react';

interface ProspectusSectionProps {
  onOpenModal: () => void;
}

export const ProspectusSection: React.FC<ProspectusSectionProps> = ({ onOpenModal }) => {
  const handlePrint = () => {
    window.print();
  };

  const educationalAreasList = [
    "Qur'an Reading & Correct Pronunciation",
    "Hifz-e-Qur'an",
    "Urdu Education",
    "Islamic Studies",
    "Kalimaat",
    "Ahadees",
    "Arabic",
    "Hindi Education",
    "English Education",
    "NCERT-based education up to Class 8",
    "Basic Computer Education"
  ];

  return (
    <section id="prospectus" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>Official Institutional Prospectus</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {"پراسپیکٹس"}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-2 font-serif">
            Complete institutional overview, educational curriculum, faculty, and admission details.
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* Prospectus Document Card */}
        <div className="bg-white rounded-3xl border-2 border-[#d4af37] shadow-2xl overflow-hidden relative">
          
          {/* Top Decorative Border Ribbon */}
          <div className="h-3 bg-gradient-to-r from-[#064e3b] via-[#d4af37] to-[#064e3b]" />

          {/* Document Header */}
          <div className="bg-[#f8f6f0] p-6 sm:p-10 border-b border-[#e5e1da] text-center relative">
            <div className="max-w-2xl mx-auto">
              <div 
                dir="rtl" 
                className="urdu text-3xl sm:text-4xl font-bold text-[#064e3b] leading-[2.2]"
              >
                {INSTITUTION_DATA.nameUrdu}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-800 tracking-wide mt-1 font-serif">
                {INSTITUTION_DATA.nameEnglish}
              </h3>
              <div dir="rtl" className="urdu text-xl text-[#064e3b] mt-1 font-bold">
                {INSTITUTION_DATA.taglineUrdu}
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-lg mx-auto font-serif italic">
                {INSTITUTION_DATA.taglineEnglish}
              </p>

              <div className="inline-flex items-center gap-3 mt-4 px-4 py-1.5 rounded-full bg-[#064e3b] text-[#f1d592] text-xs font-bold uppercase tracking-wider font-sans">
                <span>Established: {INSTITUTION_DATA.establishedYear}</span>
                <span>•</span>
                <span>Founder: {INSTITUTION_DATA.founderEnglish}</span>
              </div>
            </div>
          </div>

          {/* Document Main Content */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* 1. Institution Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#f8f6f0] border border-[#e5e1da] text-sm">
              <div>
                <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block font-sans">Institution</span>
                <span className="font-bold text-[#064e3b] text-base font-serif">{INSTITUTION_DATA.nameEnglish}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block font-sans">Established</span>
                <span className="font-bold text-[#064e3b] text-base font-serif">{INSTITUTION_DATA.establishedYear}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block font-sans">Founder</span>
                <span className="font-bold text-[#064e3b] text-base font-serif">{INSTITUTION_DATA.founderEnglish}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block font-sans">Admissions</span>
                <span className="font-bold text-emerald-800 text-base font-serif">{INSTITUTION_DATA.admissionsStatus}</span>
              </div>
            </div>

            {/* 2. Educational Areas */}
            <div>
              <h4 className="text-lg font-bold text-[#064e3b] border-b border-[#e5e1da] pb-2 mb-4 flex items-center gap-2 font-serif">
                <FileText className="w-5 h-5 text-[#d4af37]" />
                <span>Educational Areas</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationalAreasList.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f8f6f0] border border-[#e5e1da] text-sm text-stone-800 font-serif">
                    <CheckCircle2 className="w-4 h-4 text-[#064e3b] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Faculty */}
            <div>
              <h4 className="text-lg font-bold text-[#064e3b] border-b border-[#e5e1da] pb-2 mb-4 flex items-center gap-2 font-serif">
                <User className="w-5 h-5 text-[#d4af37]" />
                <span>Faculty</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#f8f6f0] border border-[#e5e1da]">
                  <div className="font-bold text-[#064e3b] font-serif">Qari Ashfaque</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mt-0.5 font-sans">Mohtamim</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f6f0] border border-[#e5e1da]">
                  <div className="font-bold text-[#064e3b] font-serif">Hafiz Yazdani</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mt-0.5 font-sans">Arabic & Urdu Teacher</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f6f0] border border-[#e5e1da]">
                  <div className="font-bold text-[#064e3b] font-serif">Abulques</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mt-0.5 font-sans">Academic Teacher</div>
                </div>
              </div>
            </div>

            {/* 4. Admissions & Contact Summary */}
            <div className="p-5 rounded-2xl bg-[#064e3b] text-white space-y-3 border-2 border-[#d4af37]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-3">
                <div className="font-bold text-lg text-[#f1d592] font-serif">Admissions Information</div>
                <div className="text-xs px-3 py-1 rounded-full bg-[#d4af37] text-[#064e3b] font-bold uppercase tracking-wider inline-block self-start sm:self-auto font-sans">
                  {INSTITUTION_DATA.admissionsStatus}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Phone: <strong className="text-white font-mono">{INSTITUTION_DATA.phone}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: <strong className="text-white font-mono">{INSTITUTION_DATA.whatsapp}</strong></span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 text-xs sm:text-sm text-stone-200 font-serif">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Address: {INSTITUTION_DATA.address}</span>
              </div>
            </div>

          </div>

          {/* Action Footer: Download Prospectus */}
          <div className="bg-[#f8f6f0] p-6 border-t border-[#e5e1da] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-600 font-serif">
              Official institutional document verified and issued by Jamia Taleemul Quran.
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenModal}
                id="view-prospectus-modal-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#e5e1da] text-[#064e3b] hover:bg-stone-50 text-xs font-bold uppercase tracking-wider shadow-sm transition-all font-sans"
              >
                <FileText className="w-4 h-4 text-[#064e3b]" />
                <span>View Full Document</span>
              </button>

              <button
                onClick={handlePrint}
                id="download-prospectus-btn"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#d4af37] text-[#064e3b] hover:bg-[#e5c158] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-sans"
              >
                <Download className="w-4 h-4 text-[#064e3b]" />
                <span>Download Prospectus</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
