import React from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { HeartHandshake, Phone, MessageCircle, ShieldCheck, BookOpen, GraduationCap, WalletCards } from 'lucide-react';

export const DonationSection: React.FC = () => (
  <section id="donation" className="relative overflow-hidden bg-[#f8f6f0] py-20 sm:py-24">
    <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#064e3b]/15 bg-[#064e3b]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#064e3b]"><HeartHandshake className="h-4 w-4" /> Community Support</span>
        <h2 dir="rtl" className="urdu text-4xl font-bold leading-[2.1] text-[#064e3b] sm:text-5xl">{INSTITUTION_DATA.donation.headingUrdu}</h2>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-stone-800 sm:text-3xl">Help nurture the next generation</h3>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-600">Your support can help the Jamia continue its educational work. Please contact the institution to discuss an appropriate contribution and confirm the official payment details.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl bg-[#064e3b] p-7 text-white shadow-xl sm:p-10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d4af37]/25" />
          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37] text-[#064e3b]"><HeartHandshake className="h-7 w-7" /></div>
            <h3 className="font-serif text-2xl font-semibold text-[#f1d592]">Support Qur’anic & academic education</h3>
            <p className="mt-4 leading-7 text-stone-200">Jamia Taleemul Quran is a community-supported institution. Those wishing to support its educational work can reach the team directly using the contact options.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#f1d592]" /><div><p className="font-semibold">Qur’anic learning</p><p className="mt-1 text-sm text-stone-300">Reading, recitation and memorisation education</p></div></div>
              <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#f1d592]" /><div><p className="font-semibold">Student learning</p><p className="mt-1 text-sm text-stone-300">Religious and foundational academic studies</p></div></div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-lg sm:p-9">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8f6f0] text-[#064e3b]"><WalletCards className="h-6 w-6" /></div>
          <h3 className="mt-4 font-serif text-2xl font-semibold text-[#064e3b]">Official donation & payment details</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">For your safety, the website does not display unverified UPI IDs, QR codes or bank account numbers. Contact the Jamia and verify the account holder before transferring any funds.</p>
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><ShieldCheck className="mr-2 inline h-4 w-4" />Verified UPI / bank details can be published here once the institution supplies and confirms them.</div>
          <div className="mt-6 grid gap-3">
            <a href={`tel:${INSTITUTION_DATA.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#064e3b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#085f48]"><Phone className="h-4 w-4" />{INSTITUTION_DATA.donation.buttonText}</a>
            <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum%2C%20please%20share%20the%20verified%20official%20donation%20details%20for%20Jamia%20Taleemul%20Quran.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#20ba59]"><MessageCircle className="h-4 w-4" />Request details on WhatsApp</a>
          </div>
          <p className="mt-5 text-center text-xs text-stone-500">Phone: {INSTITUTION_DATA.phone} · WhatsApp: {INSTITUTION_DATA.whatsapp}</p>
        </div>
      </div>
    </div>
  </section>
);
