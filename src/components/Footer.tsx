import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, MapPin, BookOpen, ChevronRight, ArrowUp, HeartHandshake, BookMarked, Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const quickLinks = [
    { label: 'Home', href: '#/home' }, { label: 'About & Courses', href: '#/academics' }, { label: 'Teachers & Staff', href: '#/academics' }, { label: 'Admissions', href: '#/academics' }, { label: 'Qur’an Learning', href: '#/academics' }, { label: 'Hadith Library', href: '#/hadith', icon: BookMarked }, { label: 'Deoband Fatwa', href: '#/fatwa', icon: Scale }, { label: 'Donate', href: '#/donate', icon: HeartHandshake }, { label: 'Photo Gallery', href: '#/gallery' }, { label: 'Contact', href: '#/contact' },
  ];
  return (
    <footer className="relative overflow-hidden border-t-4 border-[#d4af37] bg-[#102a43] text-white">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl border-b border-white/10 pb-8 text-center sm:pb-10">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-[#102a43] shadow-md sm:h-14 sm:w-14"><BookOpen className="h-6 w-6 sm:h-7 sm:w-7" /></div>
          <h2 dir="rtl" className="urdu select-none text-3xl font-bold leading-[1.7] text-white sm:text-4xl">{INSTITUTION_DATA.nameUrdu}</h2>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#f1d592]">{INSTITUTION_DATA.nameEnglish} • Estd. 2006</div>
          <p dir="rtl" className="urdu mt-2 text-lg leading-[1.8] text-[#f1d592]">{INSTITUTION_DATA.taglineUrdu}</p>
          <p className="mx-auto mt-2 max-w-xl text-xs italic leading-5 text-stone-300">“{INSTITUTION_DATA.taglineEnglish}”</p>
        </div>
        <div className="grid gap-8 border-b border-white/10 py-8 text-sm sm:grid-cols-2 sm:gap-10 sm:py-9 lg:grid-cols-3">
          <div className="space-y-2"><h3 className="text-xs font-bold uppercase tracking-wider text-[#f1d592]">About Jamia</h3><p className="text-xs leading-5 text-stone-300 sm:text-sm">Founded in 2006 by Qari Ashfaque for Qur’anic education, Islamic learning, moral upbringing and essential academic education.</p><p className="text-xs text-[#f1d592]">Founder / Mohtamim: <strong className="text-white">Qari Ashfaque (قاری اشفاق)</strong></p></div>
          <div className="space-y-2"><h3 className="text-xs font-bold uppercase tracking-wider text-[#f1d592]">Quick Links</h3><nav className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs sm:text-sm">{quickLinks.map(({label,href})=><a key={label} href={href} className="flex min-h-8 items-center gap-1.5 text-stone-300 transition hover:text-[#f1d592]"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#d4af37]" />{label}</a>)}</nav></div>
          <div className="space-y-2"><h3 className="text-xs font-bold uppercase tracking-wider text-[#f1d592]">Contact Us</h3><div className="space-y-2 text-xs text-stone-300 sm:text-sm"><div className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-[#d4af37]" /><a href={`tel:${INSTITUTION_DATA.phone}`} className="font-mono hover:text-white">{INSTITUTION_DATA.phoneFormatted}</a></div><div className="flex items-center gap-3"><MessageCircle className="h-4 w-4 shrink-0 text-[#d4af37]" /><a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono hover:text-white">{INSTITUTION_DATA.whatsappFormatted}</a></div><div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" /><span className="leading-5">{INSTITUTION_DATA.address}</span></div></div></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center text-[10px] text-stone-400 sm:flex-row sm:text-left sm:text-xs"><span>{INSTITUTION_DATA.copyright}</span><button onClick={scrollToTop} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 font-bold uppercase tracking-wider text-stone-200 transition hover:bg-white/20"><span>Back to Top</span><ArrowUp className="h-3.5 w-3.5" /></button></div>
      </div>
    </footer>
  );
};
