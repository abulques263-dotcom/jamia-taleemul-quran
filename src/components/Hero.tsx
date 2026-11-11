import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { ArrowDown, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => (
  <section id="home" className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-islamic-pattern py-12 text-white sm:min-h-[calc(100svh-5rem)] sm:py-16">
    <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.28em] text-[#f1d592] sm:mb-7 sm:text-xs">Established 2006 <span className="mx-2 text-white/40">·</span> Noida</p>
      <h1 dir="rtl" className="urdu mx-auto whitespace-nowrap text-[clamp(1.8rem,8vw,4.5rem)] font-bold leading-[1.4] text-white">{INSTITUTION_DATA.nameUrdu}</h1>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[.2em] text-[#f1d592] sm:mt-3 sm:text-sm">{INSTITUTION_DATA.nameEnglish}</p>
      <div className="mx-auto my-6 flex max-w-[12rem] items-center justify-center gap-3 sm:my-8"><span className="h-px flex-1 bg-[#d4af37]/55" /><span className="h-1.5 w-1.5 rotate-45 border border-[#d4af37]/80" /><span className="h-px flex-1 bg-[#d4af37]/55" /></div>
      <p className="mx-auto max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{INSTITUTION_DATA.taglineEnglish}</p>
      <a href="#/donate" id="hero-donate-btn" className="mx-auto mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-7 py-3 text-sm font-bold text-[#102a43] shadow-lg shadow-black/10 transition hover:bg-[#f1d592] sm:mt-9"><HeartHandshake className="h-5 w-5" />Donate to the Jamia</a>
      <a href="#explore" className="mx-auto mt-9 flex w-fit items-center gap-2 text-xs font-medium text-white/55 transition hover:text-white/85 sm:mt-12"><ArrowDown className="h-4 w-4" />Explore</a>
    </div>
  </section>
);
