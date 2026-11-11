import React, { useState } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Check, Copy, GraduationCap, HandHeart, HeartHandshake, MessageCircle, MoonStar, Phone, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';

const donationTypes = [
  { title: 'Zakat', urdu: 'زکوٰۃ', icon: MoonStar, message: 'Assalamu Alaikum, I would like to ask about giving Zakat to Jamia Taleemul Quran. Please confirm eligibility and share verified official details.' },
  { title: 'Sadaqah', urdu: 'صدقہ', icon: HandHeart, message: 'Assalamu Alaikum, I would like to contribute Sadaqah to Jamia Taleemul Quran. Please share the official process and verified details.' },
  { title: 'Fitra / Fitrana', urdu: 'فطرانہ', icon: Sparkles, message: 'Assalamu Alaikum, I would like to ask about Fitra/Fitrana. Please confirm whether the Jamia can receive it and share the official process.' },
  { title: 'Lillah / General', urdu: 'للہ', icon: HeartHandshake, message: 'Assalamu Alaikum, I would like to ask about making a general donation to Jamia Taleemul Quran. Please share the verified official process.' },
  { title: 'Education Support', urdu: 'تعلیم', icon: GraduationCap, message: 'Assalamu Alaikum, I would like to support Qur’anic learning and student education at Jamia Taleemul Quran. Please share the official process and verified details.' },
];

export const DonationSection: React.FC = () => {
  const [copied, setCopied] = useState('');
  const copy = async (label: string, value: string) => {
    try { await navigator.clipboard.writeText(value); setCopied(label); window.setTimeout(() => setCopied(''), 1800); } catch { setCopied(''); }
  };

  return <section id="donation-options" className="min-h-screen bg-[#fdf8ed] px-4 pb-12 pt-24 sm:pt-28">
    <div className="mx-auto max-w-5xl">
      <header className="mb-5 text-center sm:mb-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#102a43]"><HeartHandshake className="h-4 w-4 text-[#9a7416]" />Support the Jamia</span>
        <h1 className="mt-3 font-serif text-2xl font-bold text-[#102a43] sm:text-4xl">Choose how you would like to give</h1>
        <p className="mx-auto mt-1.5 max-w-xl text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">Select Zakat, Sadaqah or another purpose. You can use the verified bank details or ask the Jamia on WhatsApp.</p>
      </header>

      <section aria-labelledby="bank-title" className="mb-6 rounded-2xl border border-[#d4af37]/50 bg-white p-4 shadow-sm sm:mb-8 sm:p-5">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><WalletCards className="h-5 w-5" /></span><div><p className="text-[10px] font-bold uppercase tracking-wider text-[#9a7416]">Bank transfer</p><h2 id="bank-title" className="font-serif text-lg font-bold text-[#102a43] sm:text-xl">Official bank details</h2></div></div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {[
            { label: 'Bank', value: 'Indian Overseas Bank' },
            { label: 'Account name', value: 'JAMIA TALEEMUL QURAN' },
            { label: 'Account number', value: '2366020000000802', copy: true },
            { label: 'IFSC', value: 'IOBA0002366', copy: true },
          ].map(({ label, value, copy: canCopy }) => <div key={label} className="min-w-0 rounded-xl bg-[#fdf8ed] p-3"><span className="block text-[10px] font-semibold text-stone-500">{label}</span><div className="mt-1 flex min-w-0 items-center justify-between gap-1"><strong className="break-all text-xs leading-5 text-[#102a43] sm:text-sm">{value}</strong>{canCopy && <button type="button" onClick={() => void copy(label, value)} aria-label={`Copy ${label}`} className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white text-[#102a43]" title={copied === label ? 'Copied' : `Copy ${label}`}>{copied === label ? <Check className="h-4 w-4 text-emerald-700" /> : <Copy className="h-3.5 w-3.5" />}</button>}</div></div>)}
        </div>
        <p className="mt-3 flex items-start gap-2 text-[10px] leading-4 text-stone-500 sm:text-xs"><ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9a7416]" />Please verify the account name before sending a transfer. Contact the Jamia if the details do not match.</p>
      </section>

      <div className="mb-3"><h2 className="font-serif text-lg font-bold text-[#102a43] sm:text-xl">Giving options</h2><p className="mt-1 text-xs text-stone-500">Choose one to ask the Jamia how it can be accepted and used.</p></div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
        {donationTypes.map(({ title, urdu, icon: Icon, message }) => <article key={title} className="flex min-h-36 flex-col rounded-2xl border border-stone-200 bg-white p-3.5 shadow-sm sm:min-h-40 sm:p-4">
          <div className="flex items-center justify-between gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><Icon className="h-4 w-4" /></span><span dir="rtl" className="urdu text-sm font-bold text-[#9a7416]">{urdu}</span></div>
          <h3 className="mt-3 text-sm font-bold text-[#102a43]">{title}</h3>
          <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#d4af37]/60 bg-[#fffaf0] px-3 py-2 text-xs font-bold text-[#102a43]"><MessageCircle className="h-4 w-4" />Ask on WhatsApp</a>
        </article>)}
      </div>
      <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl bg-[#102a43] p-4 text-center text-white sm:flex-row sm:p-5 sm:text-left"><div><h2 className="font-semibold">Need help choosing?</h2><p className="mt-1 text-xs text-white/70">Speak with the Jamia before you transfer.</p></div><div className="flex w-full gap-2 sm:w-auto"><a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 text-xs font-bold text-white sm:flex-none"><Phone className="h-4 w-4 text-[#f1d592]" />Call</a><a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${encodeURIComponent('Assalamu Alaikum, I have a question about donating to Jamia Taleemul Quran.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 text-xs font-bold text-[#102a43] sm:flex-none"><MessageCircle className="h-4 w-4" />WhatsApp</a></div></div>
    </div>
  </section>;
};
