'use client';

import React from 'react';

interface SanadeLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SanadeLogo({ className = '', showTagline = true, size = 'md' }: SanadeLogoProps) {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-11 h-11';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl';

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Emblem Monogram Icon */}
      <div className={`relative ${iconSize} rounded-full bg-gradient-to-br from-[#7A3E38] via-[#2D3A2C] to-[#7A3E38] p-[1.5px] shadow-md transition-transform group-hover:scale-105 shrink-0`}>
        <div className="w-full h-full rounded-full bg-[#FDFBF7] flex items-center justify-center relative overflow-hidden border border-[#D4AF37]/40">
          {/* Circular Wreath Graphic */}
          <svg viewBox="0 0 100 100" className="w-full h-full p-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wreath circle */}
            <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="39" stroke="#7A3E38" strokeWidth="1" opacity="0.4" />
            
            {/* Leaves and Rose Buds Accent */}
            <path d="M 18,50 Q 15,35 28,22 Q 40,12 50,15" stroke="#2D3A2C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 82,50 Q 85,65 72,78 Q 60,88 50,85" stroke="#2D3A2C" strokeWidth="1.5" strokeLinecap="round" />
            
            <circle cx="28" cy="22" r="3" fill="#7A3E38" />
            <circle cx="72" cy="78" r="3" fill="#7A3E38" />
            
            {/* Monogram Text N S D and D */}
            <text x="50" y="58" textAnchor="middle" fill="#7A3E38" fontFamily="Georgia, serif" fontSize="38" fontWeight="bold">D</text>
            <text x="50" y="36" textAnchor="middle" fill="#2D3A2C" fontFamily="sans-serif" fontSize="9" fontWeight="bold" letterSpacing="1">N•S•D</text>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`${titleSize} font-serif font-bold text-[#7A3E38] tracking-tight leading-none group-hover:text-[#2D3A2C] transition-colors`}>
          Sanadé
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#2D3A2C] font-bold">
            C R A F T S
          </span>
          {showTagline && (
            <span className="text-[9px] text-[#7A3E38] italic font-serif hidden sm:inline-block">
              — Handmade with Love ♥
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
