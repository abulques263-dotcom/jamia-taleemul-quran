import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { BookOpen, GraduationCap, HeartHandshake, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden bg-islamic-pattern pb-7 pt-24 text-white sm:pb-10 sm:pt-28">
    <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-[#f1d592] sm:mb-3 sm:text-xs"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />{INSTITUTION_DATA.admissionsStatus}<span className="text-white/50">·</span>Established 2006</div>
      <h1 dir="rtl" className="urdu mx-auto w-full whitespace-nowrap text-[clamp(1.55rem,7.3vw,3.75rem)] font-bold leading-[1.45] text-white sm:leading-[1.7]">{INSTITUTION_DATA.nameUrdu}</h1>
      <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-[#f1d592] sm:mt-2 sm:text-sm">{INSTITUTION_DATA.nameEnglish}</p>
      <p className="urdu mt-2 text-base font-semibold leading-[1.5] text-[#f1d592] sm:mt-3 sm:text-xl sm:leading-[1.8]" dir="rtl">{INSTITUTION_DATA.taglineUrdu}</p>
      <p className="mx-auto mt-1 max-w-2xl text-sm leading-6 text-slate-200 sm:mt-2 sm:text-base sm:leading-7">Qur’anic learning, Islamic studies and education for children and families in Noida.</p>
      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3">
        <a href="#home-quran" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-3 py-3 text-sm font-bold text-[#102a43] shadow-lg transition hover:bg-[#f1d592]"><BookOpen className="h-4 w-4" />Read Qur’an</a>
        <a href="#home-admission" id="hero-admission-btn" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-3 text-sm font-bold text-white transition hover:bg-white/15"><GraduationCap className="h-4 w-4 text-[#f1d592]" />Admissions</a>
        <a href="#/donate" id="hero-donate-btn" className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d4af37]/60 bg-[#102a43] px-4 py-3 text-sm font-bold text-[#f1d592] transition hover:bg-white/10 sm:col-span-1"><HeartHandshake className="h-4 w-4" />Support the Jamia</a>
      </div>
      <div className="mx-auto mt-5 grid max-w-3xl grid-cols-3 gap-2 border-t border-white/10 pt-4 text-left sm:mt-6 sm:gap-3 sm:pt-5">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#f1d592]">Since</p><p className="mt-1 text-sm font-semibold text-white">2006</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#f1d592]">Learning</p><p className="mt-1 text-sm font-semibold text-white">Qur’an & Deen</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#f1d592]">Community</p><p className="mt-1 text-sm font-semibold text-white">Noida</p></div>
      </div>
      <a href="#start-here-title" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white"><ArrowDown className="h-4 w-4" />See all sections</a>
    </div>
  </section>
);
