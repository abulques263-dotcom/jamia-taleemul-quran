import React, { useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { INSTITUTION_DATA } from '../data/institutionData';

type Message = { from: 'bot' | 'user'; text: string };

const answerFor = (question: string) => {
  const q = question.toLowerCase();
  if (/admission|enroll|join| दाखिला/.test(q)) return 'Admissions: Please contact the Jamia team directly for current availability and required documents. Call ' + INSTITUTION_DATA.phone + ' or message us on WhatsApp.';
  if (/course|class|study|hifz|quran|tajweed|تعلیم/.test(q)) return 'The website lists Qur’an reading and pronunciation, Hifz-e-Qur’an, Islamic studies, Urdu, Arabic, Hindi, English and basic computer education. Please contact the institution to confirm current class schedules.';
  if (/donat|payment|upi|bank|support|sadqa|zakat/.test(q)) return 'To support Jamia, please contact the institution directly before sending money. Verified online payment details have not been published on this website yet.';
  if (/teacher|ustad|staff/.test(q)) return 'Please visit the Our Teachers section on this page for the currently listed faculty information.';
  if (/address|location|where|map/.test(q)) return 'The institution is listed in Sector 63, Noida. Please use the Contact section for the full address and directions.';
  if (/contact|phone|call|whatsapp/.test(q)) return 'You can call ' + INSTITUTION_DATA.phone + ' or message on WhatsApp at ' + INSTITUTION_DATA.whatsapp + '.';
  if (/salam|assalamu|hello|hi/.test(q)) return 'Wa Alaikum Assalam! Welcome to Jamia Taleemul Quran. I can help with admissions, courses, teachers, donations and contact details.';
  return 'I can help with admissions, courses, teachers, donations and contact details. For anything else, please contact the Jamia team directly using the Contact section. This is a basic website assistant; an AI service can be connected securely once its server-side API credentials are configured.';
};

export const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Assalamu Alaikum! Welcome to Jamia Taleemul Quran. What would you like to know?' }]);

  const send = () => {
    const question = draft.trim();
    if (!question) return;
    setMessages((current) => [...current, { from: 'user', text: question }, { from: 'bot', text: answerFor(question) }]);
    setDraft('');
  };

  return (
    <div className="no-print fixed bottom-5 right-5 z-[60]">
      {open && <section aria-label="Jamia virtual assistant" className="mb-3 flex h-[min(30rem,72vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d4af37]/60 bg-[#fffdf7] shadow-2xl">
        <header className="flex items-center justify-between bg-[#064e3b] px-4 py-3 text-white">
          <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37] text-[#064e3b]"><Bot className="h-5 w-5" /></span><div><p className="font-semibold">Jamia Assistant</p><p className="text-xs text-emerald-100">Quick website help</p></div></div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded-lg p-2 hover:bg-white/10"><X className="h-5 w-5" /></button>
        </header>
        <div className="flex-1 space-y-3 overflow-y-auto p-3" aria-live="polite">
          {messages.map((message, i) => <div key={i} className={message.from === 'user' ? 'ml-6 rounded-2xl rounded-br-sm bg-[#064e3b] p-3 text-sm leading-5 text-white' : 'mr-5 rounded-2xl rounded-bl-sm border border-stone-200 bg-white p-3 text-sm leading-5 text-stone-700'}>{message.text}</div>)}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2 border-t border-stone-200 p-3">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about admissions…" aria-label="Your question" className="min-w-0 flex-1 rounded-xl border border-stone-300 px-3 py-2 text-sm outline-none focus:border-[#064e3b]" />
          <button type="submit" aria-label="Send message" className="rounded-xl bg-[#d4af37] p-3 text-[#064e3b] hover:bg-[#e5c158]"><Send className="h-4 w-4" /></button>
        </form>
        <p className="px-3 pb-3 text-[10px] text-stone-500">Automated quick answers · Not a live staff member</p>
      </section>}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close chat assistant' : 'Open chat assistant'} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#f1d592] bg-[#064e3b] text-white shadow-xl transition hover:scale-105">
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};
