import React, { useState, useEffect } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Menu, X, ChevronRight, HeartHandshake, BookOpen, GraduationCap, Users, Images, Phone, ScrollText, Languages, Sparkles, BookMarked, Scale } from 'lucide-react';

interface HeaderProps { onOpenProspectus: () => void; }
type Language = 'en' | 'hi' | 'ur';
const navText: Record<Language, { study:string; admission:string; quran:string; hadith:string; fatwa:string; teachers:string; gallery:string; contact:string; explore:string; donate:string; lang:string; }> = {
  en: { study:'Study & Courses', admission:'Admissions', quran:'Qur’an', hadith:'Hadith', fatwa:'Deoband Fatwa', teachers:'Our Teachers', gallery:'Gallery', contact:'Contact', explore:'Explore the Jamia', donate:'Donate', lang:'Language' },
  hi: { study:'पढ़ाई और कोर्स', admission:'दाख़िला', quran:'क़ुरआन', hadith:'हदीस', fatwa:'देवबंद फ़तवा', teachers:'हमारे शिक्षक', gallery:'गैलरी', contact:'संपर्क', explore:'जामिया देखें', donate:'दान', lang:'भाषा' },
  ur: { study:'تعلیم اور کورسز', admission:'داخلہ', quran:'قرآن', hadith:'حدیث', fatwa:'دیوبند فتویٰ', teachers:'اساتذہ', gallery:'گیلری', contact:'رابطہ', explore:'جامعہ دیکھیں', donate:'عطیہ', lang:'زبان' },
};
const languageNames: Record<Language,string> = { en:'English', hi:'हिंदी', ur:'اردو' };

