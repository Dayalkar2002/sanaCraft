'use client';

import React from 'react';

interface SanadeLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SanadeLogo({ className = '', showTagline = true, size = 'md' }: SanadeLogoProps) {
  const iconSize = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-24 h-24' : 'w-14 h-14';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Exact Uploaded Circular Logo Image */}
      <div className={`relative ${iconSize} rounded-full overflow-hidden shadow-md border-2 border-[#D4AF37] group-hover:scale-105 transition-transform shrink-0 bg-[#FFF5F3]`}>
        <img
          src="/images/sana-craft-logo.png"
          alt="Sana Craft Studio Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`${titleSize} font-serif font-extrabold text-[#8E2020] tracking-tight leading-none group-hover:text-[#C95B4A] transition-colors`}>
          Sana Craft Studio
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C95B4A] font-bold">
            HANDMADE CROCHET & CRAFTS
          </span>
          {showTagline && (
            <span className="text-[9px] text-[#8E2020] italic font-serif hidden sm:inline-block">
              — Handmade with Love 🌸
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
