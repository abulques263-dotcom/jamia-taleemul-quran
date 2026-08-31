import React, { useState, useEffect } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, Menu, X, BookOpen, Compass, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenProspectus: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProspectus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Taleem & Courses', href: '#courses' },
    { label: 'Our Teachers', href: '#teachers' },
    { label: 'Admission', href: '#admission' },
    { label: 'Prospectus', href: '#prospectus' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Community Support', href: '#donation' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#064e3b]/95 backdrop-blur-md shadow-xl border-b-4 border-[#d4af37] py-2' 
        : 'bg-[#064e3b] border-b-4 border-[#d4af37] py-3'
    }`}>
      {/* Top micro-bar for quick contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Institution Urdu + English Name */}
          <a href="#home" id="nav-brand-logo" className="flex items-center gap-3.5 group text-left">
            <div className="w-11 h-11 bg-[#d4af37] rounded-full flex items-center justify-center text-[#064e3b] text-2xl font-bold shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              ق
            </div>
            <div className="flex flex-col">
              <span 
                dir="rtl" 
                className="urdu text-xl sm:text-2xl font-bold text-white tracking-wide leading-none select-none group-hover:text-[#f1d592] transition-colors"
              >
                {INSTITUTION_DATA.nameUrdu}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#d4af37] uppercase mt-0.5">
                {INSTITUTION_DATA.nameEnglish} • Estd. 2006
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 rounded text-xs xl:text-sm uppercase tracking-wider font-sans font-medium text-white/90 hover:text-[#d4af37] hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Phone & WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${INSTITUTION_DATA.phone}`}
              id="header-call-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-[#064e3b] hover:bg-[#e5c158] shadow-sm transition-all"
              title="Call Jamia Taleemul Quran"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20Jamia%20Taleemul%20Quran`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] shadow-sm transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${INSTITUTION_DATA.phone}`}
              className="sm:hidden p-2 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#064e3b] border-t-2 border-[#d4af37] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="text-center py-2 mb-2 border-b border-white/15">
            <span dir="rtl" className="urdu text-2xl text-[#f1d592]">
              {INSTITUTION_DATA.nameUrdu}
            </span>
            <p className="text-xs tracking-wider uppercase text-[#d4af37] mt-0.5">{INSTITUTION_DATA.nameEnglish}</p>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-sans font-medium text-white hover:bg-white/10 hover:text-[#d4af37] transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-2.5">
            <a
              href={`tel:${INSTITUTION_DATA.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#d4af37] text-[#064e3b] text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20Jamia%20Taleemul%20Quran`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