export const Header: React.FC<HeaderProps> = ({ onOpenProspectus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    try { const saved = localStorage.getItem('jamia-language') as Language | null; return saved && ['en','hi','ur'].includes(saved) ? saved : 'en'; } catch { return 'en'; }
  });
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    try { if (!localStorage.getItem('jamia-language')) setShowLanguagePrompt(true); } catch { /* browser storage unavailable */ }
  }, []);
  const chooseLanguage = (value: Language) => {
    setLanguage(value);
    try { localStorage.setItem('jamia-language', value); } catch { /* browser storage unavailable */ }
    setShowLanguagePrompt(false);
  };
  const t = navText[language];
  const navLinks = [
    { label: t.study, href: '#/academics', icon: BookOpen },
    { label: t.admission, href: '#/academics%23admission', icon: GraduationCap },
    { label: t.quran, href: '#/quran', icon: ScrollText },
    { label: t.hadith, href: '#/hadith', icon: BookMarked },
    { label: t.fatwa, href: '#/fatwa', icon: Scale },
    { label: t.teachers, href: '#/academics%23teachers', icon: Users },
    { label: t.gallery, href: '#/gallery', icon: Images },
    { label: t.contact, href: '#/contact', icon: Phone },
  ];

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#d4af37]/50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-[#102a43]/95 py-2 shadow-lg backdrop-blur-md' : 'bg-[#102a43]/90 py-2.5 backdrop-blur-sm sm:py-3'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            <a href="#/home" id="nav-brand-logo" className="flex min-w-0 items-center gap-2 text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-lg font-bold text-[#102a43] sm:h-10 sm:w-10">ق</span>
              <span className="flex min-w-0 flex-col"><span dir="rtl" className="urdu whitespace-nowrap text-[clamp(.75rem,3.8vw,.95rem)] font-bold leading-[1.35] text-white sm:text-xl">{INSTITUTION_DATA.nameUrdu}</span><span className="mt-0.5 truncate text-[8px] font-medium uppercase tracking-[.12em] text-[#f1d592] sm:text-[10px]">{INSTITUTION_DATA.nameEnglish}</span></span>
            </a>
            <nav aria-label="Quick links" className="hidden items-center gap-4 text-xs font-semibold text-white/85 lg:flex xl:gap-5">{[navLinks[2], navLinks[3], navLinks[1], navLinks[6]].map(({label,href}) => <a key={label} href={href} className="transition hover:text-[#f1d592]">{label}</a>)}</nav>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <label className="flex h-9 items-center gap-1 rounded-lg border border-white/15 px-2 text-white sm:h-10" title={t.lang}><Languages className="h-4 w-4 text-[#f1d592]" /><select value={language} onChange={(e) => chooseLanguage(e.target.value as Language)} aria-label={t.lang} className="max-w-[74px] bg-transparent text-[10px] font-semibold outline-none sm:max-w-none sm:text-xs"><option value="en" className="text-[#102a43]">EN</option><option value="hi" className="text-[#102a43]">हिंदी</option><option value="ur" className="text-[#102a43]">اردو</option></select></label>
              <a href="#/donate" className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-gradient-to-br from-[#f1d592] to-[#d4af37] px-2.5 py-2 text-[11px] font-bold text-[#102a43] shadow-md shadow-black/15 transition hover:brightness-105 sm:min-h-10 sm:px-4 sm:text-sm"><HeartHandshake className="h-4 w-4" />{t.donate}</a>
              <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} id="mobile-menu-toggle-btn" className="rounded-lg p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && <div className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-[#d4af37]/25 bg-[#102a43]/[.98] px-4 pb-6 pt-4 shadow-2xl backdrop-blur-xl sm:px-6">
          <div className="mx-auto max-w-xl"><p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[.24em] text-[#d4af37]">{t.explore}</p>
            <nav aria-label="Jamia sections" className="grid grid-cols-1 gap-1 sm:grid-cols-2">{navLinks.map(({label,href,icon:Icon}) => <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="group flex min-h-12 items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/90 transition hover:bg-white/[.07] hover:text-[#f1d592]"><span className="flex items-center gap-3"><Icon className="h-4 w-4 text-[#d4af37]" />{label}</span><ChevronRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-0.5 group-hover:text-[#d4af37]" /></a>)}</nav>
            <div className="mt-4 border-t border-white/10 pt-4"><button type="button" onClick={() => { setMobileMenuOpen(false); onOpenProspectus(); }} className="w-full rounded-xl border border-[#d4af37]/35 px-4 py-3 text-sm font-medium text-[#f1d592] transition hover:bg-white/[.07]"><ScrollText className="mr-2 inline h-4 w-4" />View Prospectus</button>
              <a href="#/contact" onClick={() => setMobileMenuOpen(false)} className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white/[.06] px-3 py-2 text-xs font-medium text-white/90"><Phone className="h-4 w-4 text-[#d4af37]" />{t.contact}</a>
            </div>
          </div>
        </div>}
      </header>
      {showLanguagePrompt && <div className="no-print fixed inset-0 z-[90] flex items-center justify-center bg-[#102a43]/65 p-4" role="presentation"><section role="dialog" aria-modal="true" aria-labelledby="language-title" className="w-full max-w-sm rounded-2xl border border-[#d4af37]/50 bg-[#fffdf7] p-5 shadow-2xl"><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><Languages className="h-5 w-5" /></span><h2 id="language-title" className="mt-3 text-lg font-bold text-[#102a43]">Choose your language</h2><p className="mt-1 text-sm text-stone-600">اپنی زبان منتخب کریں · अपनी भाषा चुनें</p><div className="mt-4 grid grid-cols-3 gap-2">{(['en','hi','ur'] as Language[]).map((value) => <button key={value} onClick={() => chooseLanguage(value)} className="min-h-12 rounded-xl border border-[#d4af37]/50 bg-white px-2 text-sm font-semibold text-[#102a43] hover:bg-[#fdf8ed]">{languageNames[value]}</button>)}</div><p className="mt-3 text-center text-[10px] leading-4 text-stone-500">This updates the menu language and saves your choice on this device.</p></section></div>}
    </>
  );
};
