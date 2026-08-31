import React, { useState } from 'react';
import { INSTITUTION_DATA } from '../data/institutionData';
import { Phone, MessageCircle, MapPin, Navigation, Copy, Check, Clock, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(INSTITUTION_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INSTITUTION_DATA.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  // Google Maps Search URL with exact encoded address
  const encodedAddress = encodeURIComponent("Budh Vihar Sector 63 Noida Gali Number 13 14 Gautam Buddh Nagar Uttar Pradesh");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Urdu prominence */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064e3b]/10 border border-[#064e3b]/20 text-[#064e3b] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
            <span>{INSTITUTION_DATA.contact.subheadingEnglish}</span>
          </div>

          <h2 
            dir="rtl"
            className="urdu text-4xl sm:text-5xl md:text-6xl font-bold text-[#064e3b] leading-[2.1]"
          >
            {INSTITUTION_DATA.contact.headingUrdu}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-xl mx-auto font-serif">
            Get in touch directly with the administration of Jamia Taleemul Quran for admissions, inquiries, or visits.
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Block */}
            <div className="bg-[#f8f6f0] rounded-3xl p-6 sm:p-7 border border-[#e5e1da] shadow-sm hover:border-[#064e3b] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#064e3b]/10 text-[#064e3b] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">Phone Number</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#064e3b] font-mono mt-0.5">
                    {INSTITUTION_DATA.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={`tel:${INSTITUTION_DATA.phone}`}
                  id="contact-call-now-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#d4af37] text-[#064e3b] font-bold text-xs uppercase tracking-wider hover:bg-[#e5c158] shadow-sm transition-all font-sans"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-3 rounded-lg bg-white border border-[#e5e1da] text-stone-700 hover:bg-stone-100 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* WhatsApp Block */}
            <div className="bg-[#f8f6f0] rounded-3xl p-6 sm:p-7 border border-[#e5e1da] shadow-sm hover:border-[#25D366] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">WhatsApp Messaging</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#064e3b] font-mono mt-0.5">
                    {INSTITUTION_DATA.whatsapp}
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/91${INSTITUTION_DATA.whatsapp}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20contact%20Jamia%20Taleemul%20Quran`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-us-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] shadow-sm transition-all font-sans"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Address Block */}
            <div className="bg-[#f8f6f0] rounded-3xl p-6 sm:p-7 border border-[#e5e1da] shadow-sm hover:border-[#064e3b] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#064e3b]/10 text-[#064e3b] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">Physical Address</div>
                  <p className="text-stone-800 text-sm sm:text-base font-medium mt-1 leading-relaxed font-serif">
                    {INSTITUTION_DATA.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-[#e5e1da]">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-[#e5e1da] text-[#064e3b] text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors font-sans"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#064e3b]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-[#e5e1da] text-stone-800 text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors font-sans"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Section */}
          <div className="lg:col-span-7">
            <div className="bg-[#f8f6f0] rounded-3xl border border-[#e5e1da] p-4 sm:p-6 shadow-md">
              
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#064e3b]" />
                  <span className="font-bold text-[#064e3b] text-base font-serif">Location Map</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
                  Sector 63, Noida, Uttar Pradesh
                </span>
              </div>

              {/* Map Embed Frame */}
              <div className="w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#e5e1da] relative shadow-inner bg-stone-100">
                <iframe
                  title="Jamia Taleemul Quran Location Map"
                  src={embedMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white border border-[#e5e1da] flex items-center justify-between text-xs text-stone-600 font-serif">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#064e3b]"></span>
                  <span>Budh Vihar, Sector 63, Noida, Uttar Pradesh</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#064e3b] font-bold hover:underline inline-flex items-center gap-1 font-sans uppercase tracking-wider"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
