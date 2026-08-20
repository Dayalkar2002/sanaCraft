'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { BUSINESS_INFO } from '@/data/products';
import SanadeLogo from '@/components/SanadeLogo';
import { ShoppingBag, MessageCircle, Heart, Sparkles, Menu, X, Instagram, LogIn, LogOut, User as UserIcon } from 'lucide-react';

export default function Navbar() {
  const { totalItems, setIsCartOpen, currency, setCurrency, wishlist } = useCart();
  const { user, openAuthModal, logout } = useAuth();

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
      <div className="bg-gradient-to-r from-[#7A3E38] via-[#2D3A2C] to-[#7A3E38] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 animate-pulse text-[#D4AF37]" />
        <span>✨ Welcome to <strong>{BUSINESS_INFO.name}</strong> — {BUSINESS_INFO.tagline}</span>
        <span className="hidden md:inline-block text-white/80">| Three Hearts. One Dream. Crafted with Love.</span>
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
          scrolled
            ? 'glass-panel shadow-[0_8px_30px_rgba(122,62,56,0.12)] py-3 border-b border-[#D4AF37]/25'
            : 'bg-[#FAF6F0]/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3">
            <SanadeLogo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#2D2727]">
            <a href="#catalog" className="hover:text-[#7A3E38] transition-colors">
              Collection
            </a>
            <a href="#story" className="hover:text-[#7A3E38] transition-colors flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              Our Story
            </a>
            <a href="#custom-order" className="hover:text-[#7A3E38] transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Custom Crafts
            </a>
            <a href="#instagram" className="hover:text-[#7A3E38] transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              Gallery
            </a>
            <a href="#contact" className="hover:text-[#7A3E38] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Selector Toggle */}
            <div className="flex items-center bg-[#FAF6F0] p-1 rounded-full border border-[#7A3E38]/30 text-xs font-semibold">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'INR' ? 'bg-[#7A3E38] text-white shadow-sm' : 'text-[#2D2727] hover:text-[#7A3E38]'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'USD' ? 'bg-[#7A3E38] text-white shadow-sm' : 'text-[#2D2727] hover:text-[#7A3E38]'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Auth Profile / Sign In / Logout Button */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="hidden lg:flex items-center gap-1.5 bg-rose-50 border border-rose-200 text-[#7A3E38] px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                  <UserIcon className="w-3.5 h-3.5 text-[#7A3E38]" />
                  <span>Hi, {user.username}</span>
                </div>
                <button
                  onClick={logout}
                  title="Log Out of Account"
                  className="flex items-center gap-1 text-xs font-semibold bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 border border-gray-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('signin')}
                className="flex items-center gap-1.5 bg-[#7A3E38] hover:bg-[#2D3A2C] text-white text-xs font-bold px-3.5 py-2 rounded-full transition-all shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In / Register</span>
              </button>
            )}

            {/* Wishlist Indicator */}
            {wishlist.length > 0 && (
              <a
                href="#catalog"
                className="relative p-2 text-[#7A3E38] hover:scale-110 transition-transform"
                title="Wishlist"
              >
                <Heart className="w-5 h-5 fill-[#E88D7D] text-[#7A3E38]" />
                <span className="absolute -top-1 -right-1 bg-[#7A3E38] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              </a>
            )}

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#FFFDF9] border border-[#7A3E38]/40 hover:border-[#7A3E38] rounded-full text-[#7A3E38] transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#7A3E38] to-[#2D3A2C] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#7A3E38] rounded-lg hover:bg-black/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF9] border-t border-[#7A3E38]/20 px-6 py-5 shadow-xl flex flex-col gap-4 text-center mt-2 animate-fadeIn">
            {user ? (
              <div className="py-2 bg-rose-50 rounded-xl p-3 flex items-center justify-between border border-rose-200">
                <span className="text-xs font-bold text-[#7A3E38]">🌸 Signed in as: {user.username}</span>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs text-red-600 font-bold flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('signin');
                }}
                className="w-full bg-[#7A3E38] text-white font-bold py-2.5 rounded-full flex items-center justify-center gap-2 shadow-md"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In / Sign Up</span>
              </button>
            )}

            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#7A3E38]"
            >
              Collection & Pricing (₹50–₹450)
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#7A3E38]"
            >
              Meaning Behind Sanadé
            </a>
            <a
              href="#custom-order"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#7A3E38] flex items-center justify-center gap-1"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Custom Order Builder
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#7A3E38]"
            >
              Instagram Showcase
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2727] font-medium border-b border-gray-100 hover:text-[#7A3E38]"
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
