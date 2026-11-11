import React, { useEffect, useState } from 'react';
import { Bot, MessageCircle, Send, X, Sparkles, ExternalLink } from 'lucide-react';
import { INSTITUTION_DATA } from '../data/institutionData';

type Message = { from: 'bot' | 'user'; text: string };
type ApiMessage = { role: 'user' | 'assistant'; content: string };
const AI_API_URL = (import.meta.env.VITE_AI_API_URL as string | undefined)?.trim();
const AI_ENDPOINT = AI_API_URL || '/api/chat';
const VERCEL_ENV_URL = 'https://vercel.com/abulques263-3307/jamia-taleemul-quran/settings/environment-variables';

const answerFor = (question: string) => {
  const q = question.toLowerCase();
  if (/admission|enroll|join|د.*داخلہ|दाखिला/.test(q)) return 'Admissions: Please contact the Jamia team directly for current availability and required documents. Call ' + INSTITUTION_DATA.phoneFormatted + ' or message us on WhatsApp.';
  if (/course|class|study|hifz|quran|tajweed|تعلیم|पढ़ाई/.test(q)) return 'The website lists Qur’an reading and pronunciation, Hifz-e-Qur’an, Islamic studies, Urdu, Arabic, Hindi, English and basic computer education. Please contact the institution to confirm current class schedules.';
  if (/donat|payment|upi|bank|support|sadqa|zakat/.test(q)) return 'To support Jamia, please contact the institution directly before sending money. Verified online payment details have not been published on this website yet.';
  if (/teacher|ustad|staff/.test(q)) return 'Please visit the Our Teachers section for currently listed faculty information.';
  if (/address|location|where|map/.test(q)) return 'The institution is in Sector 63, Noida. Please use the Contact section for the full address and directions.';
  if (/contact|phone|call|whatsapp/.test(q)) return 'You can call ' + INSTITUTION_DATA.phoneFormatted + ' or message on WhatsApp at ' + INSTITUTION_DATA.whatsappFormatted + '.';
  if (/salam|assalamu|hello|hi\b/.test(q)) return 'Wa Alaikum Assalam! Welcome to Jamia Taleemul Quran. I can help with admissions, courses, teachers, donations and contact details.';
  return 'I can help with admissions, courses, teachers, donations and contact details. For anything else, please contact the Jamia team directly using the Contact section.';
};

