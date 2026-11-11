import React from 'react';
import { BookMarked, BookOpen, GraduationCap, HeartHandshake, Images, MapPin, Users } from 'lucide-react';
import { Hero } from './Hero';

const destinations = [
  { title: 'Read Qur’an', detail: 'All 30 Juz with English or Urdu translation', href: '#/quran', icon: BookOpen, accent: true },
  { title: 'Hadith', detail: 'Browse trusted source collections', href: '#/hadith', icon: BookMarked },
  { title: 'Study & Courses', detail: 'See what students learn at the Jamia', href: '#/academics', icon: GraduationCap },
  { title: 'Admissions', detail: 'Information for parents and families', href: '#/academics%23admission', icon: Users },
  { title: 'Photo Gallery', detail: 'See campus life and learning', href: '#/gallery', icon: Images },
  { title: 'Contact & Location', detail: 'Call, message or find the Jamia', href: '#/contact', icon: MapPin },
];

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <section aria-labelledby="explore-title" className="bg-[#fdf8ed] px-4 py-7 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-end justify-between gap-3 sm:mb-5">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9a7416]">Explore</p><h2 id="explore-title" className="mt-1 font-serif text-xl font-bold text-[#102a43] sm:text-2xl">What do you need today?</h2></div>
          <a href="#/donate" className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-[#d4af37]/70 bg-white px-3 text-xs font-bold text-[#102a43] shadow-sm transition hover:bg-[#fff8e5] sm:px-4 sm:text-sm"><HeartHandshake className="h-4 w-4 text-[#9a7416]" />Donate</a>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
          {destinations.map(({ title, detail, href, icon: Icon, accent }) => <a key={title} href={href} className={`group flex min-h-28 items-start gap-3 rounded-2xl border p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:shadow-md sm:min-h-32 sm:p-4 ${accent ? 'border-[#d4af37]/60 bg-white' : 'border-stone-200 bg-white'}`}>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${accent ? 'bg-[#102a43] text-[#f1d592]' : 'bg-[#fdf8ed] text-[#102a43]'}`}><Icon className="h-4 w-4" /></span>
            <span className="min-w-0"><span className="block text-sm font-bold leading-5 text-[#102a43]">{title}</span><span className="mt-1 block text-[11px] leading-4 text-stone-500 sm:text-xs sm:leading-5">{detail}</span></span>
          </a>)}
        </div>
        <p className="mt-4 text-center text-[11px] text-stone-500">Jamia Taleemul Quran · Noida · Established 2006</p>
      </div>
    </section>
  </>
);
