import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, GraduationCap, HeartHandshake, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden bg-islamic-pattern pb-8 pt-24 text-white sm:pb-14 sm:pt-32">
    <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#f1d592] sm:mb-4">
        <span className="h-2 w-2 rounded-full bg-[#d4af37]" /> {INSTITUTION_DATA.admissionsStatus} <span className="text-white/50">·</span> Established 2006
      </div>
      <h1 dir="rtl" className="urdu mx-auto w-full whitespace-nowrap text-[clamp(1.55rem,7.3vw,3.75rem)] font-bold leading-[1.45] text-white sm:leading-[1.7]">{INSTITUTION_DATA.nameUrdu}</h1>
      <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-[#f1d592] sm:mt-2 sm:text-sm">{INSTITUTION_DATA.nameEnglish}</p>
      <div className="mx-auto my-3 flex max-w-xs items-center justify-center gap-3 sm:my-5"><span className="h-px flex-1 bg-[#d4af37]/60" /><span className="h-2 w-2 rotate-45 border border-[#d4af37]" /><span className="h-px flex-1 bg-[#d4af37]/60" /></div>
      <p dir="rtl" className="urdu text-lg font-semibold leading-[1.5] text-[#f1d592] sm:text-2xl sm:leading-[1.8]">{INSTITUTION_DATA.taglineUrdu}</p>
      <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-200 sm:mt-3 sm:text-base sm:leading-7">{INSTITUTION_DATA.taglineEnglish}</p>
      <div className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
        <a href="#/donate" id="hero-donate-btn" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 py-3 text-sm font-bold text-[#102a43] shadow-lg transition hover:bg-[#f1d592] sm:px-6"><HeartHandshake className="h-5 w-5" />Donate</a>
        <a href="#/academics" id="hero-admission-btn" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-3 text-xs font-bold text-white transition hover:bg-white/15 sm:px-5 sm:text-sm"><GraduationCap className="h-5 w-5 shrink-0 text-[#f1d592]" />About & Admissions</a>
        <a href="#/contact" id="hero-contact-btn" className="col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#d4af37]/60 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 sm:col-span-1 sm:min-h-12 sm:py-3"><MessageCircle className="h-5 w-5 text-[#f1d592]" />Contact</a>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-200 sm:mt-5 sm:text-sm">
        <a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex items-center gap-2 hover:text-[#f1d592]"><Phone className="h-4 w-4 text-[#f1d592]" />{INSTITUTION_DATA.phoneFormatted}</a>
        <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#f1d592]"><MessageCircle className="h-4 w-4 text-[#25D366]" />WhatsApp</a>
      </div>
      <div className="mx-auto mt-5 grid max-w-3xl gap-2 border-t border-white/10 pt-4 text-left sm:mt-8 sm:grid-cols-3 sm:gap-3 sm:pt-5">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#f1d592]">Established</p><p className="mt-1 text-sm font-semibold text-white">Since 2006</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#f1d592]">Qur’an education</p><p className="mt-1 text-sm font-semibold text-white">Reading & memorisation</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#f1d592]">Community</p><p className="mt-1 text-sm font-semibold text-white">Local support and learning</p></div>
      </div>
      <a href="#explore" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white sm:mt-5"><ArrowDown className="h-4 w-4" />Explore the website</a>
    </div>
  </section>
);
