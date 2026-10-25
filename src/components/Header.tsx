import React, { useState, useEffect } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, Menu, X, BookOpen, ChevronRight, HeartHandshake, GraduationCap } from 'lucide-react';

interface HeaderProps { onOpenProspectus: () => void; }

export const Header: React.FC<HeaderProps> = ({ onOpenProspectus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#/home', icon: BookOpen },
    { label: 'About & Learning', href: '#/academics', icon: GraduationCap },
    { label: 'Gallery & Contact', href: '#/support', icon: HeartHandshake },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#102a43]/95 backdrop-blur-md shadow-xl border-b border-[#d4af37]/80 py-2' : 'bg-[#102a43] border-b border-[#d4af37]/80 py-3'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#/home" id="nav-brand-logo" className="flex min-w-0 items-center gap-2.5 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-xl font-bold text-[#102a43] shadow-md">ق</div>
            <div className="flex min-w-0 flex-col">
              <span dir="rtl" className="urdu select-none text-base font-bold leading-tight text-white sm:text-xl">{INSTITUTION_DATA.nameUrdu}</span>
              <span className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-wide text-[#f1d592] sm:text-[11px]">{INSTITUTION_DATA.nameEnglish} · Estd. 2006</span>
            </div>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => <a key={link.label} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-[#f1d592]">{link.label}</a>)}
            <a href="#/support" className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-bold text-[#102a43] shadow-sm transition hover:bg-[#f1d592]"><HeartHandshake className="h-4 w-4" />Donate</a>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <a href="#/support" className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-[#d4af37] px-3 py-2 text-xs font-bold text-[#102a43] sm:text-sm"><HeartHandshake className="h-4 w-4" />Donate</a>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} id="mobile-menu-toggle-btn" className="rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="max-h-[75vh] overflow-y-auto border-t border-[#d4af37]/40 bg-[#102a43] px-4 pb-6 pt-3 shadow-2xl lg:hidden">
        <nav aria-label="Mobile navigation" className="grid grid-cols-1 gap-1">
          {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[#f1d592]"><span>{link.label}</span><ChevronRight className="h-4 w-4 text-[#d4af37]" /></a>)}
        </nav>
        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/15 pt-4">
          <a href={`tel:${INSTITUTION_DATA.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-xs font-bold text-white"><Phone className="h-4 w-4" />Call Now</a>
          <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a>
        </div>
        <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenProspectus(); }} className="mt-3 w-full rounded-xl border border-[#d4af37]/70 py-3 text-sm font-semibold text-[#f1d592]">View Prospectus</button>
      </div>}
    </header>
  );
};
