'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { BUSINESS_INFO } from '@/data/products';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPriceUSD,
    totalPriceINR,
    currency,
    formatPrice
  } = useCart();
  const { requireAuth } = useAuth();

  if (!isCartOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    const sendOrder = () => {
      triggerConfetti();

      let itemsList = '';
      cart.forEach((item, index) => {
        const priceStr = formatPrice(item.product.priceUSD, item.product.priceINR);
        const subtotalStr = formatPrice(item.product.priceUSD * item.quantity, item.product.priceINR * item.quantity);
        itemsList += `${index + 1}. *${item.product.title}*\n   Qty: ${item.quantity} | Unit: ${priceStr} | Subtotal: ${subtotalStr}`;
        if (item.selectedColor) itemsList += `\n   Variant: ${item.selectedColor}`;
        if (item.customNote) itemsList += `\n   Note: ${item.customNote}`;
        itemsList += `\n\n`;
      });

      const grandTotal = formatPrice(totalPriceUSD, totalPriceINR);

      const messageText = `Hello !
Thank you for reaching out to Sana Craft. 🌸✨
We create handmade and customized pipe cleaner crafts.

I would like to order the following items from my cart:

${itemsList}*Grand Total:* ${grandTotal}

Please let us know your requirements, and we’ll be happy to assist you.

Regards,
Sana Craft 💐`;

      const encoded = encodeURIComponent(messageText);
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    };

    if (!requireAuth(sendOrder, 'Sign in to book your cart order')) return;
    sendOrder();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col justify-between border-l border-[#E88D7D]/30">
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#1A1412] via-[#7A3E38] to-[#2D3A2C] text-white flex items-center justify-between shadow-md border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-serif font-bold">Your Inquiry Cart</h2>
              <span className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full font-semibold">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 rounded-full bg-[#FAF6F0] flex items-center justify-center text-4xl shadow-inner text-[#E88D7D]">
                  🛍️
                </div>
                <h3 className="text-lg font-serif font-bold text-[#2D2727]">Your Cart is Empty</h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Discover our handmade bouquets, velvet garlands & lotus thrones to add to your cart!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#C95B4A] text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-[#8E2020] transition-colors"
                >
                  Browse Catalog ($0–$300)
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="glass-card rounded-xl p-3.5 flex gap-3 border border-[#E88D7D]/20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-serif font-bold text-[#2D2727] line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-1"
                          title="Remove Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {item.selectedColor && (
                        <p className="text-[11px] text-gray-500">Variant: {item.selectedColor}</p>
                      )}

                      <p className="text-xs font-bold text-[#8E2020] mt-0.5">
                        {formatPrice(item.product.priceUSD, item.product.priceINR)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden text-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 font-semibold text-[#2D2727]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-[#C95B4A]">
                        {formatPrice(item.product.priceUSD * item.quantity, item.product.priceINR * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#FAF6F0] border-t border-[#E88D7D]/30 space-y-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#8E2020] pt-2 border-t border-gray-200">
                  <span>Grand Total ({currency}):</span>
                  <span className="text-xl">
                    {formatPrice(totalPriceUSD, totalPriceINR)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg whatsapp-glow flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <button
                  onClick={clearCart}
                  className="hover:text-red-600 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Cart</span>
                </button>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Direct WhatsApp Response
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
