'use client';

import React from 'react';
import { BUSINESS_INFO } from '@/data/products';
import SanadeLogo from '@/components/SanadeLogo';
import { Heart, Sparkles, ShieldCheck, Leaf, Gift, HandHeart } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#F9F5EF] to-[#FFFDF9] relative overflow-hidden border-y border-[#7A3E38]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Card Showcase */}
        <div className="bg-[#2D3A2C] text-[#FAF6F0] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#D4AF37]/40">
          
          {/* Subtle Background Flourish */}
          <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-serif select-none">
            🌿
          </div>

          {/* Left Column: Brand Emblem & Monogram Meaning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-200 uppercase tracking-widest border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Brand Heritage & Story</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-amber-100">
                {BUSINESS_INFO.meaning.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 italic font-serif">
                "{BUSINESS_INFO.meaning.quote}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
                <div className="text-2xl font-serif font-bold text-amber-300 mb-1">N</div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Namarata</div>
                <div className="text-[11px] text-white/70">Strength & Resilience</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
                <div className="text-2xl font-serif font-bold text-amber-300 mb-1">S</div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Sawri</div>
                <div className="text-[11px] text-white/70">Artistic Creativity</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
                <div className="text-2xl font-serif font-bold text-amber-300 mb-1">D</div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Diksha</div>
                <div className="text-[11px] text-white/70">Pure Dedication</div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Card Graphic Preview */}
          <div className="lg:col-span-6 bg-[#FAF6F0] text-[#2D2727] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#7A3E38]/20 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <SanadeLogo size="lg" showTagline={false} />
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[#7A3E38] tracking-widest block">Official Stamp</span>
                <span className="text-xs font-serif italic text-gray-500">Made with love in India ♥</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#7A3E38]/10 text-[#7A3E38] flex items-center justify-center font-bold">🌐</span>
                <span className="font-medium">www.sanadecrafts.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#7A3E38]/10 text-[#7A3E38] flex items-center justify-center font-bold">✉</span>
                <span className="font-medium">{BUSINESS_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#7A3E38]/10 text-[#7A3E38] flex items-center justify-center font-bold">📞</span>
                <span className="font-bold">{BUSINESS_INFO.formattedPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#7A3E38]/10 text-[#7A3E38] flex items-center justify-center font-bold">📷</span>
                <span className="font-medium">{BUSINESS_INFO.instagramHandle}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Key Pillars Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          <div className="bg-white p-5 rounded-2xl border border-[#7A3E38]/20 shadow-sm text-center space-y-2 hover:shadow-md transition-shadow premium-card">
            <div className="w-12 h-12 rounded-full bg-[#7A3E38]/10 text-[#7A3E38] flex items-center justify-center mx-auto text-xl">
              <HandHeart className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2727]">HANDMADE</h4>
            <p className="text-[11px] text-gray-500">Every petal bent by hand</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#2D3A2C]/20 shadow-sm text-center space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#2D3A2C]/10 text-[#2D3A2C] flex items-center justify-center mx-auto text-xl">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2727]">SUSTAINABLE</h4>
            <p className="text-[11px] text-gray-500">Forever flowers, zero waste</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-sm text-center space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-xl">
              <Heart className="w-6 h-6 fill-rose-500" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2727]">MADE WITH LOVE</h4>
            <p className="text-[11px] text-gray-500">Crafted with affection</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm text-center space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-xl">
              <Gift className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2727]">UNIQUE & THOUGHTFUL</h4>
            <p className="text-[11px] text-gray-500">Customized keepsakes</p>
          </div>
        </div>

      </div>
    </section>
  );
}
