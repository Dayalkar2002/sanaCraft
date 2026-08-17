'use client';

import React from 'react';
import Image from 'next/image';
import { BUSINESS_INFO, PRODUCTS } from '@/data/products';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function InstagramSection() {
  const instaImages = PRODUCTS.slice(0, 8);

  const stories = [
    { title: 'Crochet 🌸', img: '/images/product-1.jpg' },
    { title: 'Garlands 🏵️', img: '/images/product-3.jpg' },
    { title: 'Divine Lotus 🪔', img: '/images/product-4.jpg' },
    { title: 'Reviews ⭐', img: '/images/product-2.jpg' },
    { title: 'Custom Gift 🎁', img: '/images/product-11.jpg' }
  ];

  return (
    <section id="instagram" className="py-16 md:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white border border-pink-200 px-3.5 py-1 rounded-full text-xs font-bold text-pink-700 shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>{BUSINESS_INFO.instagramHandle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#2D2727]">
            Follow Sana Craft Studio on Instagram
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Get daily inspiration, behind-the-scenes craft videos, new floral designs, and customer order spotlights!
          </p>
        </div>

        {/* Story Highlights Row */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 overflow-x-auto py-2">
          {stories.map((story, i) => (
            <a
              key={i}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group shrink-0"
            >
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 group-hover:scale-105 transition-transform shadow-md">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white bg-white">
                  <Image src={story.img} alt={story.title} fill className="object-cover" />
                </div>
              </div>
              <span className="text-xs font-semibold text-[#2D2727] group-hover:text-pink-600 transition-colors">
                {story.title}
              </span>
            </a>
          ))}
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {instaImages.map((product, idx) => (
            <a
              key={product.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden glass-card shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 50vw, 300px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="self-end">
                  <Instagram className="w-5 h-5 text-white/90" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold line-clamp-1">{product.title}</p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-pink-300">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-pink-300" />
                      {120 + idx * 35}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-pink-300" />
                      {18 + idx * 4}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Instagram Follow Button */}
        <div className="text-center pt-2">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow @sana_craftstudio</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
