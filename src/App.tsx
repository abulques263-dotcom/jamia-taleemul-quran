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
import { Footer } from './components/Footer';
import { ProspectusModal } from './components/ProspectusModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { Phone, MessageCircle, ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { INSTITUTION_DATA } from './data/institutionData';

type Page = 'home' | 'academics' | 'donate' | 'gallery' | 'contact';
const readPage = (): Page => {
  const route = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return ['academics', 'donate', 'gallery', 'contact'].includes(route) ? route as Page : route === 'support' ? 'donate' : 'home';
};

export default function App() {
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [page, setPage] = useState<Page>(readPage);

  useEffect(() => {
    const syncRoute = () => setPage(readPage());
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const goTo = (next: Page) => {
    window.location.hash = next === 'home' ? '#/home' : `#/${next}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8ed] text-[#172b4d] font-sans selection:bg-[#102a43] selection:text-[#f1d592]">
      <Header onOpenProspectus={() => setIsProspectusModalOpen(true)} />
      <main className="flex-grow">
        {page === 'home' && <>
          <Hero />
          <section id="explore" className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#9a7416]">Explore Jamia</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#102a43] sm:text-4xl">Where would you like to go?</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-600">Choose a section below. You can always use the menu at the top—or the buttons at the bottom on your phone—to find your way around.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'About & Learning', text: 'Learn about the Jamia, courses and Qur’an education.', icon: BookOpen, route: 'academics' as Page, label: 'Explore learning' },
                  { title: 'Teachers & Admissions', text: 'Meet the teaching team and find admission information.', icon: GraduationCap, route: 'academics' as Page, label: 'View details' },
                  { title: 'Gallery & Contact', text: 'See photos, ask a question or contact the Jamia.', icon: Users, route: 'gallery' as Page, label: 'View gallery' },
                ].map((item) => <button key={item.title} onClick={() => goTo(item.route)} className="group rounded-2xl border border-stone-200 bg-[#fdf8ed] p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-lg sm:p-6">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><item.icon className="h-6 w-6" /></span>
                  <h3 className="font-serif text-xl font-bold text-[#102a43]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#102a43]">{item.label}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </button>)}
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#d4af37]/50 bg-[#fdf8ed] p-5 text-center sm:flex-row sm:text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1d592] text-[#102a43]"><MessageCircle className="h-5 w-5" /></div>
                <div className="flex-1"><h3 className="font-semibold text-[#102a43]">Need help finding something?</h3><p className="mt-1 text-sm text-stone-600">Call or message the Jamia team—we’ll be happy to guide you.</p></div>
                <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum%2C%20please%20help%20me%20find%20information%20on%20the%20Jamia%20website`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#102a43] px-4 py-3 text-sm font-bold text-white hover:bg-[#183c5b]"><MessageCircle className="h-4 w-4" />Message us</a>
              </div>
            </div>
          </section>
        </>}
        {page === 'academics' && <>
          <div className="bg-islamic-pattern px-4 pb-10 pt-32 text-center text-white sm:pt-36">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f1d592]">Our institution</p>
            <h1 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">About, Learning & Admissions</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-200">Everything about the Jamia’s story, learning programmes, teachers and admission process in one place.</p>
            <a href="#/donate" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#d4af37] px-5 py-3 text-sm font-bold text-[#102a43]">Donate to support learning</a>
          </div>
          <AboutSection />
          <CoursesSection />
          <QuranSection />
          <StudentsSection />
          <TeachersSection />
          <AdmissionSection />
          <ProspectusSection onOpenModal={() => setIsProspectusModalOpen(true)} />
        </>}
        {page === 'donate' && <>
          <div className="bg-islamic-pattern relative overflow-hidden px-4 pb-12 pt-32 text-center text-white sm:pb-16 sm:pt-36">
            <div className="pointer-events-none absolute inset-0 opacity-30"><div className="absolute -left-20 top-10 h-64 w-64 rounded-full border border-[#d4af37]/50" /><div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full border border-[#d4af37]/40" /></div>
            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#f1d592]"><HeartHandshake className="h-4 w-4" /> Support the Jamia</span>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">Give with purpose.<br/><span className="text-[#f1d592]">Support learning.</span></h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-200 sm:text-lg">Choose the type of donation that matches your intention. Every option is in one place, with a direct way to ask the Jamia for verified guidance.</p>
              <a href="#donation-options" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-6 py-3 font-bold text-[#102a43] shadow-lg transition hover:bg-[#f1d592]">View donation options <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
          <DonationSection />
        </>}
        {page === 'gallery' && <>
          <div className="bg-islamic-pattern px-4 pb-10 pt-32 text-center text-white sm:pt-36"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f1d592]">Moments at the Jamia</p><h1 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Gallery</h1><p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-200">A glimpse into the learning environment and community life of Jamia Taleemul Quran.</p></div>
          <GallerySection />
        </>}
        {page === 'contact' && <>
          <div className="bg-islamic-pattern px-4 pb-10 pt-32 text-center text-white sm:pt-36"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f1d592]">We’re here to help</p><h1 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Contact the Jamia</h1><p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-200">For admissions, learning programmes, visits or donation enquiries, please get in touch with the team.</p></div>
          <ContactSection />
        </>}
      </main>
      <Footer />
      <ProspectusModal isOpen={isProspectusModalOpen} onClose={() => setIsProspectusModalOpen(false)} />
      <ChatbotWidget />
      <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-2 sm:hidden no-print">
        <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum%2C%20I%20have%20a%20question%20about%20Jamia%20Taleemul%20Quran`} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white" aria-label="Chat on WhatsApp"><MessageCircle className="h-6 w-6" /></a>
        <a href={`tel:${INSTITUTION_DATA.phone}`} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102a43] text-[#f1d592] shadow-lg ring-2 ring-white" aria-label="Call Jamia Taleemul Quran"><Phone className="h-5 w-5" /></a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-3 border-t border-stone-200 bg-white/95 p-2 shadow-[0_-8px_24px_rgba(0,0,0,.08)] backdrop-blur sm:hidden no-print">
        <button onClick={() => goTo('home')} className={`rounded-lg px-1 py-2 text-xs font-bold ${page === 'home' ? 'bg-[#102a43] text-white' : 'text-stone-600'}`}>Home</button>
        <button onClick={() => goTo('academics')} className={`rounded-lg px-1 py-2 text-xs font-bold ${page === 'academics' ? 'bg-[#102a43] text-white' : 'text-stone-600'}`}>Learn</button>
        <button onClick={() => goTo('support')} className={`flex items-center justify-center gap-1 rounded-lg px-1 py-2 text-xs font-bold ${page === 'support' ? 'bg-[#102a43] text-white' : 'text-stone-600'}`}>Donate</button>
      </div>
      <div className="h-16 sm:hidden no-print" aria-hidden="true" />
    </div>
  );
}