export const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [setupOpen, setSetupOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [aiConfigured, setAiConfigured] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(AI_ENDPOINT, { method: 'GET' })
      .then(async (response) => response.ok ? response.json() as Promise<{ configured?: boolean }> : null)
      .then((data) => { if (active) setAiConfigured(Boolean(data?.configured)); })
      .catch(() => { if (active) setAiConfigured(false); });
    return () => { active = false; };
  }, []);
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Assalamu Alaikum! I can help with admissions, courses, donations and contact information.' }]);

  const send = async () => {
    const question = draft.trim();
    if (!question || sending) return;
    setDraft('');
    setMessages((current) => [...current, { from: 'user', text: question }]);
    setSending(true);
    try {
      const history: ApiMessage[] = [...messages, { from: 'user', text: question }].slice(-12).map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }));
      const response = await fetch(AI_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: history }) });
      if (!response.ok) throw new Error('AI endpoint returned an error');
      const data = await response.json() as { reply?: string };
      if (!data.reply || typeof data.reply !== 'string') throw new Error('AI response was invalid');
      setMessages((current) => [...current, { from: 'bot', text: data.reply! }]);
    } catch {
      setMessages((current) => [...current, { from: 'bot', text: answerFor(question) + (aiConfigured ? ' AI connection is temporarily unavailable.' : ' Quick answers work now; connect your API key to enable AI answers.') }]);
    } finally { setSending(false); }
  };

  return (
    <>
      <div className="no-print fixed bottom-24 right-3 z-[60] sm:bottom-8 sm:right-6">
        {open && <section aria-label="Jamia virtual assistant" className="mb-3 flex h-[min(30rem,72vh)] w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-[#d4af37]/60 bg-[#fffdf7] shadow-2xl">
          <header className="flex items-center justify-between bg-[#102a43] px-4 py-3 text-white">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37] text-[#102a43]"><Bot className="h-5 w-5" /></span><div><p className="font-semibold">Jamia AI Assistant</p><p className="text-xs text-white/70">{aiConfigured ? 'AI answers ready' : 'Quick answers · API setup needed'}</p></div></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded-lg p-2 hover:bg-white/10"><X className="h-5 w-5" /></button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-3" aria-live="polite">
            {messages.map((m,i) => <div key={i} className={m.from === 'user' ? 'ml-6 rounded-2xl rounded-br-sm bg-[#102a43] p-3 text-sm leading-5 text-white' : 'mr-5 rounded-2xl rounded-bl-sm border border-stone-200 bg-white p-3 text-sm leading-5 text-stone-700'}>{m.text}</div>)}
            {sending && <div className="mr-5 rounded-2xl border border-stone-200 bg-white p-3 text-sm text-stone-500">Jawab taiyar ho raha hai…</div>}
          </div>
          {!aiConfigured && <div className="px-3 pb-2"><button type="button" onClick={() => setSetupOpen(true)} className="flex w-full items-center justify-between rounded-xl border border-[#d4af37]/50 bg-[#fdf8ed] px-3 py-2 text-xs font-semibold text-[#102a43]"><span className="flex items-center gap-2"><Sparkles className="h-4 w-4" />Connect AI API</span><ExternalLink className="h-3.5 w-3.5" /></button></div>}
          <form onSubmit={(e) => { e.preventDefault(); void send(); }} className="flex gap-2 border-t border-stone-200 p-3">
            <input value={draft} onChange={(e) => setDraft(e.target.value)} disabled={sending} placeholder="Ask in Hindi, Urdu or English…" aria-label="Your question" className="min-w-0 flex-1 rounded-xl border border-stone-300 px-3 py-2 text-sm outline-none focus:border-[#102a43] disabled:opacity-60" />
            <button type="submit" disabled={sending || !draft.trim()} aria-label="Send message" className="rounded-xl bg-[#d4af37] p-3 text-[#102a43] hover:bg-[#e5c158] disabled:opacity-50"><Send className="h-4 w-4" /></button>
          </form>
          <p className="px-3 pb-3 text-[10px] text-stone-500">AI-generated answers can be wrong. Verify important details with Jamia staff.</p>
        </section>}
        <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close AI assistant' : 'Open AI assistant'} className="ml-auto flex h-12 items-center gap-2 rounded-full border border-[#d4af37]/70 bg-[#102a43] px-4 text-white shadow-xl transition hover:bg-[#183c5b]"><Sparkles className="h-4 w-4 text-[#f1d592]" /><span className="text-sm font-semibold">AI Help</span></button>
      </div>
      {setupOpen && <div className="no-print fixed inset-0 z-[80] flex items-center justify-center bg-[#102a43]/60 p-4" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setSetupOpen(false); }}>
        <section role="dialog" aria-modal="true" aria-labelledby="ai-setup-title" className="w-full max-w-md rounded-2xl border border-[#d4af37]/50 bg-[#fffdf7] p-5 shadow-2xl sm:p-6">
          <div className="flex items-start justify-between gap-4"><div><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><Sparkles className="h-5 w-5" /></span><h2 id="ai-setup-title" className="mt-3 text-lg font-bold text-[#102a43]">Connect AI answers</h2></div><button onClick={() => setSetupOpen(false)} aria-label="Close setup" className="rounded-lg p-2 text-stone-500 hover:bg-stone-100"><X className="h-5 w-5" /></button></div>
          <p className="mt-3 text-sm leading-6 text-stone-600">Add your Gemini API key in Vercel’s private settings. The key stays on the server and is never shown to website visitors.</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-5 text-stone-700"><li>Open AI settings below and choose <strong>Add Environment Variable</strong>.</li><li>Enter <code className="rounded bg-stone-100 px-1 py-0.5">GEMINI_API_KEY</code> as the name and paste your Gemini key as the value. Select <strong>Production</strong>.</li><li>Save it, then redeploy the latest deployment. The website will connect automatically.</li></ol>
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-[#102a43]">Get a Gemini API key <ExternalLink className="h-4 w-4" /></a>
          <a href={VERCEL_ENV_URL} target="_blank" rel="noopener noreferrer" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#102a43] px-4 py-3 text-sm font-bold text-white">Open AI Settings in Vercel <ExternalLink className="h-4 w-4" /></a>
          <p className="mt-3 text-xs leading-5 text-stone-500">For your safety, do not paste the API key into this chat or a public website field.</p>
          <button onClick={() => setSetupOpen(false)} className="mt-2 w-full rounded-xl px-4 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-100">Close</button>
        </section>
      </div>}
    </>
  );
};
