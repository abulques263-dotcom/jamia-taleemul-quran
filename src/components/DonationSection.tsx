import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { HeartHandshake, Phone, MessageCircle, ShieldCheck, BookOpen, GraduationCap, WalletCards, MoonStar, HandHeart, Sparkles } from 'lucide-react';

const donationTypes = [
  { title: 'Zakat', urdu: 'زکوٰۃ', icon: MoonStar, description: 'A required form of giving for eligible Muslims. Ask the Jamia to confirm whether your Zakat can be accepted for the intended use.', message: 'Assalamu Alaikum, I would like to ask about giving Zakat to Jamia Taleemul Quran. Please confirm eligibility and share verified official details.' },
  { title: 'Sadqa / Sadaqah', urdu: 'صدقہ', icon: HandHeart, description: 'Voluntary charity to support beneficial community and educational work. Please ask how your contribution may be used.', message: 'Assalamu Alaikum, I would like to contribute Sadqa/Sadaqah to Jamia Taleemul Quran. Please share the official process and verified details.' },
  { title: 'Fitra / Fitrana', urdu: 'فطرانہ', icon: Sparkles, description: 'Ask the Jamia whether it can receive and distribute Fitra/Fitrana, and confirm the suitable amount and timing.', message: 'Assalamu Alaikum, I would like to ask about Fitra/Fitrana. Please confirm whether the Jamia can receive it and share the official process.' },
  { title: 'Lillah / General', urdu: 'للہ', icon: HeartHandshake, description: 'A general contribution for the institution’s work. Tell the team if you have a specific purpose in mind.', message: 'Assalamu Alaikum, I would like to ask about making a Lillah/general donation to Jamia Taleemul Quran. Please share the verified official process.' },
  { title: 'Education Support', urdu: 'تعلیم', icon: GraduationCap, description: 'Support Qur’an learning and students’ education. Confirm with the Jamia how funds can be allocated.', message: 'Assalamu Alaikum, I would like to support Qur’anic learning and student education at Jamia Taleemul Quran. Please share the official process and verified details.' }
];

export const DonationSection: React.FC = () => {
  return (
    <section id="donation-options" className="relative overflow-hidden bg-[#fdf8ed] py-10 sm:py-14">
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#102a43]/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#102a43]"><HeartHandshake className="h-4 w-4" /> Your support matters</span>
          <h2 dir="rtl" className="urdu text-3xl font-bold leading-[1.7] text-[#102a43] sm:text-4xl">{INSTITUTION_DATA.donation.headingUrdu}</h2>
          <h3 className="mt-1 font-serif text-2xl font-bold text-[#102a43] sm:text-3xl">Choose your donation type</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-600">Select the option that matches your intention. If you are unsure, contact us first and we will help you understand the next step.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {donationTypes.map((item) => {
            const Icon = item.icon;
            return <article key={item.title} className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:shadow-md sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><Icon className="h-5 w-5" /></span>
                <span dir="rtl" className="urdu text-lg font-bold text-[#9a7416]">{item.urdu}</span>
              </div>
              <h4 className="mt-4 font-serif text-xl font-bold text-[#102a43]">{item.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">{item.description}</p>
              <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${encodeURIComponent(item.message)}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#102a43] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#183c5b] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"><MessageCircle className="h-4 w-4" />Ask about this</a>
            </article>;
          })}
        </div>
        <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative overflow-hidden rounded-2xl bg-[#102a43] p-5 text-white shadow-lg sm:p-7">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d4af37]/25" />
            <div className="relative">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37] text-[#102a43]"><BookOpen className="h-6 w-6" /></div>
              <h3 className="font-serif text-xl font-bold text-[#f1d592] sm:text-2xl">Help children learn</h3>
              <p className="mt-2 text-sm leading-6 text-stone-200">Contributions can support the Jamia’s educational work. Please discuss the intended purpose with the institution so your donation can be directed appropriately.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#f1d592]" /><div><p className="font-semibold">Qur’anic learning</p><p className="mt-1 text-sm text-stone-300">Reading, recitation and memorisation</p></div></div>
                <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#f1d592]" /><div><p className="font-semibold">Student education</p><p className="mt-1 text-sm text-stone-300">Religious and foundational studies</p></div></div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdf8ed] text-[#102a43]"><WalletCards className="h-6 w-6" /></div>
            <h3 className="mt-3 font-serif text-xl font-bold text-[#102a43]">Before you send money</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">For your safety, we only display verified payment details. No UPI ID, QR code or bank account is shown here because official details must be confirmed directly with the Jamia.</p>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900"><ShieldCheck className="mr-2 inline h-4 w-4" />Please confirm the account holder, donation purpose and payment details before transferring money.</div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              <a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#102a43] px-4 py-3 text-sm font-bold text-white hover:bg-[#183c5b]"><Phone className="h-4 w-4" />Call the Jamia</a>
              <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${encodeURIComponent('Assalamu Alaikum, please share the verified official donation details for Jamia Taleemul Quran.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white hover:bg-[#20ba59]"><MessageCircle className="h-4 w-4" />Ask on WhatsApp</a>
            </div>
            <p className="mt-3 text-center text-xs text-stone-500">Phone: {INSTITUTION_DATA.phoneFormatted} · WhatsApp: {INSTITUTION_DATA.whatsappFormatted}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
