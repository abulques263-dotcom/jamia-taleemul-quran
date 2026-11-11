import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { INSTITUTION_DATA } from '../data/institutionData';

export const ContactActionWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent('Assalamu Alaikum, I would like to contact Jamia Taleemul Quran.');

  return <div className="no-print fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-3 z-[55] sm:bottom-6 sm:left-6">
    {open && <div className="mb-2 w-56 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl" role="group" aria-label="Contact options">
      <a href={`tel:${INSTITUTION_DATA.phone}`} className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[#102a43] hover:bg-[#fdf8ed]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#102a43] text-white"><Phone className="h-4 w-4" /></span>Call the Jamia</a>
      <a href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=${message}`} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[#102a43] hover:bg-[#fdf8ed]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] text-white"><MessageCircle className="h-4 w-4" /></span>Message on WhatsApp</a>
    </div>}
    <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close contact options' : 'Open contact options'} className="flex h-12 items-center gap-2 rounded-full border border-white bg-[#102a43] px-4 text-sm font-semibold text-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#183c5b]">
      {open ? <X className="h-4 w-4 text-[#f1d592]" /> : <MessageCircle className="h-4 w-4 text-[#f1d592]" />}
      <span>{open ? 'Close' : 'Contact'}</span>
    </button>
  </div>;
};
