import React, { useState } from 'react';
import { COURSES_DATA, INSTITUTION_DATA } from '../data/institutionData';
import { 
  BookOpen, 
  BookmarkCheck, 
  PenTool, 
  Compass, 
  CheckCircle2, 
  Scroll, 
  Languages, 
  GraduationCap, 
  Globe, 
  Monitor,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'BookmarkCheck':
        return <BookmarkCheck className="w-6 h-6" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'Scroll':
        return <Scroll className="w-6 h-6" />;
      case 'Languages':
        return <Languages className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>Educational Areas & Curriculum</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {"تعلیم و کورسز"}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-xl mx-auto font-serif">
            Providing children with Qur'anic education, Islamic learning, moral upbringing, and essential academic education.
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* 10 Exact Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.map((course) => (
            <div 
              key={course.id}
              className="group relative rounded-2xl bg-[#f8f6f0] border border-[#e5e1da] p-6 sm:p-7 hover:border-[#064e3b] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of card: Icon and Urdu serial number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#064e3b]/10 text-[#064e3b] group-hover:bg-[#064e3b] group-hover:text-[#f1d592] flex items-center justify-center transition-all duration-300 shadow-sm">
                    {getCourseIcon(course.iconName)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span 
                      dir="rtl"
                      className="urdu text-base font-bold text-[#064e3b] bg-white px-3 py-0.5 rounded-full border border-[#d4af37]/40 shadow-xs"
                    >
                      {course.urduSubheading}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#064e3b] text-[#d4af37] font-bold text-xs flex items-center justify-center font-sans">
                      {course.id}
                    </span>
                  </div>
                </div>

                {/* English Course Title */}
                <h3 className="text-xl font-bold text-[#064e3b] mb-2.5 font-serif group-hover:text-[#043c2e]">
                  {course.title}
                </h3>

                {/* Exact English Description */}
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-serif">
                  {course.description}
                </p>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-[#e5e1da] flex items-center justify-between text-xs font-sans text-stone-500">
                <span className="font-bold text-[#064e3b] uppercase tracking-wider">Jamia Taleemul Quran</span>
                <span className="flex items-center gap-1 text-[#064e3b] font-bold">
                  <span>Included</span>
                  <CheckCircle2 className="w-4 h-4 text-[#064e3b]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Admissions callout banner */}
        <div className="mt-12 rounded-3xl bg-[#064e3b] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border-4 border-[#d4af37]">
          <div>
            <div dir="rtl" className="urdu text-3xl font-bold text-[#f1d592]">
              {INSTITUTION_DATA.admission.headingUrdu}
            </div>
            <p className="text-stone-200 text-sm sm:text-base mt-1 font-serif">
              Interested in enrolling your child? Contact us for admission information.
            </p>
          </div>
          <a
            href="#admission"
            className="px-7 py-3 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-widest hover:bg-[#e5c158] transition-colors whitespace-nowrap shadow-md"
          >
            View Admission Details
          </a>
        </div>

      </div>
    </section>
  );
};
