import React from 'react';
import { INSTITUTION_DATA, COURSES_DATA, TEACHERS_DATA } from '../data/institutionData';
import { X, Printer, Download, BookOpen, CheckCircle, Phone, MessageCircle, MapPin } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-[#d4af37] relative flex flex-col">
        
        {/* Top Modal Bar (Excluded from print) */}
        <div className="sticky top-0 z-20 bg-[#064e3b] text-white px-6 py-4 flex items-center justify-between no-print border-b-2 border-[#d4af37]">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#d4af37]" />
            <span className="font-bold text-sm sm:text-base font-serif">Jamia Taleemul Quran – Official Prospectus</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-wider hover:bg-[#e5c158] transition-colors font-sans"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Formal Document Area */}
        <div id="prospectus-printable" className="p-8 sm:p-12 text-[#1a1a1a] bg-white">
          
          {/* Institutional Document Header */}
          <div className="text-center border-b-2 border-[#064e3b] pb-6 mb-8">
            <div 
              dir="rtl" 
              className="urdu text-4xl sm:text-5xl font-bold text-[#064e3b] leading-[2.2]"
            >
              {INSTITUTION_DATA.nameUrdu}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#1a1a1a] mt-1 uppercase font-serif">
              {INSTITUTION_DATA.nameEnglish}
            </h1>
            <div dir="rtl" className="urdu text-2xl text-[#064e3b] mt-1 font-bold">
              {INSTITUTION_DATA.taglineUrdu}
            </div>
            <p className="text-sm text-stone-600 italic mt-1 font-serif">
              "{INSTITUTION_DATA.taglineEnglish}"
            </p>
            <div className="mt-4 inline-block px-4 py-1 rounded-full bg-[#f8f6f0] border border-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#064e3b] font-sans">
              OFFICIAL PROSPECTUS & ADMISSION OVERVIEW
            </div>
          </div>

          {/* Section 1: Overview */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#064e3b] uppercase tracking-wider border-b border-[#e5e1da] pb-1 mb-3 font-serif">
              1. Institutional Details
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm font-serif">
              <div>
                <span className="text-stone-500 block text-xs font-sans font-bold uppercase">Institution Name:</span>
                <span className="font-semibold text-stone-900">{INSTITUTION_DATA.nameEnglish} ({INSTITUTION_DATA.nameUrdu})</span>
              </div>
              <div>
                <span className="text-stone-500 block text-xs font-sans font-bold uppercase">Established:</span>
                <span className="font-semibold text-stone-900">{INSTITUTION_DATA.establishedYear}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-xs font-sans font-bold uppercase">Founder / Mohtamim:</span>
                <span className="font-semibold text-stone-900">{INSTITUTION_DATA.founderEnglish} ({INSTITUTION_DATA.founderUrdu})</span>
              </div>
              <div>
                <span className="text-stone-500 block text-xs font-sans font-bold uppercase">Admissions Status:</span>
                <span className="font-semibold text-emerald-800">{INSTITUTION_DATA.admissionsStatus}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Educational Areas */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#064e3b] uppercase tracking-wider border-b border-[#e5e1da] pb-1 mb-3 font-serif">
              2. Educational Areas & Curriculum
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-serif">
              {educationalAreasList.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 py-1">
                  <span className="w-5 h-5 rounded-full bg-[#064e3b] text-[#f1d592] text-xs font-bold flex items-center justify-center flex-shrink-0 font-sans">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-stone-800">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Faculty */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#064e3b] uppercase tracking-wider border-b border-[#e5e1da] pb-1 mb-3 font-serif">
              3. Faculty Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-serif">
              <div className="p-3.5 rounded-xl border border-[#e5e1da] bg-[#f8f6f0]">
                <div className="font-bold text-[#064e3b]">Qari Ashfaque</div>
                <div className="text-xs text-[#d4af37] font-bold uppercase tracking-wider font-sans">Mohtamim</div>
              </div>
              <div className="p-3.5 rounded-xl border border-[#e5e1da] bg-[#f8f6f0]">
                <div className="font-bold text-[#064e3b]">Hafiz Yazdani</div>
                <div className="text-xs text-[#d4af37] font-bold uppercase tracking-wider font-sans">Arabic & Urdu Teacher</div>
              </div>
              <div className="p-3.5 rounded-xl border border-[#e5e1da] bg-[#f8f6f0]">
                <div className="font-bold text-[#064e3b]">Abulques</div>
                <div className="text-xs text-[#d4af37] font-bold uppercase tracking-wider font-sans">Academic Teacher</div>
              </div>
            </div>
          </div>

          {/* Section 4: Admissions & Contact */}
          <div className="p-5 rounded-2xl border-2 border-[#d4af37] bg-[#f8f6f0]">
            <h2 className="text-base font-bold text-[#064e3b] uppercase tracking-wider mb-2 font-serif">
              4. Admission & Contact Details
            </h2>
            <p className="text-xs text-stone-600 mb-3 font-serif">
              Parents seeking admission for their children are invited to contact the institution directly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-serif">
              <div><strong className="font-sans">Phone:</strong> <span className="font-mono">{INSTITUTION_DATA.phone}</span></div>
              <div><strong className="font-sans">WhatsApp:</strong> <span className="font-mono">{INSTITUTION_DATA.whatsapp}</span></div>
              <div className="sm:col-span-2">
                <strong className="font-sans">Address:</strong> {INSTITUTION_DATA.address}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center text-xs text-stone-500 mt-8 pt-4 border-t border-[#e5e1da] font-serif">
            {INSTITUTION_DATA.copyright}
          </div>

        </div>

      </div>
    </div>
  );
};
