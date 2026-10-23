import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { HeartHandshake, Phone, MessageCircle, ShieldCheck, BookOpen, GraduationCap, WalletCards, MoonStar, HandHeart, Sparkles } from 'lucide-react';

const donationTypes = [
  {
    title: 'Zakat',
    urdu: 'زکوٰۃ',
    icon: MoonStar,
    description: 'Want to give Zakat? Please contact the Jamia first to confirm eligibility, intended use and the correct official payment details.',
    message: 'Assalamu Alaikum, I would like to ask about giving Zakat to Jamia Taleemul Quran. Please share eligibility information and verified official details.'
  },
  {
    title: 'Sadqa / Sadaqah',
    urdu: 'صدقہ',
    icon: HandHeart,
    description: 'Voluntary charity to support beneficial community and educational work. Please ask the institution how your contribution can be used.',
    message: 'Assalamu Alaikum, I would like to contribute Sadqa/Sadaqah to Jamia Taleemul Quran. Please share the official process and verified details.'
  },
  {
    title: 'Fitra / Fitrana',
    urdu: 'فطرانہ',
    icon: Sparkles,
    description: 'Ask the Jamia whether it can receive and distribute Fitra/Fitrana, and confirm the appropriate amount and timing for your situation.',
    message: 'Assalamu Alaikum, I would like to ask about Fitra/Fitrana. Please confirm whether the Jamia can receive it and share the official process.'
  }
];

export const DonationSection: React.FC = () => (
  <section id="donation" className="relative overflow-hidden bg-[#f8f6f0] py-10 sm:py-16">
    <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#064e3b]/5 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-7 max-w-3xl text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#064e3b]/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#064e3b]"><HeartHandshake className="h-4 w-4" /> Community support</span>
        <h2 dir="rtl" className="urdu text-3xl font-bold leading-[1.7] text-[#064e3b] sm:text-4xl">{INSTITUTION_DATA.donation.headingUrdu}</h2>
        <h3 className="mt-1 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">Zakat, Sadqa & Fitra</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-600">Choose the kind of contribution you want to ask about. Contact the Jamia to confirm eligibility and purpose before making a payment.</p>
      </div>

      <div className="mb-7 grid gap-4 sm:grid-cols-3">
        {donationTypes.map((item) => {
          const Icon = item.icon;
          return <article key={item.title} className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-xl sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#064e3b] text-[#f1d592]"><Icon className="h-6 w-6" /></span>
              <span dir="rtl" className="urdu text-lg font-bold text-[#a17d16]">{item.urdu}</span>
            </div>
            <h4 className="mt-4 font-serif text-xl font-bold text-[#064e3b]">{item.title}</h4>
            <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">{item.description}</p>
            <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${encodeURIComponent(item.message)}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#064e3b] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#08634a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"><MessageCircle className="h-4 w-4" />Ask about {item.title}</a>
          </article>;
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative overflow-hidden rounded-2xl bg-[#064e3b] p-5 text-white shadow-xl sm:p-7">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d4af37]/25" />
          <div className="relative">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37] text-[#064e3b]"><HeartHandshake className="h-7 w-7" /></div>
            <h3 className="font-serif text-xl font-bold text-[#f1d592] sm:text-2xl">Support learning and student development</h3>
            <p className="mt-2 text-sm leading-6 text-stone-200">Your support may help the Jamia continue its educational work. Please discuss the intended purpose with the institution so the contribution can be directed appropriately.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#f1d592]" /><div><p className="font-semibold">Qur’anic learning</p><p className="mt-1 text-sm text-stone-300">Reading, recitation and memorisation education</p></div></div>
              <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#f1d592]" /><div><p className="font-semibold">Student education</p><p className="mt-1 text-sm text-stone-300">Religious and foundational academic studies</p></div></div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-lg sm:p-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8f6f0] text-[#064e3b]"><WalletCards className="h-6 w-6" /></div>
          <h3 className="mt-3 font-serif text-xl font-bold text-[#064e3b]">Verified payment details</h3>
          <p className="mt-2 text-sm leading-6 text-stone-600">For your safety, this website does not show unverified UPI IDs, QR codes or bank account numbers. Please verify the account holder and payment details directly with the institution before transferring money.</p>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900"><ShieldCheck className="mr-2 inline h-4 w-4" />Official payment details can be added after they are supplied and verified by the Jamia.</div>
          <div className="mt-4 grid gap-2">
            <a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#064e3b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#085f48]"><Phone className="h-4 w-4" />{INSTITUTION_DATA.donation.buttonText}</a>
            <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${encodeURIComponent('Assalamu Alaikum, please share the verified official donation details for Jamia Taleemul Quran.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#20ba59]"><MessageCircle className="h-4 w-4" />Request details on WhatsApp</a>
          </div>
          <p className="mt-3 text-center text-xs text-stone-500">Phone: {INSTITUTION_DATA.phoneFormatted} · WhatsApp: {INSTITUTION_DATA.whatsappFormatted}</p>
        </div>
      </div>
    </div>
  </section>
);
