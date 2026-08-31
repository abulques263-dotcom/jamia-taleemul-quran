import React from 'react';
import { TEACHERS_DATA } from '../data/institutionData';
import { UserCheck, BookOpen, GraduationCap, Award, CheckCircle } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>Our Faculty & Guidance</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {"اساتذہ"}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-2 font-serif">
            Dedicated educators providing Qur'anic, linguistic, and foundational academic mentorship.
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* 3 Exact Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEACHERS_DATA.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-white rounded-3xl border border-[#e5e1da] shadow-md hover:shadow-xl hover:border-[#064e3b] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Banner for Teacher Card */}
                <div className="bg-[#064e3b] p-6 text-white text-center relative border-b-2 border-[#d4af37]">
                  
                  {/* Subtle Arch Emblem / Avatar */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#d4af37] p-1 shadow-md mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#064e3b] font-serif">
                      {teacher.initials}
                    </span>
                  </div>

                  {/* Urdu Name if available */}
                  {teacher.urduName && (
                    <div 
                      dir="rtl" 
                      className="urdu text-2xl font-bold text-[#f1d592] leading-[2.1]"
                    >
                      {teacher.urduName}
                    </div>
                  )}

                  {/* English Name */}
                  <h3 className="text-lg font-bold text-white tracking-wide font-serif">
                    {teacher.englishName}
                  </h3>

                  {/* Designation Badge */}
                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-black/20 border border-[#d4af37]/60 text-[11px] font-bold uppercase tracking-wider text-[#f1d592] font-sans">
                    {teacher.designation}
                  </div>
                </div>

                {/* Description Body (Strict English text as given in prompt) */}
                <div className="p-6">
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif">
                    {teacher.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-[#f8f6f0] border-t border-[#e5e1da] flex items-center justify-between text-xs font-sans text-stone-500">
                <span className="font-bold text-[#064e3b] uppercase tracking-wider">Faculty Member</span>
                <span className="text-[#064e3b] font-bold">Jamia Taleemul Quran</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
