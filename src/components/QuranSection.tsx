import React, { useEffect, useState } from 'react';
import { BookOpen, ChevronDown, ExternalLink, LoaderCircle } from 'lucide-react';

type Surah = { number: number; name: string; englishName: string; englishNameTranslation: string; numberOfAyahs: number };
type Ayah = { numberInSurah: number; text: string };

export const QuranSection: React.FC = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selected, setSelected] = useState(1);
  const [arabic, setArabic] = useState<Ayah[]>([]);
  const [translation, setTranslation] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAllAyahs, setShowAllAyahs] = useState(false);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then((r) => { if (!r.ok) throw new Error('Could not load the Surah list.'); return r.json(); })
      .then((data) => setSurahs(data.data ?? []))
      .catch(() => setError('Qur’an data could not be reached right now. Please use the Open Qur’an link below.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${selected}`).then((r) => { if (!r.ok) throw new Error(); return r.json(); }),
      fetch(`https://api.alquran.cloud/v1/surah/${selected}/en.asad`).then((r) => { if (!r.ok) throw new Error(); return r.json(); })
    ])
      .then(([ar, en]) => {
        if (!active) return;
        setArabic(ar.data?.ayahs ?? []);
        setTranslation(en.data?.ayahs ?? []);
      })
      .catch(() => { if (active) setError('Unable to load this Surah. Check your connection or open Qur’an.com.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [selected]);

  return (
    <section id="quran" className="relative overflow-hidden bg-[#064e3b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-islamic-pattern" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f1d592]"><BookOpen className="h-4 w-4" /> Read & Reflect</span>
          <h2 className="urdu text-4xl font-bold leading-[2] text-[#f1d592] sm:text-5xl" dir="rtl">القرآن الكريم</h2>
          <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">Explore the Holy Qur’an</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-stone-200">Read Arabic verses alongside an English translation. Content is provided by AlQuran Cloud; translation is for understanding and study.</p>
        </div>
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#d4af37]/40 bg-[#fffdf7] p-4 text-stone-800 shadow-2xl sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex flex-1 items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3">
              <span className="shrink-0 text-sm font-semibold text-[#064e3b]">Choose Surah</span>
              <span className="relative flex-1">
                <select value={selected} onChange={(e) => { setSelected(Number(e.target.value)); setShowAllAyahs(false); }} className="w-full appearance-none bg-transparent pr-7 text-sm outline-none" aria-label="Choose a Surah">
                  {surahs.length ? surahs.map((s) => <option key={s.number} value={s.number}>{s.number}. {s.englishName} — {s.name}</option>) : <option value={1}>1. Al-Fatihah</option>}
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#064e3b]" />
              </span>
            </label>
            <a href={`https://quran.com/${selected}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 py-3 text-sm font-bold text-[#064e3b] transition hover:bg-[#e5c158]">Open on Quran.com <ExternalLink className="h-4 w-4" /></a>
          </div>
          {loading ? <div className="flex items-center justify-center gap-3 py-12 text-[#064e3b]"><LoaderCircle className="h-5 w-5 animate-spin" /> Loading Qur’an text…</div> : error ? <p role="status" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">{error}</p> : (
            <div className="divide-y divide-stone-200">
              {(showAllAyahs ? arabic : arabic.slice(0, 5)).map((ayah, index) => (
                <article key={ayah.numberInSurah} className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37] bg-[#f8f6f0] text-xs font-bold text-[#064e3b]">{ayah.numberInSurah}</span>
                  <div>
                    <p dir="rtl" lang="ar" className="font-urdu-heading text-right text-2xl leading-[2.2] text-[#064e3b] sm:text-3xl">{ayah.text}</p>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{translation[index]?.text}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          {!loading && !error && arabic.length > 5 && <button type="button" onClick={() => setShowAllAyahs((value) => !value)} className="mt-3 w-full rounded-xl border border-[#064e3b]/20 px-4 py-3 text-sm font-bold text-[#064e3b] transition hover:bg-[#064e3b]/5">{showAllAyahs ? 'Show fewer verses' : `Show all ${arabic.length} verses`}</button>}
          <p className="mt-4 border-t border-stone-200 pt-4 text-xs leading-5 text-stone-500">For recitation, tajweed, and authoritative study, learn with a qualified teacher. Online availability depends on your internet connection.</p>
        </div>
      </div>
    </section>
  );
};
