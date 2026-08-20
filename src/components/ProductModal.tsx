'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { BUSINESS_INFO } from '@/data/products';
import { X, Star, ShoppingBag, MessageCircle, Heart, Check, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProductModal() {
  const {
    selectedProductForModal,
    setSelectedProductForModal,
    addToCart,
    formatPrice,
    toggleWishlist,
    wishlist
  } = useCart();
  const { requireAuth } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Classic Original');
  const [customNote, setCustomNote] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    const addItem = () => {
      addToCart(product, quantity, selectedColor, customNote);
      setSelectedProductForModal(null);
    };
    if (!requireAuth(addItem, 'Sign in to add this craft to your cart')) return;
    addItem();
  };

  const handleDirectWhatsApp = () => {
    const sendInquiry = () => {
      const priceStr = formatPrice(product.priceUSD, product.priceINR);
      const message = encodeURIComponent(
        `Hello !
Thank you for reaching out to Sana Craft. 🌸✨
We create handmade and customized pipe cleaner crafts.

I would like to inquire about ordering:
*Product:* ${product.title}
*Price:* ${priceStr}
*Quantity:* ${quantity}
*Variant:* ${selectedColor}
${customNote ? `*Custom Note:* ${customNote}` : ''}

Please let us know your requirements, and we’ll be happy to assist you.

Regards,
Sana Craft 💐`
      );

      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
    };

    if (!requireAuth(sendInquiry, 'Sign in to book this craft')) return;
    sendInquiry();
  };

  const colorVariants = [
    'Classic Original',
    'Sunset Orange & Yellow',
    'Royal Velvet Rose',
    'Pastel Pink & Cream',
    'Emerald & Pearl White'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        onClick={() => setSelectedProductForModal(null)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden border border-[#E88D7D]/30 z-10 my-auto animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-black flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image */}
          <div className="relative aspect-square md:aspect-auto h-72 md:h-full bg-[#FAF6F0] p-6 flex items-center justify-center">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md border border-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#8E2020] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {product.category}
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="p-6 md:p-8 space-y-5 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {product.stock}
                </span>

                <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating} ({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#2D2727] leading-snug">
                {product.title}
              </h2>

              <div className="text-2xl font-extrabold text-[#8E2020] font-serif">
                {formatPrice(product.priceUSD, product.priceINR)}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-[#2D2727]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Variant Selector */}
              <div className="pt-2">
                <label className="text-xs font-bold text-[#2D2727] block mb-1.5">
                  Select Color Theme / Accent:
                </label>
                <div className="flex flex-wrap gap-2">
                  {colorVariants.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        selectedColor === c
                          ? 'bg-[#C95B4A] text-white border-[#C95B4A] font-semibold shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#C95B4A]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Note Input */}
              <div className="pt-1">
                <label className="text-xs font-bold text-[#2D2727] block mb-1">
                  Add Custom Greeting / Request (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Include a Happy Birthday card for Sana..."
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                />
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-bold text-[#2D2727]">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#C95B4A] hover:bg-[#8E2020] text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleDirectWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md whatsapp-glow flex items-center justify-center gap-2 text-xs sm:text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="text-xs text-gray-600 hover:text-[#8E2020] flex items-center gap-1 font-medium"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#8E2020] text-[#8E2020]' : ''}`} />
                  <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Direct response from Sana Craft 🌸
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
