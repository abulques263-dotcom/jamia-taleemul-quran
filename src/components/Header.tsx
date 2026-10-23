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
    { label: 'About, Courses & Admissions', href: '#/academics', icon: GraduationCap },
    { label: 'Donation, Gallery & Contact', href: '#/support', icon: HeartHandshake },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#064e3b]/95 backdrop-blur-md shadow-xl border-b-4 border-[#d4af37] py-2' : 'bg-[#064e3b] border-b-4 border-[#d4af37] py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#/home" id="nav-brand-logo" className="flex min-w-0 items-center gap-3 group text-left">
            <div className="w-11 h-11 bg-[#d4af37] rounded-full flex items-center justify-center text-[#064e3b] text-2xl font-bold shadow-md group-hover:scale-105 transition-transform flex-shrink-0">ق</div>
            <div className="flex min-w-0 flex-col">
              <span dir="rtl" className="urdu text-lg sm:text-2xl font-bold text-white tracking-wide leading-tight select-none group-hover:text-[#f1d592] transition-colors">{INSTITUTION_DATA.nameUrdu}</span>
              <span className="text-[9px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-[#d4af37] uppercase mt-0.5 truncate">{INSTITUTION_DATA.nameEnglish} • Estd. 2006</span>
            </div>
          </a>
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => <a key={link.label} href={link.href} className="px-2 py-2 rounded text-xs font-medium text-white/90 hover:text-[#d4af37] hover:bg-white/5 transition-all">{link.label}</a>)}
          </nav>
          <div className="hidden sm:flex xl:hidden items-center gap-2">
            <a href="#/support" className="rounded-lg bg-[#d4af37] px-3 py-2 text-xs font-bold text-[#064e3b]">Donate</a>
            <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-3 py-2 text-xs font-bold text-white">WhatsApp</a>
          </div>
          <div className="flex xl:hidden items-center gap-2">
            <a href={`tel:${INSTITUTION_DATA.phone}`} className="sm:hidden p-2 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold" aria-label="Call"><Phone className="w-4 h-4" /></a>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} id="mobile-menu-toggle-btn" className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="xl:hidden max-h-[75vh] overflow-y-auto bg-[#064e3b] border-t-2 border-[#d4af37] px-4 pt-3 pb-6 shadow-2xl">
        <div className="text-center py-2 mb-2 border-b border-white/15"><span dir="rtl" className="urdu text-xl text-[#f1d592]">{INSTITUTION_DATA.nameUrdu}</span><p className="text-xs tracking-wider uppercase text-[#d4af37] mt-1">{INSTITUTION_DATA.nameEnglish}</p></div>
        <nav aria-label="Mobile navigation" className="grid grid-cols-1 gap-1">
          {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 hover:text-[#d4af37] transition-all"><span>{link.label}</span><ChevronRight className="w-4 h-4 text-[#d4af37]" /></a>)}
        </nav>
        <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-2.5">
          <a href={`tel:${INSTITUTION_DATA.phone}`} className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#d4af37] text-[#064e3b] text-xs font-bold uppercase tracking-wider"><Phone className="w-4 h-4" />Call Now</a>
          <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider"><MessageCircle className="w-4 h-4" />WhatsApp</a>
        </div>
        <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenProspectus(); }} className="mt-3 w-full rounded-lg border border-[#d4af37] py-3 text-sm font-semibold text-[#f1d592]">View Prospectus</button>
      </div>}
    </header>
  );
};
