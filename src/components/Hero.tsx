'use client';

import React from 'react';
import Image from 'next/image';
import { BUSINESS_INFO, PRODUCTS } from '@/data/products';
import { Sparkles, MessageCircle, ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Hero() {
  const { setSelectedProductForModal, formatPrice } = useCart();

  const featuredHeroProducts = PRODUCTS.slice(0, 3);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ! Thank you for reaching out to Sana Craft. 🌸✨\nI'm exploring your website and would love to ask a query about custom crafts.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0]">
      {/* Decorative Background Glowing Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#E88D7D]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#E88D7D]/40 rounded-full px-4 py-1.5 shadow-sm text-xs sm:text-sm font-semibold text-[#8E2020]">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '8s' }} />
              <span>{BUSINESS_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#2D2727] tracking-tight leading-[1.15]">
              Handcrafted Blooms & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#8E2020] via-[#C95B4A] to-[#D4AF37] bg-clip-text text-transparent glow-text">
                Everlasting Keepsakes
              </span>
            </h1>

            {/* Sub-Headline & Motto */}
            <p className="text-lg sm:text-xl text-[#2D2727]/80 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {BUSINESS_INFO.secondaryTagline}. Delight your loved ones with bespoke crochet bouquets, plush velvet flower garlands, and sacred lotus thrones that never wither.
            </p>

            <div className="bg-[#FAF6F0] border-l-4 border-[#C95B4A] p-3 rounded-r-lg max-w-xl text-sm italic text-[#8E2020] font-medium flex items-center gap-2">
              <span className="text-lg">🌸</span>
              <span>"{BUSINESS_INFO.motto}"</span>
            </div>

            {/* Action Call-to-Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalog"
                className="w-full sm:w-auto bg-gradient-to-r from-[#C95B4A] to-[#8E2020] text-white font-semibold px-8 py-3.5 rounded-full glow-btn flex items-center justify-center gap-2 text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Explore Collection (₹50–₹450)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={openWhatsApp}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-full whatsapp-glow flex items-center justify-center gap-2.5 text-base transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Direct WhatsApp Order</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E88D7D]/20 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold font-serif text-[#8E2020]">1,000+</div>
                <div className="text-xs text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#8E2020] flex items-center justify-center lg:justify-start gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-gray-600">Top Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#8E2020]">100%</div>
                <div className="text-xs text-gray-600">Forever Flowers</div>
              </div>
            </div>

          </div>

          {/* Right Visual Hero Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Featured Showcase Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#E88D7D] via-[#D4AF37] to-[#8E2020] opacity-30 blur-lg animate-pulse-glow" />

              <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl p-4 border border-white">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden group">
                  <Image
                    src={featuredHeroProducts[0].image}
                    alt={featuredHeroProducts[0].title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#8E2020] shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Best Seller Bouquet</span>
                  </div>

                  {/* Bottom Product Details Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                      {featuredHeroProducts[0].category}
                    </span>
                    <h3 className="text-lg font-serif font-bold leading-snug line-clamp-1">
                      {featuredHeroProducts[0].title}
                    </h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xl font-extrabold text-amber-300">
                        {formatPrice(featuredHeroProducts[0].priceUSD, featuredHeroProducts[0].priceINR)}
                      </span>
                      <button
                        onClick={() => setSelectedProductForModal(featuredHeroProducts[0])}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/40 transition-all"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mini Preview Thumbnails Row */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {featuredHeroProducts.slice(1, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedProductForModal(item)}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 hover:bg-white border border-[#E88D7D]/20 cursor-pointer transition-all hover:shadow-sm"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-xs font-semibold text-[#2D2727] truncate">{item.title}</h4>
                        <p className="text-xs text-[#8E2020] font-bold">{formatPrice(item.priceUSD, item.priceINR)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Floating Craft Badge 1 */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-[#E88D7D]/30 hidden sm:flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-full bg-rose-100 text-[#8E2020] flex items-center justify-center font-bold">
                  ✨
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2D2727]">100% Handcrafted</div>
                  <div className="text-[10px] text-gray-500">Pipe Cleaner & Crochet</div>
                </div>
              </div>

              {/* Floating Craft Badge 2 */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-[#E88D7D]/30 hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  🌿
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2D2727]">Forever Flowers</div>
                  <div className="text-[10px] text-gray-500">Zero Maintenance</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
