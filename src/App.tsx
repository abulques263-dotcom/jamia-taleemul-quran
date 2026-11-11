import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
import { Phone, MessageCircle, ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { INSTITUTION_DATA } from './data/institutionData';

type Page = 'home' | 'academics' | 'donate' | 'gallery' | 'contact' | 'hadith' | 'fatwa';
const readPage = (): Page => {
  const route = window.location.hash.replace(/^#\/?/, '').split('/')[0].split('#')[0];
  return ['academics', 'donate', 'gallery', 'contact', 'hadith', 'fatwa'].includes(route) ? route as Page : route === 'support' ? 'donate' : 'home';
};

export default function App() {
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [page, setPage] = useState<Page>(readPage);
  useEffect(() => {
    const syncRoute = () => { const nextPage = readPage(); setPage(nextPage); window.setTimeout(() => { const id = window.location.hash.split('#')[2]; if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); };
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);
  useEffect(() => { if (!window.location.hash.includes('#', 2)) window.scrollTo(0, 0); }, [page]);
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8ed] text-[#172b4d] font-sans selection:bg-[#102a43] selection:text-[#f1d592]">
      <Header onOpenProspectus={() => setIsProspectusModalOpen(true)} />
      <main className="flex-grow">
        {page === 'home' && <>
          <Hero />
          <section id="explore" className="bg-white py-10 sm:py-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6 text-center sm:mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#9a7416]">Explore Jamia</p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-[#102a43] sm:text-4xl">Where would you like to go?</h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-stone-600">Choose a section to learn about the Jamia, courses, admissions and community.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {[
                  { title: 'About & Learning', text: 'Learn about the Jamia, courses and Qur’an education.', icon: BookOpen, route: 'academics' as Page, label: 'Explore learning' },
                  { title: 'Teachers & Admissions', text: 'Meet the teaching team and find admission information.', icon: GraduationCap, route: 'academics' as Page, label: 'View details' },
                  { title: 'Gallery & Contact', text: 'See photos, ask a question or contact the Jamia.', icon: Users, route: 'gallery' as Page, label: 'View gallery' },
                ].map((item) => <button key={item.title} onClick={() => { window.location.hash = `#/${item.route}`; }} className="group rounded-2xl border border-stone-200 bg-[#fdf8ed] p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-lg sm:p-6">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592] sm:mb-4 sm:h-12 sm:w-12"><item.icon className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                  <h3 className="font-serif text-lg font-bold text-[#102a43] sm:text-xl">{item.title}</h3><p className="mt-1.5 text-sm leading-5 text-stone-600 sm:mt-2 sm:leading-6">{item.text}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#102a43] sm:mt-4">{item.label}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </button>)}
              </div>
              <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#d4af37]/40 bg-[#fdf8ed] p-4 text-center sm:mt-7 sm:flex-row sm:p-5 sm:text-left"><div><h3 className="font-semibold text-[#102a43]">Need help or admission information?</h3><p className="mt-1 text-sm text-stone-600">Call or message the Jamia team.</p></div><a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#102a43] px-4 py-3 text-sm font-bold text-white hover:bg-[#183c5b]"><MessageCircle className="h-4 w-4" />Message us</a></div>
            </div>
          </section>
        </>}
        {page === 'academics' && <>
          <div className="bg-islamic-pattern px-4 pb-8 pt-24 text-center text-white sm:pb-10 sm:pt-28"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#f1d592]">The Jamia</p><h1 className="urdu mt-2 text-2xl font-bold sm:text-4xl">تعلیم و تربیت</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">Study, admissions and student life at Jamia Taleemul Quran.</p></div>
          <AboutSection /><CoursesSection /><QuranSection /><StudentsSection /><TeachersSection /><AdmissionSection /><ProspectusSection onOpenModal={() => setIsProspectusModalOpen(true)} />
        </>}
        {page === 'donate' && <><div className="bg-islamic-pattern relative overflow-hidden px-4 pb-10 pt-24 text-center text-white sm:pb-14 sm:pt-28"><div className="relative mx-auto max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#f1d592]"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Community support</span><h1 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl">Support the Jamia</h1><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">Help sustain Qur’anic education, learning and care for the community.</p></div></div><DonationSection /></>}
        {page === 'gallery' && <><div className="bg-islamic-pattern px-4 pb-8 pt-24 text-center text-white sm:pb-10 sm:pt-28"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#f1d592]">Life at the Jamia</p><h1 className="mt-2 font-serif text-3xl font-semibold sm:text-5xl">Gallery</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">A glimpse into the learning environment and community.</p></div><GallerySection /></>}
        {page === 'contact' && <><div className="bg-islamic-pattern px-4 pb-8 pt-24 text-center text-white sm:pb-10 sm:pt-28"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#f1d592]">Get in touch</p><h1 className="mt-2 font-serif text-3xl font-semibold sm:text-5xl">Contact the Jamia</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">For admissions, learning programmes, visits and support.</p></div><ContactSection /></>}
        {page === 'hadith' && <HadithPage />}
        {page === 'fatwa' && <FatwaPage />}
      </main>
      <Footer /><ProspectusModal isOpen={isProspectusModalOpen} onClose={() => setIsProspectusModalOpen(false)} /><ChatbotWidget />
      <div className="fixed bottom-5 right-20 z-40 flex flex-col gap-2 sm:hidden no-print"><a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum`} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white" aria-label="Chat on WhatsApp"><MessageCircle className="h-5 w-5" /></a><a href={`tel:${INSTITUTION_DATA.phone}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#102a43] text-[#f1d592] shadow-lg ring-2 ring-white" aria-label="Call Jamia Taleemul Quran"><Phone className="h-4 w-4" /></a></div>
    </div>
  );
}
