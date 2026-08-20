'use client';

import React from 'react';

interface SanadeLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
}

const markSize = {
  sm: 'h-12 w-12',
  md: 'h-14 w-14 sm:h-16 sm:w-16',
  lg: 'h-28 w-28 sm:h-36 sm:w-36'
};

const titleSize = {
  sm: 'text-sm',
  md: 'text-lg sm:text-xl',
  lg: 'text-2xl sm:text-3xl'
};

export default function SanadeLogo({
  className = '',
  showTagline = true,
  size = 'md',
  onDark = false
}: SanadeLogoProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div
        className={`relative ${markSize[size]} rounded-2xl overflow-hidden shrink-0 bg-[#F8F1E7] shadow-md ring-1 ring-[#D4AF37]/50 group-hover:scale-[1.03] transition-transform`}
      >
        <img
          src="/images/snd-logo.png"
          alt="SND — Handmade with Love"
          className="w-full h-full object-cover"
        />
      </div>

      {showTagline && (
        <div className="flex flex-col min-w-0">
          <span
            className={`${titleSize[size]} font-serif font-extrabold tracking-tight leading-none ${
              onDark ? 'text-[#FAF6F0]' : 'text-[#2D3A2C]'
            }`}
          >
            SND
          </span>
          <span
            className={`text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold mt-1 ${
              onDark ? 'text-amber-200/90' : 'text-[#7A3E38]'
            }`}
          >
            Handmade with Love
          </span>
        </div>
      )}
    </div>
  );
}
