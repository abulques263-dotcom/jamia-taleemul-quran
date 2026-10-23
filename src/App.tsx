import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { TeachersSection } from './components/TeachersSection';
import { AdmissionSection } from './components/AdmissionSection';
import { ProspectusSection } from './components/ProspectusSection';
import { GallerySection } from './components/GallerySection';
import { DonationSection } from './components/DonationSection';
import { QuranSection } from './components/QuranSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProspectusModal } from './components/ProspectusModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { Phone, MessageCircle, ArrowRight, BookOpen, GraduationCap, Users, HeartHandshake } from 'lucide-react';
import { INSTITUTION_DATA } from './data/institutionData';

type Page = 'home' | 'academics' | 'support';
const readPage = (): Page => {
  const route = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return route === 'academics' || route === 'support' ? route : 'home';
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
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1a1a1a] font-sans selection:bg-[#064e3b] selection:text-[#d4af37]">
      <Header onOpenProspectus={() => setIsProspectusModalOpen(true)} />
      <main className="flex-grow">
        {page === 'home' && <>
          <Hero />
          <DonationSection />
          <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-[#a17d16]">Explore Jamia</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#064e3b] sm:text-4xl">Learn more, get involved</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-600">Admissions, our teachers, Qur’anic learning and the Jamia story—organised into clear pages that are easier to use on a phone.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'About & Education', text: 'Discover the Jamia, courses and Qur’an learning.', icon: BookOpen, route: 'academics' as Page, label: 'Explore education' },
                  { title: 'Admissions & Staff', text: 'Find admission information and meet our teachers.', icon: GraduationCap, route: 'academics' as Page, label: 'Admission details' },
                  { title: 'Gallery & Contact', text: 'See the gallery and contact the institution.', icon: Users, route: 'support' as Page, label: 'View details' },
                ].map((item) => <button key={item.title} onClick={() => goTo(item.route)} className="group rounded-2xl border border-stone-200 bg-[#fdfbf7] p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-lg sm:p-6">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#064e3b] text-[#f1d592]"><item.icon className="h-6 w-6" /></span>
                  <h3 className="font-serif text-xl font-bold text-[#064e3b]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#064e3b]">{item.label}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </button>)}
              </div>
            </div>
          </section>
        </>}
        {page === 'academics' && <>
          <div className="bg-islamic-pattern px-4 pb-10 pt-32 text-center text-white sm:pt-36">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#f1d592]">Our institution</p>
            <h1 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">About, Education & Admissions</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-200">Explore the Jamia’s learning programmes, Qur’an resources, teaching team and admission information.</p>
          </div>
          <AboutSection />
          <CoursesSection />
          <QuranSection />
          <TeachersSection />
          <AdmissionSection />
          <ProspectusSection onOpenModal={() => setIsProspectusModalOpen(true)} />
        </>}
        {page === 'support' && <>
          <div className="bg-islamic-pattern px-4 pb-10 pt-32 text-center text-white sm:pt-36">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#f1d592]">Community & connection</p>
            <h1 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Support the Jamia</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-200">Explore donation categories, learn about the institution and contact the team using the official contact options.</p>
          </div>
          <DonationSection />
          <GallerySection />
          <ContactSection />
        </>}
      </main>
      <Footer />
      <ProspectusModal isOpen={isProspectusModalOpen} onClose={() => setIsProspectusModalOpen(false)} />
      <ChatbotWidget />
      <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-2 sm:hidden no-print">
        <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20Jamia%20Taleemul%20Quran`} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white" aria-label="Chat on WhatsApp"><MessageCircle className="h-6 w-6" /></a>
        <a href={`tel:${INSTITUTION_DATA.phone}`} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#064e3b] text-[#d4af37] shadow-lg ring-2 ring-white" aria-label="Call Jamia Taleemul Quran"><Phone className="h-5 w-5" /></a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-3 border-t border-stone-200 bg-white/95 p-2 shadow-[0_-8px_24px_rgba(0,0,0,.08)] backdrop-blur sm:hidden no-print">
        <button onClick={() => goTo('home')} className={`rounded-lg px-1 py-2 text-xs font-bold ${page === 'home' ? 'bg-[#064e3b] text-white' : 'text-stone-600'}`}>Home</button>
        <button onClick={() => goTo('academics')} className={`rounded-lg px-1 py-2 text-xs font-bold ${page === 'academics' ? 'bg-[#064e3b] text-white' : 'text-stone-600'}`}>Academics</button>
        <button onClick={() => goTo('support')} className={`flex items-center justify-center gap-1 rounded-lg px-1 py-2 text-xs font-bold ${page === 'support' ? 'bg-[#064e3b] text-white' : 'text-stone-600'}`}><HeartHandshake className="h-4 w-4" /> Support</button>
      </div>
      <div className="h-16 sm:hidden no-print" aria-hidden="true" />
    </div>
  );
}
