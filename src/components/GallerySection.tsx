import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/institutionData';
import { GalleryItem } from '../types';
import { 
  Building2, 
  School, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Image as ImageIcon,
  Upload,
  Info,
  Check,
  Eye
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const getPlaceholderIcon = (id: string) => {
    switch (id) {
      case 'building':
        return <Building2 className="w-10 h-10 text-[#064e3b]" />;
      case 'classroom':
        return <School className="w-10 h-10 text-[#064e3b]" />;
      case 'students':
        return <Users className="w-10 h-10 text-[#064e3b]" />;
      case 'teachers':
        return <GraduationCap className="w-10 h-10 text-[#064e3b]" />;
      case 'quran-learning':
        return <BookOpen className="w-10 h-10 text-[#064e3b]" />;
      case 'activities':
        return <Sparkles className="w-10 h-10 text-[#064e3b]" />;
      default:
        return <ImageIcon className="w-10 h-10 text-[#064e3b]" />;
    }
  };

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setItems(prev => prev.map(item => item.id === id ? { ...item, customImage: url } : item));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>Visual Glimpse & Facilities</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {"گیلری"}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-xl mx-auto font-serif">
            Designated photographic archive for the campus, classrooms, students, and educational activities of Jamia Taleemul Quran.
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>

          {/* Transparent Notice about Placeholders */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f8f6f0] border border-[#e5e1da] text-xs text-stone-600 max-w-2xl mx-auto font-serif">
            <Info className="w-4 h-4 text-[#064e3b] flex-shrink-0" />
            <span>
              Official photograph slots. Stock images are intentionally avoided to uphold authentic institutional representation.
            </span>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div 
              key={item.id}
              className="bg-[#f8f6f0] rounded-3xl border border-[#e5e1da] overflow-hidden hover:border-[#064e3b] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame / Placeholder */}
              <div className="relative aspect-[4/3] bg-white border-b border-[#e5e1da] flex flex-col items-center justify-center p-6 text-center group">
                
                {item.customImage ? (
                  <img 
                    src={item.customImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    {/* Subtle Geometric Pattern Box */}
                    <div className="w-20 h-20 rounded-2xl bg-[#f8f6f0] shadow-sm border border-[#d4af37] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      {getPlaceholderIcon(item.id)}
                    </div>

                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#064e3b] bg-[#f8f6f0] px-3 py-1 rounded-full border border-[#d4af37] font-sans">
                      Photo Placeholder
                    </div>
                  </>
                )}

                {/* Overlay Replace/Upload Button for Admin convenience */}
                <label className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-[#064e3b] text-white shadow-md hover:bg-[#043c2e] cursor-pointer transition-all">
                  <Upload className="w-4 h-4 text-[#d4af37]" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => handleImageUpload(item.id, e)} 
                  />
                </label>
              </div>

              {/* Card Meta details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider font-sans">
                    {item.category}
                  </span>
                  <span 
                    dir="rtl" 
                    className="urdu text-base font-bold text-[#064e3b]"
                  >
                    {item.urduTitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#064e3b] mb-2 font-serif">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-serif">
                  {item.placeholderText}
                </p>
              </div>

              {/* Bottom Card Bar */}
              <div className="px-6 py-3 bg-white border-t border-[#e5e1da] flex items-center justify-between text-xs font-sans text-stone-500">
                <span className="font-bold text-[#064e3b] uppercase tracking-wider">Jamia Taleemul Quran</span>
                <span className="text-[#064e3b] font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Ready for upload
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
