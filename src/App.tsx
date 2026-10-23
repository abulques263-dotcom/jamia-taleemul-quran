import React, { useState } from 'react';
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
import { Phone, MessageCircle } from 'lucide-react';
import { INSTITUTION_DATA } from './data/institutionData';

export default function App() {
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1a1a1a] font-serif selection:bg-[#064e3b] selection:text-[#d4af37]">
      <Header onOpenProspectus={() => setIsProspectusModalOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <CoursesSection />
        <QuranSection />
        <TeachersSection />
        <AdmissionSection />
        <ProspectusSection onOpenModal={() => setIsProspectusModalOpen(true)} />
        <GallerySection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
      <ProspectusModal
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
      />
      <ChatbotWidget />
      <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-2.5 sm:hidden no-print">
        <a
          href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20Jamia%20Taleemul%20Quran`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-950/30 hover:scale-105 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={`tel:${INSTITUTION_DATA.phone}`}
          className="w-12 h-12 rounded-full bg-[#064e3b] text-[#d4af37] border-2 border-[#d4af37] flex items-center justify-center shadow-lg shadow-emerald-950/30 hover:scale-105 active:scale-95 transition-transform"
          aria-label="Call Jamia Taleemul Quran"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
