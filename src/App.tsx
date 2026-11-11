import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { TeachersSection } from './components/TeachersSection';
import { StudentsSection } from './components/StudentsSection';
import { AdmissionSection } from './components/AdmissionSection';
import { ProspectusSection } from './components/ProspectusSection';
import { GallerySection } from './components/GallerySection';
import { DonationSection } from './components/DonationSection';
import { QuranSection } from './components/QuranSection';
import { ContactSection } from './components/ContactSection';
import { HadithPage } from './components/HadithPage';
import { FatwaPage } from './components/FatwaPage';
import { Footer } from './components/Footer';
import { ProspectusModal } from './components/ProspectusModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ContactActionWidget } from './components/ContactActionWidget';

type Page = 'home' | 'academics' | 'quran' | 'donate' | 'gallery' | 'contact' | 'hadith' | 'fatwa';
const readPage = (): Page => {
  const route = decodeURIComponent(window.location.hash).replace(/^#\/?/, '').split('/')[0].split('#')[0];
  return ['academics', 'quran', 'donate', 'gallery', 'contact', 'hadith', 'fatwa'].includes(route) ? route as Page : route === 'support' ? 'donate' : 'home';
};

export default function App() {
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [page, setPage] = useState<Page>(readPage);
  useEffect(() => {
    const syncRoute = () => { const nextPage = readPage(); setPage(nextPage); window.setTimeout(() => { const id = decodeURIComponent(window.location.hash).split('#').slice(2).join('#'); if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); };
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);
  useEffect(() => { if (!window.location.hash.includes('#', 2)) window.scrollTo(0, 0); }, [page]);
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8ed] text-[#172b4d] font-sans selection:bg-[#102a43] selection:text-[#f1d592]">
      <Header onOpenProspectus={() => setIsProspectusModalOpen(true)} />
      <main className="flex-grow">
        {page === 'home' && <HomePage />}
        {page === 'quran' && <><QuranSection /></>}
        {page === 'academics' && <>
          <div className="bg-islamic-pattern px-4 pb-8 pt-24 text-center text-white sm:pb-10 sm:pt-28"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#f1d592]">The Jamia</p><h1 className="urdu mt-2 text-2xl font-bold sm:text-4xl">تعلیم و تربیت</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">Study, admissions and student life at Jamia Taleemul Quran.</p></div>
          <AboutSection /><CoursesSection /><QuranSection /><StudentsSection /><TeachersSection /><AdmissionSection /><ProspectusSection onOpenModal={() => setIsProspectusModalOpen(true)} />
        </>}
        {page === 'donate' && <DonationSection />}
        {page === 'gallery' && <><div className="bg-islamic-pattern px-4 pb-8 pt-24 text-center text-white sm:pb-10 sm:pt-28"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#f1d592]">Life at the Jamia</p><h1 className="mt-2 font-serif text-3xl font-semibold sm:text-5xl">Gallery</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">A glimpse into the learning environment and community.</p></div><GallerySection /></>}
        {page === 'contact' && <><div className="bg-islamic-pattern px-4 pb-8 pt-24 text-center text-white sm:pb-10 sm:pt-28"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#f1d592]">Get in touch</p><h1 className="mt-2 font-serif text-3xl font-semibold sm:text-5xl">Contact the Jamia</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">For admissions, learning programmes, visits and support.</p></div><ContactSection /></>}
        {page === 'hadith' && <HadithPage />}
        {page === 'fatwa' && <FatwaPage />}
      </main>
      <Footer /><ProspectusModal isOpen={isProspectusModalOpen} onClose={() => setIsProspectusModalOpen(false)} /><ChatbotWidget />
      <ContactActionWidget />
    </div>
  );
}
