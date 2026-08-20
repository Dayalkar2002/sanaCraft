'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Crown, ShoppingBag, Heart, Sparkles, ArrowRight, Gem, User } from 'lucide-react';

export default function MemberDashboard() {
  const { user, openAuthModal } = useAuth();
  const { totalItems, totalPriceUSD, totalPriceINR, formatPrice, setIsCartOpen, wishlist } = useCart();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!user) {
    return (
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-[0_20px_60px_-20px_rgba(122,62,56,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1412] via-[#2D3A2C] to-[#3D1C18]" />
            <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="relative p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-amber-200/90 font-bold">
                  <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Atelier Dashboard
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF6F0]">
                  Your private <span className="italic text-[#D4AF37]">studio lounge</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/65 max-w-lg">
                  Sign in to save your cart, book handmade orders, and unlock gold-member checkout.
                </p>
              </div>
              <button
                onClick={() => openAuthModal('signin', 'Sign in to open your atelier dashboard')}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e0c05a] text-[#1A1412] font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-all"
              >
                <Crown className="w-4 h-4" />
                Sign in to continue
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/40 shadow-[0_20px_60px_-20px_rgba(122,62,56,0.45)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1412] via-[#2D3A2C] to-[#3D1C18]" />
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-[#7A3E38]/30 blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="relative p-5 sm:p-7 space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-amber-200/90 font-bold">
                  <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Private Atelier Dashboard
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF6F0]">
                  Welcome back, <span className="italic text-[#D4AF37]">{user.username}</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/65 max-w-xl">
                  Your reserved studio lounge — review the cart, wishlist treasures, and book a handcrafted order.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-2xl px-3.5 py-2.5 backdrop-blur-md">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40">
                  <User className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Member</p>
                  <p className="text-xs font-bold text-white">{user.mobile}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="group text-left rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#D4AF37]/50 p-4 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-xl bg-[#7A3E38]/80 text-white flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Inquiry Cart</p>
                <p className="text-xl font-serif font-bold text-white mt-0.5">{totalItems} items</p>
                <p className="text-xs text-amber-200/90 font-semibold mt-1">
                  {formatPrice(totalPriceUSD, totalPriceINR)}
                </p>
              </button>

              <a
                href="#catalog"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('catalog');
                }}
                className="group text-left rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#D4AF37]/50 p-4 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-xl bg-rose-500/80 text-white flex items-center justify-center">
                    <Heart className="w-4 h-4 fill-white" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Wishlist</p>
                <p className="text-xl font-serif font-bold text-white mt-0.5">{wishlist.length} saved</p>
                <p className="text-xs text-white/55 font-medium mt-1">Treasures you love</p>
              </a>

              <a
                href="#custom-order"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('custom-order');
                }}
                className="group text-left rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#D4AF37]/50 p-4 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-xl bg-[#D4AF37] text-[#1A1412] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Bespoke Order</p>
                <p className="text-xl font-serif font-bold text-white mt-0.5">Custom</p>
                <p className="text-xs text-white/55 font-medium mt-1">Design your craft</p>
              </a>

              <div className="rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-white/5 border border-[#D4AF37]/35 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-xl bg-white/10 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/30">
                    <Gem className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-amber-200/80 font-bold">Studio Status</p>
                <p className="text-xl font-serif font-bold text-white mt-0.5">Gold Member</p>
                <p className="text-xs text-white/55 font-medium mt-1">Priority WhatsApp booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
