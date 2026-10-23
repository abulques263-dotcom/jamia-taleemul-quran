import React, { useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { INSTITUTION_DATA } from '../data/institutionData';

type Message = { from: 'bot' | 'user'; text: string };
type ApiMessage = { role: 'user' | 'assistant'; content: string };

const AI_API_URL = (import.meta.env.VITE_AI_API_URL as string | undefined)?.trim();

const answerFor = (question: string) => {
  const q = question.toLowerCase();
  if (/admission|enroll|join| दाखिला/.test(q)) return 'Admissions: Please contact the Jamia team directly for current availability and required documents. Call ' + INSTITUTION_DATA.phone + ' or message us on WhatsApp.';
  if (/course|class|study|hifz|quran|tajweed|تعلیم/.test(q)) return 'The website lists Qur’an reading and pronunciation, Hifz-e-Qur’an, Islamic studies, Urdu, Arabic, Hindi, English and basic computer education. Please contact the institution to confirm current class schedules.';
  if (/donat|payment|upi|bank|support|sadqa|zakat/.test(q)) return 'To support Jamia, please contact the institution directly before sending money. Verified online payment details have not been published on this website yet.';
  if (/teacher|ustad|staff/.test(q)) return 'Please visit the Our Teachers section on this page for the currently listed faculty information.';
  if (/address|location|where|map/.test(q)) return 'The institution is listed in Sector 63, Noida. Please use the Contact section for the full address and directions.';
  if (/contact|phone|call|whatsapp/.test(q)) return 'You can call ' + INSTITUTION_DATA.phone + ' or message on WhatsApp at ' + INSTITUTION_DATA.whatsapp + '.';
  if (/salam|assalamu|hello|hi\b/.test(q)) return 'Wa Alaikum Assalam! Welcome to Jamia Taleemul Quran. I can help with admissions, courses, teachers, donations and contact details.';
  return 'I can help with admissions, courses, teachers, donations and contact details. For anything else, please contact the Jamia team directly using the Contact section.';
};

export const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Assalamu Alaikum! Welcome to Jamia Taleemul Quran. What would you like to know?' }]);

  const send = async () => {
    const question = draft.trim();
    if (!question || sending) return;
    setDraft('');
    setMessages((current) => [...current, { from: 'user', text: question }]);
    setSending(true);

    try {
      if (!AI_API_URL) throw new Error('AI endpoint is not configured');
      const history: ApiMessage[] = [...messages, { from: 'user', text: question }]
        .slice(-12)
        .map((message) => ({ role: message.from === 'user' ? 'user' : 'assistant', content: message.text }));
      const response = await fetch(AI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });
      if (!response.ok) throw new Error('AI endpoint returned an error');
      const data = await response.json() as { reply?: string };
      if (!data.reply || typeof data.reply !== 'string') throw new Error('AI response was invalid');
      setMessages((current) => [...current, { from: 'bot', text: data.reply! }]);
    } catch {
      setMessages((current) => [...current, { from: 'bot', text: answerFor(question) + (AI_API_URL ? ' (AI is temporarily unavailable, so this is a quick answer.)' : ' (AI connection is not configured yet.)') }]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="no-print fixed bottom-5 right-5 z-[60]">
      {open && <section aria-label="Jamia virtual assistant" className="mb-3 flex h-[min(30rem,72vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d4af37]/60 bg-[#fffdf7] shadow-2xl">
        <header className="flex items-center justify-between bg-[#064e3b] px-4 py-3 text-white">
          <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37] text-[#064e3b]"><Bot className="h-5 w-5" /></span><div><p className="font-semibold">Jamia AI Assistant</p><p className="text-xs text-emerald-100">{AI_API_URL ? 'AI assistant' : 'Quick answers · AI setup pending'}</p></div></div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded-lg p-2 hover:bg-white/10"><X className="h-5 w-5" /></button>
        </header>
        <div className="flex-1 space-y-3 overflow-y-auto p-3" aria-live="polite">
          {messages.map((message, i) => <div key={i} className={message.from === 'user' ? 'ml-6 rounded-2xl rounded-br-sm bg-[#064e3b] p-3 text-sm leading-5 text-white' : 'mr-5 rounded-2xl rounded-bl-sm border border-stone-200 bg-white p-3 text-sm leading-5 text-stone-700'}>{message.text}</div>)}
          {sending && <div className="mr-5 rounded-2xl rounded-bl-sm border border-stone-200 bg-white p-3 text-sm text-stone-500">Jawab taiyar ho raha hai…</div>}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); void send(); }} className="flex gap-2 border-t border-stone-200 p-3">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} disabled={sending} placeholder="Ask in Hindi, Urdu or English…" aria-label="Your question" className="min-w-0 flex-1 rounded-xl border border-stone-300 px-3 py-2 text-sm outline-none focus:border-[#064e3b] disabled:opacity-60" />
          <button type="submit" disabled={sending || !draft.trim()} aria-label="Send message" className="rounded-xl bg-[#d4af37] p-3 text-[#064e3b] hover:bg-[#e5c158] disabled:opacity-50"><Send className="h-4 w-4" /></button>
        </form>
        <p className="px-3 pb-3 text-[10px] text-stone-500">AI-generated answers may be inaccurate. Verify important details with Jamia staff.</p>
      </section>}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close chat assistant' : 'Open chat assistant'} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#f1d592] bg-[#064e3b] text-white shadow-xl transition hover:scale-105">
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};
