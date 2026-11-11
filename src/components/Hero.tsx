import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { BookOpen, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden bg-islamic-pattern px-4 pb-7 pt-24 text-white sm:pb-9 sm:pt-28">
    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="relative mx-auto max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/5 px-3 py-1 text-[10px] font-semibold text-[#f1d592]"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />{INSTITUTION_DATA.admissionsStatus}</span>
      <h1 dir="rtl" className="urdu mx-auto mt-2 whitespace-nowrap text-[clamp(1.55rem,7vw,3.25rem)] font-bold leading-[1.45] text-white">{INSTITUTION_DATA.nameUrdu}</h1>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[.2em] text-[#f1d592] sm:text-xs">{INSTITUTION_DATA.nameEnglish} <span className="text-white/40">·</span> Since 2006</p>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80 sm:mt-3 sm:text-base">Qur’anic learning and education for children and families in Noida.</p>
      <div className="mx-auto mt-4 flex max-w-md flex-col justify-center gap-2 sm:flex-row sm:gap-3">
        <a href="#/quran" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#102a43] shadow-md transition hover:bg-[#f1d592]"><BookOpen className="h-4 w-4" />Read Qur’an</a>
        <a href="#/donate" id="hero-donate-btn" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#d4af37]/60 bg-white/5 px-5 py-2.5 text-sm font-bold text-[#f1d592] transition hover:bg-white/10"><HeartHandshake className="h-4 w-4" />Donate</a>
      </div>
    </div>
  </section>
);
