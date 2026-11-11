import React, { useState, useEffect } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Menu, X, ChevronRight, HeartHandshake, BookOpen, GraduationCap, Users, Images, Phone, ScrollText } from 'lucide-react';

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
    { label: 'Study & Courses', href: '#/academics', icon: BookOpen },
    { label: 'Admissions', href: '#/academics#admission', icon: GraduationCap },
    { label: 'Qur’an', href: '#/academics#quran', icon: ScrollText },
    { label: 'Our Teachers', href: '#/academics#teachers', icon: Users },
    { label: 'Gallery', href: '#/gallery', icon: Images },
    { label: 'Contact', href: '#/contact', icon: Phone },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#d4af37]/50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-[#102a43]/95 py-2 shadow-lg backdrop-blur-md' : 'bg-[#102a43]/90 py-2.5 backdrop-blur-sm sm:py-3'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#/home" id="nav-brand-logo" className="flex min-w-0 items-center gap-2.5 text-left">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-lg font-bold text-[#102a43] sm:h-10 sm:w-10">ق</span>
            <span className="flex min-w-0 flex-col">
              <span dir="rtl" className="urdu whitespace-nowrap text-[clamp(.8rem,4vw,1rem)] font-bold leading-[1.35] text-white sm:text-xl">{INSTITUTION_DATA.nameUrdu}</span>
              <span className="mt-0.5 truncate text-[8px] font-medium uppercase tracking-[.12em] text-[#f1d592] sm:text-[10px]">{INSTITUTION_DATA.nameEnglish}</span>
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#/donate" className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-[#d4af37] px-3 py-2 text-xs font-bold text-[#102a43] transition hover:bg-[#f1d592] sm:min-h-10 sm:px-4 sm:text-sm"><HeartHandshake className="h-4 w-4" />Donate</a>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} id="mobile-menu-toggle-btn" className="rounded-lg p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-[#d4af37]/25 bg-[#102a43]/[.98] px-4 pb-6 pt-4 shadow-2xl backdrop-blur-xl sm:px-6">
        <div className="mx-auto max-w-xl">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[.24em] text-[#d4af37]">Explore the Jamia</p>
          <nav aria-label="Jamia sections" className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {navLinks.map(({label, href, icon: Icon}) => <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="group flex min-h-12 items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/90 transition hover:bg-white/[.07] hover:text-[#f1d592]">
              <span className="flex items-center gap-3"><Icon className="h-4 w-4 text-[#d4af37]" />{label}</span><ChevronRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-0.5 group-hover:text-[#d4af37]" />
            </a>)}
          </nav>
          <div className="mt-4 border-t border-white/10 pt-4">
            <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenProspectus(); }} className="w-full rounded-xl border border-[#d4af37]/35 px-4 py-3 text-sm font-medium text-[#f1d592] transition hover:bg-white/[.07]"><ScrollText className="mr-2 inline h-4 w-4" />View Prospectus</button>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={`tel:${INSTITUTION_DATA.phone}`} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white/[.06] px-3 py-2 text-xs font-medium text-white/80"><Phone className="h-4 w-4 text-[#d4af37]" />Call Jamia</a>
              <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white/[.06] px-3 py-2 text-xs font-medium text-white/80"><span className="h-2 w-2 rounded-full bg-[#25D366]" />WhatsApp</a>
            </div>
          </div>
        </div>
      </div>}
    </header>
  );
};
