import React from 'react';
import { ArrowDown, BookMarked, BookOpen, GraduationCap, Images } from 'lucide-react';
import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { CoursesSection } from './CoursesSection';
import { TeachersSection } from './TeachersSection';
import { StudentsSection } from './StudentsSection';
import { AdmissionSection } from './AdmissionSection';
import { ProspectusSection } from './ProspectusSection';
import { GallerySection } from './GallerySection';
import { DonationSection } from './DonationSection';
import { QuranSection } from './QuranSection';
import { ContactSection } from './ContactSection';
import { HadithPage } from './HadithPage';

interface HomePageProps { onOpenProspectus: () => void; }

const shortcuts = [
  { title: 'Read the Qur’an', detail: 'Arabic text, all 30 Juz, English or Urdu translation', href: '#home-quran', icon: BookOpen },
  { title: 'Read Hadith', detail: 'Open trusted Hadith collections and search', href: '#home-hadith', icon: BookMarked },
  { title: 'See the Jamia', detail: 'Photos of classes, students and staff', href: '#home-gallery', icon: Images },
  { title: 'Admissions', detail: 'Find out how to contact us about joining', href: '#home-admission', icon: GraduationCap },
];

export const HomePage: React.FC<HomePageProps> = ({ onOpenProspectus }) => (
  <>
    <Hero />
    <section aria-labelledby="start-here-title" className="bg-[#fffdf7] py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-3 sm:mb-5">
          <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9a7416]">Start here</p><h2 id="start-here-title" className="mt-1 font-serif text-xl font-bold text-[#102a43] sm:text-2xl">What would you like to do?</h2></div>
          <a href="#home-quran" className="hidden items-center gap-1 text-xs font-semibold text-[#102a43] sm:inline-flex">Explore <ArrowDown className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          {shortcuts.map(({ title, detail, href, icon: Icon }) => <a key={title} href={href} className="group flex min-h-32 flex-col rounded-2xl border border-stone-200 bg-white p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:shadow-md sm:min-h-36 sm:p-4">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><Icon className="h-4.5 w-4.5" /></span>
            <span className="text-sm font-bold leading-5 text-[#102a43]">{title}</span><span className="mt-1 text-[11px] leading-4 text-stone-500 sm:text-xs sm:leading-5">{detail}</span>
          </a>)}
        </div>
      </div>
    </section>
    <div id="home-quran" className="scroll-mt-24"><QuranSection /></div>
    <div id="home-hadith" className="scroll-mt-24"><HadithPage /></div>
    <div id="home-gallery" className="scroll-mt-24"><GallerySection /></div>
    <AboutSection />
    <CoursesSection />
    <StudentsSection />
    <TeachersSection />
    <div id="home-admission" className="scroll-mt-24"><AdmissionSection /></div>
    <ProspectusSection onOpenModal={onOpenProspectus} />
    <DonationSection />
    <ContactSection />
  </>
);
