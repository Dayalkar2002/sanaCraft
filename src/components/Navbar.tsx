'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { BUSINESS_INFO } from '@/data/products';
import { ShoppingBag, MessageCircle, Heart, Sparkles, Menu, X, Instagram, Phone } from 'lucide-react';

export default function Navbar() {
  const { totalItems, setIsCartOpen, currency, setCurrency, wishlist } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(BUSINESS_INFO.welcomeGreeting);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#8E2020] via-[#C95B4A] to-[#8E2020] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 animate-pulse text-[#D4AF37]" />
        <span>✨ Welcome to <strong>{BUSINESS_INFO.name}</strong> — {BUSINESS_INFO.tagline}</span>
        <span className="hidden md:inline-block text-white/80">| Free Gift Card with Every Bouquet!</span>
        <button
          onClick={openWhatsApp}
          className="ml-2 bg-white/20 hover:bg-white/30 text-white text-xs px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 border border-white/30"
        >
          <MessageCircle className="w-3.5 h-3.5 text-green-300" />
          <span>Quick WhatsApp</span>
        </button>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-panel shadow-md py-3' : 'bg-[#FAF6F0]/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E88D7D] to-[#8E2020] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              🌸
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-[#8E2020] tracking-tight flex items-center gap-1">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C95B4A] font-semibold block -mt-1">
                Craft Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#2D2727]">
            <a href="#catalog" className="hover:text-[#C95B4A] transition-colors">
              Collection
            </a>
            <a href="#custom-order" className="hover:text-[#C95B4A] transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Custom Crafts
            </a>
            <a href="#instagram" className="hover:text-[#C95B4A] transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              Gallery
            </a>
            <a href="#contact" className="hover:text-[#C95B4A] transition-colors">
              User Query & Contact
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Selector Toggle */}
            <div className="flex items-center bg-[#FAF6F0] p-1 rounded-full border border-[#E88D7D]/30 text-xs font-semibold">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'USD' ? 'bg-[#C95B4A] text-white shadow-sm' : 'text-[#2D2727] hover:text-[#C95B4A]'
                }`}
              >
                $ USD
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'INR' ? 'bg-[#C95B4A] text-white shadow-sm' : 'text-[#2D2727] hover:text-[#C95B4A]'
                }`}
              >
                ₹ INR
              </button>
            </div>

            {/* Direct WhatsApp Quick Chat */}
            <button
              onClick={openWhatsApp}
              title="Chat with Sana Craft on WhatsApp"
              className="hidden lg:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-full transition-all shadow-sm whatsapp-glow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </button>

            {/* Wishlist Indicator */}
            {wishlist.length > 0 && (
              <a
                href="#catalog"
                className="relative p-2 text-[#8E2020] hover:scale-110 transition-transform"
                title="Wishlist"
              >
                <Heart className="w-5 h-5 fill-[#E88D7D] text-[#8E2020]" />
                <span className="absolute -top-1 -right-1 bg-[#8E2020] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              </a>
            )}

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#FFFDF9] border border-[#E88D7D]/40 hover:border-[#C95B4A] rounded-full text-[#8E2020] transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#C95B4A] to-[#8E2020] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#8E2020] rounded-lg hover:bg-black/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF9] border-t border-[#E88D7D]/20 px-6 py-5 shadow-xl flex flex-col gap-4 text-center mt-2 animate-fadeIn">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#C95B4A]"
            >
              Collection & Pricing ($0–$300)
            </a>
            <a
              href="#custom-order"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#C95B4A] flex items-center justify-center gap-1"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Custom Order Builder
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#C95B4A]"
            >
              Instagram Showcase
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#C95B4A]"
            >
              User Query & Contact
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Connect via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
