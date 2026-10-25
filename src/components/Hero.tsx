import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, GraduationCap, HeartHandshake, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden bg-islamic-pattern pt-28 pb-10 text-white sm:pt-32 sm:pb-14">
    <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#f1d592]">
        <span className="h-2 w-2 rounded-full bg-[#d4af37]" /> {INSTITUTION_DATA.admissionsStatus} <span className="text-white/50">·</span> Established 2006
      </div>
      <h1 dir="rtl" className="urdu text-4xl font-bold leading-[1.7] text-white sm:text-6xl">{INSTITUTION_DATA.nameUrdu}</h1>
      <p className="mt-2 text-xs font-bold uppercase tracking-[.18em] text-[#f1d592] sm:text-sm">{INSTITUTION_DATA.nameEnglish}</p>
      <div className="mx-auto my-5 flex max-w-xs items-center justify-center gap-3"><span className="h-px flex-1 bg-[#d4af37]/60" /><span className="h-2 w-2 rotate-45 border border-[#d4af37]" /><span className="h-px flex-1 bg-[#d4af37]/60" /></div>
      <p dir="rtl" className="urdu text-xl font-semibold leading-[1.8] text-[#f1d592] sm:text-2xl">{INSTITUTION_DATA.taglineUrdu}</p>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">{INSTITUTION_DATA.taglineEnglish}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href="#/support" id="hero-donate-btn" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-bold text-[#102a43] shadow-lg transition hover:bg-[#f1d592]"><HeartHandshake className="h-5 w-5" />Donate</a>
        <a href="#/academics" id="hero-admission-btn" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"><GraduationCap className="h-5 w-5 text-[#f1d592]" />About & Admissions</a>
        <a href="#/support" id="hero-contact-btn" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d4af37]/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"><MessageCircle className="h-5 w-5 text-[#f1d592]" />Contact</a>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-200 sm:text-sm">
        <a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex items-center gap-2 hover:text-[#f1d592]"><Phone className="h-4 w-4 text-[#f1d592]" />{INSTITUTION_DATA.phoneFormatted}</a>
        <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#f1d592]"><MessageCircle className="h-4 w-4 text-[#25D366]" />WhatsApp</a>
      </div>
      <div className="mx-auto mt-8 grid max-w-3xl gap-3 border-t border-white/10 pt-5 text-left sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#f1d592]">Established</p><p className="mt-1 text-sm font-semibold text-white">Since 2006</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#f1d592]">Qur’an education</p><p className="mt-1 text-sm font-semibold text-white">Reading & memorisation</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#f1d592]">Community</p><p className="mt-1 text-sm font-semibold text-white">Local support and learning</p></div>
      </div>
      <a href="#explore" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white"><ArrowDown className="h-4 w-4" />Explore the website</a>
    </div>
  </section>
);
