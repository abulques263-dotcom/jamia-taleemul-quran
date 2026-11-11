import React, { useEffect, useState } from 'react';
import { BookOpen, ChevronDown, ExternalLink, LoaderCircle, Languages } from 'lucide-react';

type Ayah = { numberInSurah: number; text: string };
type ApiResponse = { data?: { ayahs?: Ayah[] } };
const juzNames = ['Alif Lam Meem','Sayaqool','Tilkal Rusul','Lan Tana Loo','Wal Mohsanat','La Yuhibbullah','Wa Iza Samiu','Wa Lau Annana','Qalal Malao','Wa A'lamu','Yatazeroon','Wa Mamin Da’abat','Wa Ma Ubarriu','Rubama','Subhanallazi','Qal Alam','Iqtaraba','Qad Aflaha','Wa Qalallazina','Amman Khalaq','Utlu Ma Oohi','Wa Manyaqnut','Wa Mali','Faman Azlam','Elahe Yuraddu','Ha Meem','Qala Fama Khatbukum','Qad Sami Allah','Tabarakallazi','Amma'];

export const QuranSection: React.FC = () => {
  const [selectedJuz, setSelectedJuz] = useState(1);
  const [edition, setEdition] = useState('en.asad');
  const [arabic, setArabic] = useState<Ayah[]>([]);
  const [translation, setTranslation] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAllAyahs, setShowAllAyahs] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/juz/${selectedJuz}/quran-uthmani`).then((r) => { if (!r.ok) throw new Error(); return r.json() as Promise<ApiResponse>; }),
      fetch(`https://api.alquran.cloud/v1/juz/${selectedJuz}/${edition}`).then((r) => { if (!r.ok) throw new Error(); return r.json() as Promise<ApiResponse>; }),
    ]).then(([ar, tr]) => {
      if (!active) return;
      setArabic(ar.data?.ayahs ?? []);
      setTranslation(tr.data?.ayahs ?? []);
    }).catch(() => { if (active) setError('Qur’an data is temporarily unavailable. Check your connection or use the Open Qur’an link.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [selectedJuz, edition]);

  return (
    <section id="quran" className="relative overflow-hidden bg-[#102a43] py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-islamic-pattern" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#f1d592]"><BookOpen className="h-4 w-4" /> Read & Reflect</span>
          <h2 className="urdu text-3xl font-bold leading-[1.55] text-[#f1d592] sm:text-5xl" dir="rtl">القرآن الكريم</h2>
          <p className="mt-2 font-serif text-xl font-semibold sm:text-2xl">Read all 30 Juz</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/75">Arabic Qur’an text with a selected translation, loaded by Juz from AlQuran Cloud.</p>
        </div>
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#d4af37]/40 bg-[#fffdf7] p-3 text-stone-800 shadow-2xl sm:rounded-3xl sm:p-6">
          <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
            <label className="flex min-h-12 items-center gap-2 rounded-xl border border-stone-200 bg-white px-3">
              <BookOpen className="h-4 w-4 shrink-0 text-[#102a43]" />
              <span className="sr-only">Choose Juz</span>
              <span className="relative min-w-0 flex-1"><select value={selectedJuz} onChange={(e) => { setSelectedJuz(Number(e.target.value)); setShowAllAyahs(false); }} className="w-full appearance-none bg-transparent pr-7 text-sm font-semibold outline-none" aria-label="Choose a Juz">{Array.from({length:30}, (_,i) => <option key={i+1} value={i+1}>Juz {i+1} · {juzNames[i]}</option>)}</select><ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#102a43]" /></span>
            </label>
            <label className="flex min-h-12 items-center gap-2 rounded-xl border border-stone-200 bg-white px-3">
              <Languages className="h-4 w-4 shrink-0 text-[#102a43]" />
              <span className="sr-only">Choose translation language</span>
              <span className="relative min-w-0 flex-1"><select value={edition} onChange={(e) => setEdition(e.target.value)} className="w-full appearance-none bg-transparent pr-7 text-sm outline-none" aria-label="Choose translation"><option value="en.asad">English · Muhammad Asad</option><option value="ur.jalandhry">Urdu · Fateh Muhammad Jalandhry</option></select><ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#102a43]" /></span>
            </label>
            <a href="https://quran.com/juz/1" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 py-3 text-sm font-bold text-[#102a43] transition hover:bg-[#e5c158]">Open Qur’an <ExternalLink className="h-4 w-4" /></a>
          </div>
          {loading ? <div className="flex items-center justify-center gap-3 py-10 text-[#102a43]"><LoaderCircle className="h-5 w-5 animate-spin" /> Loading Juz {selectedJuz}…</div> : error ? <p role="status" className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">{error}</p> : (
            <div className="divide-y divide-stone-200">
              {(showAllAyahs ? arabic : arabic.slice(0, 5)).map((ayah, index) => <article key={ayah.numberInSurah} className="grid gap-2 py-5 sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37] bg-[#f8f6f0] text-xs font-bold text-[#102a43]">{ayah.numberInSurah}</span>
                <div>
                  <p dir="rtl" lang="ar" className="font-urdu-heading text-right text-2xl leading-[2.1] text-[#102a43] sm:text-3xl">{ayah.text}</p>
                  <p dir={edition.startsWith('ur') ? 'rtl' : 'ltr'} className={`mt-2 text-sm leading-6 text-stone-600 ${edition.startsWith('ur') ? 'urdu text-base leading-9' : ''}`}>{translation[index]?.text}</p>
                </div>
              </article>)}
            </div>
          )}
          {!loading && !error && arabic.length > 5 && <button type="button" onClick={() => setShowAllAyahs((value) => !value)} className="mt-2 w-full rounded-xl border border-[#102a43]/20 px-4 py-3 text-sm font-bold text-[#102a43] transition hover:bg-[#102a43]/5">{showAllAyahs ? 'Show fewer verses' : `Read all ${arabic.length} verses in this Juz`}</button>}
          <p className="mt-4 border-t border-stone-200 pt-3 text-xs leading-5 text-stone-500">For recitation, tajweed and authoritative study, learn with a qualified teacher. Source: AlQuran Cloud. Online availability depends on your connection.</p>
        </div>
      </div>
    </section>
  );
};
