import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/institutionData';
import { GalleryItem } from '../types';
import { Building2, School, Users, GraduationCap, BookOpen, Sparkles, Image as ImageIcon, Info, Check, UploadCloud } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [message, setMessage] = useState('');
  const getPlaceholderIcon = (id: string) => {
    const props = { className: 'h-9 w-9 text-[#102a43]' };
    switch (id) {
      case 'building': return <Building2 {...props} />;
      case 'classroom': return <School {...props} />;
      case 'students': return <Users {...props} />;
      case 'teachers': return <GraduationCap {...props} />;
      case 'quran-learning': return <BookOpen {...props} />;
      case 'activities': return <Sparkles {...props} />;
      default: return <ImageIcon {...props} />;
    }
  };
  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setItems((previous) => {
      const next = [...previous];
      files.forEach((file, index) => {
        const targetId = index === 0 ? id : GALLERY_ITEMS[(GALLERY_ITEMS.findIndex((item) => item.id === id) + index) % GALLERY_ITEMS.length].id;
        const url = URL.createObjectURL(file);
        const targetIndex = next.findIndex((item) => item.id === targetId);
        if (targetIndex >= 0) next[targetIndex] = { ...next[targetIndex], customImage: url };
      });
      return next;
    });
    setMessage(files.length === 1 ? 'Photo added to this preview.' : `${files.length} photos added to this preview. Use the ZIP method below to publish permanent photos.`);
    e.target.value = '';
  };
  return (
    <section id="gallery" className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#102a43]/15 bg-[#fdf8ed] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#102a43]">Visual glimpse & facilities</span>
          <h2 dir="rtl" className="urdu text-3xl font-bold leading-[1.65] text-[#102a43] sm:text-4xl">گیلری</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-stone-600">Campus, staff, students and learning activities at Jamia Taleemul Quran.</p>
          <div className="mx-auto mt-4 inline-flex max-w-2xl items-start gap-2 rounded-xl border border-[#d4af37]/40 bg-[#fffaf0] p-3 text-left text-xs leading-5 text-stone-600"><Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9a7416]" /><span>Real Jamia photographs will appear here after you provide them. You can select several files together for a temporary preview.</span></div>
          {message && <p role="status" className="mt-2 text-xs font-medium text-[#102a43]">{message}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => <article key={item.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-[#fdf8ed] shadow-sm transition hover:border-[#d4af37] hover:shadow-md">
            <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-stone-200 bg-white">
              {item.customImage ? <button onClick={() => setSelectedItem(item)} className="h-full w-full" aria-label={`View ${item.title} photo`}><img src={item.customImage} alt={item.title} className="h-full w-full object-cover" /></button> : <div className="flex flex-col items-center gap-3 p-5 text-center"><span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4af37]/70 bg-[#fdf8ed]">{getPlaceholderIcon(item.id)}</span><span className="rounded-full border border-[#d4af37]/70 bg-[#fffaf0] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#102a43]">Photo placeholder</span></div>}
              <label className="absolute bottom-3 right-3 inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl bg-[#102a43] px-3 py-2 text-xs font-bold text-white shadow-lg hover:bg-[#183c5b]"><UploadCloud className="h-4 w-4 text-[#f1d592]" /><span>Add photo</span><input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => handleImageUpload(item.id,e)} /></label>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5"><div className="flex items-center justify-between gap-3"><span className="text-[10px] font-bold uppercase tracking-wider text-[#9a7416]">{item.category}</span><span dir="rtl" className="urdu text-sm font-bold text-[#102a43]">{item.urduTitle}</span></div><h3 className="mt-2 font-serif text-lg font-bold text-[#102a43]">{item.title}</h3><p className="mt-1 flex-1 text-xs leading-5 text-stone-600">{item.placeholderText}</p><div className="mt-3 flex items-center gap-1.5 border-t border-stone-200 pt-3 text-[10px] font-semibold text-stone-500"><Check className="h-3.5 w-3.5 text-[#9a7416]" /> Jamia Taleemul Quran</div></div>
          </article>)}
        </div>
      </div>
      {selectedItem?.customImage && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#102a43]/80 p-4" onClick={() => setSelectedItem(null)} role="presentation"><div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}><button onClick={() => setSelectedItem(null)} className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-2 text-sm font-bold text-[#102a43] shadow">Close</button><img src={selectedItem.customImage} alt={selectedItem.title} className="max-h-[85vh] max-w-full rounded-xl object-contain" /></div></div>}
    </section>
  );
};
