'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { BUSINESS_INFO } from '@/data/products';
import SanadeLogo from '@/components/SanadeLogo';
import { Sparkles, ArrowRight, Heart, ShieldCheck, Star, MessageCircle, Leaf } from 'lucide-react';

export default function Hero() {
  const { setSelectedProduct, setIsModalOpen, formatPrice } = useCart();

  const handleCustomOrderClick = () => {
    const el = document.getElementById('custom-order');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCatalogClick = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#7A3E38]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#2D3A2C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#7A3E38]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#7A3E38] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.secondaryTagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#2D2727] tracking-tight leading-[1.15]">
              Handcrafted <span className="gradient-text font-serif italic">Elegance</span> & Timeless Floral Art
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Welcome to <strong>{BUSINESS_INFO.name}</strong>. We craft bespoke pipe cleaner flowers, everlasting crochet bouquets, and sacred velvet Garlands (Haar) designed to capture cherished memories forever.
            </p>

            {/* Pricing Hint Bar */}
            <div className="bg-[#2D3A2C] text-[#FAF6F0] px-4 py-3 rounded-2xl inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-semibold shadow-md border border-[#D4AF37]/30">
              <span className="flex items-center gap-1">
                🏷️ Handcrafted Price Range: <strong className="text-amber-300 ml-1 font-bold">{formatPrice(1, 50)} to {formatPrice(7, 450)}</strong>
              </span>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="flex items-center gap-1 text-emerald-300 font-bold">
                <Leaf className="w-4 h-4" /> Sustainable & Everlasting
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleCatalogClick}
                className="w-full sm:w-auto bg-[#7A3E38] hover:bg-[#2D3A2C] text-white font-bold py-4 px-8 rounded-full text-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleCustomOrderClick}
                className="w-full sm:w-auto bg-[#FFFDF9] border-2 border-[#7A3E38] text-[#7A3E38] hover:bg-[#7A3E38] hover:text-white font-bold py-4 px-8 rounded-full text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Custom Order Request</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#7A3E38]/15 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#7A3E38]">100%</div>
                <div className="text-xs text-gray-600 font-medium">Handcrafted with Love</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#7A3E38]">5.0 ★</div>
                <div className="text-xs text-gray-600 font-medium">Customer Rating</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#7A3E38]">Worldwide</div>
                <div className="text-xs text-gray-600 font-medium">Express Shipping</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Card Container */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 border border-[#7A3E38]/30 shadow-2xl space-y-4">
                
                {/* Main Product Showcase Image */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner group">
                  <img
                    src="/images/product-1.jpg"
                    alt="Sunburst Sunflower & Daisy Crochet Bouquet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#7A3E38] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ★ #1 Bestseller
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <h3 className="text-lg font-serif font-bold drop-shadow-md">
                      Sunburst Sunflower Bouquet
                    </h3>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300 text-sm">
                        {formatPrice(4, 250)}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedProduct({
                            id: 'sc-01',
                            title: 'Sunburst Sunflower & Daisy Crochet Bouquet',
                            category: 'Bouquets',
                            priceUSD: 4,
                            priceINR: 250,
                            rating: 5.0,
                            reviewCount: 48,
                            image: '/images/product-1.jpg',
                            description: 'Handmade crochet bouquet wrapped in vintage newspaper print with vibrant sunflower and white daisies.',
                            features: ['100% Premium Yarn', 'Never Wither', 'Vintage Newspaper Wrap'],
                            stock: 'In Stock'
                          });
                          setIsModalOpen(true);
                        }}
                        className="bg-white text-[#7A3E38] hover:bg-[#FAF6F0] font-bold px-3 py-1.5 rounded-full shadow-sm text-xs transition-colors"
                      >
                        Quick View ↗
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-Feature Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <img
                      src="/images/product-2.jpg"
                      alt="Velvet Daisy Ensemble"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold text-[#2D2727] truncate">Velvet Daisy</div>
                      <div className="text-[10px] text-[#7A3E38] font-bold">{formatPrice(1, 50)}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <img
                      src="/images/product-4.jpg"
                      alt="Laddu Gopal Lotus Throne"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold text-[#2D2727] truncate">Lotus Throne</div>
                      <div className="text-[10px] text-[#7A3E38] font-bold">{formatPrice(2, 150)}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#7A3E38]/20 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  🌸
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2D2727]">Sanadé Crafts</div>
                  <div className="text-[10px] text-gray-500 font-medium">Handmade with Love ♥</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
