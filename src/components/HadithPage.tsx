import React from 'react';
import { BookMarked, ExternalLink, Search } from 'lucide-react';

const collections = [
  { title: 'Sahih al-Bukhari', detail: 'Well-known Hadith collection', href: 'https://sunnah.com/bukhari' },
  { title: 'Sahih Muslim', detail: 'Well-known Hadith collection', href: 'https://sunnah.com/muslim' },
  { title: 'Sunan Abi Dawud', detail: 'Hadith collection', href: 'https://sunnah.com/abudawud' },
  { title: 'Jamiʿ at-Tirmidhi', detail: 'Hadith collection', href: 'https://sunnah.com/tirmidhi' },
  { title: 'Sunan an-Nasa’i', detail: 'Hadith collection', href: 'https://sunnah.com/nasai' },
  { title: 'Sunan Ibn Majah', detail: 'Hadith collection', href: 'https://sunnah.com/ibnmajah' },
];

export const HadithPage: React.FC = () => (
  <section id="hadith" className="min-h-[65vh] bg-[#fdf8ed] pb-12 pt-10 sm:pt-14">
    <div className="bg-islamic-pattern px-4 py-8 text-center text-white sm:py-10"><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f1d592]"><BookMarked className="h-4 w-4" /> Read from source collections</span><h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Hadith Library</h1><p dir="rtl" className="urdu mt-1 text-xl text-[#f1d592]">احادیث مبارکہ</p><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/75">Browse authenticated source collections directly. Hadith numbering, translations and grading may vary by edition.</p></div>
    <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6"><a href="https://sunnah.com/search" target="_blank" rel="noopener noreferrer" className="mb-4 flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d4af37]/50 bg-white px-4 text-sm font-semibold text-[#102a43] shadow-sm hover:bg-[#fffaf0]"><Search className="h-4 w-4" /> Search Hadith on Sunnah.com <ExternalLink className="h-4 w-4" /></a><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{collections.map((item) => <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="flex min-h-28 items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-[#d4af37] hover:shadow-md"><span><span className="block font-serif font-bold text-[#102a43]">{item.title}</span><span className="mt-1 block text-xs text-stone-500">{item.detail}</span></span><ExternalLink className="h-4 w-4 shrink-0 text-[#9a7416]" /></a>)}</div><p className="mt-5 rounded-xl border border-stone-200 bg-white p-4 text-xs leading-5 text-stone-500">This Jamia website links to the source library and does not reproduce whole Hadith books. Sunnah.com says its API covers a portion of its data and requires an API key; bulk copying of complete collections is not permitted. Please verify references and grading in the original source.</p></div>
  </section>
);
