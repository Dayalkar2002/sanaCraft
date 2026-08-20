'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '@/data/products';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const text = encodeURIComponent(BUSINESS_INFO.welcomeGreeting);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Popup Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-[#FFFDF9] rounded-2xl shadow-2xl border border-emerald-300 overflow-hidden animate-scaleUp text-[#2D2727]">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F8F1E7] border border-white/30">
                  <img src="/images/snd-logo.png" alt="SND" className="w-full h-full object-cover" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold">{BUSINESS_INFO.fullName}</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online • Responds instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Message Bubble Body */}
          <div className="p-4 bg-[#FAF6F0] space-y-3">
            <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-200/80 text-xs leading-relaxed text-gray-800 space-y-2">
              <div className="font-bold text-[#8E2020] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sana Craft Studio</span>
              </div>
              <p className="whitespace-pre-line text-[11px] text-gray-700">
                {BUSINESS_INFO.welcomeGreeting}
              </p>
              <span className="text-[9px] text-gray-400 block text-right font-mono">Just now</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-white border-t border-gray-100">
            <button
              onClick={openWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md whatsapp-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl whatsapp-glow transition-all active:scale-95 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 fill-white" />}
      </button>
    </div>
  );
}
