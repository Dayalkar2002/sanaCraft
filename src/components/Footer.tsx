'use client';

import React from 'react';
import { BUSINESS_INFO } from '@/data/products';
import { Instagram, MessageCircle, Heart, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const openWhatsApp = () => {
    const text = encodeURIComponent(BUSINESS_INFO.welcomeGreeting);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#2D2727] text-white pt-16 pb-12 border-t border-rose-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E88D7D] to-[#8E2020] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🌸
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E88D7D] font-semibold block -mt-1">
                  Craft Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-xs text-amber-300/90 italic">
              {BUSINESS_INFO.motto}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-amber-400 uppercase tracking-wider">
              Explore Collection
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#catalog" className="hover:text-[#E88D7D] transition-colors">
                  Handmade Crochet Bouquets
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E88D7D] transition-colors">
                  Velvet Flower Garlands (Haar)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E88D7D] transition-colors">
                  Laddu Gopal Lotus Thrones
                </a>
              </li>
              <li>
                <a href="#custom-order" className="hover:text-[#E88D7D] transition-colors">
                  Custom Order Request (₹50–₹450)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-amber-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button onClick={openWhatsApp} className="hover:text-emerald-400 transition-colors">
                  WhatsApp: {BUSINESS_INFO.formattedPhone}
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-300 transition-colors truncate">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Social CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-amber-400 uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-xs text-white/70">
              Need instant answers? Chat with us directly on WhatsApp Business!
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md whatsapp-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Chat</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 pt-4 gap-2">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
            <span>for flower lovers worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
