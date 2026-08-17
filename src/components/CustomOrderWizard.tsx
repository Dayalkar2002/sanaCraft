'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '@/data/products';
import { Sparkles, MessageCircle, Heart, Gift, Palette, DollarSign, Send, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CustomOrderWizard() {
  const { currency } = useCart();
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [craftStyle, setCraftStyle] = useState('Crochet Flower Bouquet');
  const [budgetUSD, setBudgetUSD] = useState(75);
  const [customDescription, setCustomDescription] = useState('');
  const [recipientName, setRecipientName] = useState('');

  const occasions = [
    { name: 'Birthday Celebration', icon: '🎂' },
    { name: 'Pooja & Festival Decor', icon: '🪔' },
    { name: 'Wedding & Anniversary', icon: '💍' },
    { name: 'Divine Laddu Gopal Asan', icon: '👑' },
    { name: 'Personalized Keepsake Gift', icon: '🎁' }
  ];

  const styles = [
    { name: 'Crochet Flower Bouquet', desc: 'Handcrafted yarn sunflowers, roses & daisies in vintage wrap' },
    { name: 'Velvet Pipe Cleaner Garland (Haar)', desc: 'Soft velvet flowers strung with pearls for idols & altars' },
    { name: 'Sacred Lotus Throne / Asan', desc: 'Blooming lotus seat custom sized for deity idols' },
    { name: 'Custom Monogram Floral Gift Box', desc: 'Personalized initial gift box filled with everlasting blooms' }
  ];

  const handleSendCustomWhatsApp = () => {
    const budgetStr = currency === 'INR' ? `₹${(budgetUSD * 82).toLocaleString('en-IN')} (~$${budgetUSD})` : `$${budgetUSD}`;

    const text = `Hello !
Thank you for reaching out to Sana Craft. 🌸✨
We create handmade and customized pipe cleaner crafts.

*Custom Craft Order Inquiry:*
• *Occasion:* ${occasion}
• *Craft Style:* ${craftStyle}
• *Target Budget:* ${budgetStr}
${recipientName ? `• *Recipient Name:* ${recipientName}` : ''}
${customDescription ? `• *Specific Requirements:* ${customDescription}` : ''}

Please let us know your requirements, and we’ll be happy to assist you.

Regards,
Sana Craft 💐`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="custom-order" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF6F0] border border-[#E88D7D]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#8E2020] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tailor-Made Artistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#2D2727]">
            Build Your Custom Craft Order
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Have a unique idea, specific color theme, or festival requirement? Custom-design your pipe cleaner bouquet or divine lotus garland with us!
          </p>
        </div>

        {/* Wizard Form Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#E88D7D]/30 shadow-xl space-y-8">
          
          {/* Step 1: Occasion */}
          <div className="space-y-3">
            <label className="text-sm font-bold font-serif text-[#8E2020] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#8E2020] text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Select Your Occasion:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {occasions.map((o) => (
                <button
                  key={o.name}
                  type="button"
                  onClick={() => setOccasion(o.name)}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                    occasion === o.name
                      ? 'bg-gradient-to-br from-[#C95B4A] to-[#8E2020] text-white border-[#8E2020] shadow-md scale-102 font-semibold'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#C95B4A]'
                  }`}
                >
                  <span className="text-2xl">{o.icon}</span>
                  <span className="text-xs leading-tight">{o.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Craft Style */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <label className="text-sm font-bold font-serif text-[#8E2020] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#8E2020] text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>Choose Preferred Craft Style:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {styles.map((s) => (
                <div
                  key={s.name}
                  onClick={() => setCraftStyle(s.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    craftStyle === s.name
                      ? 'bg-[#FAF6F0] border-[#C95B4A] shadow-md ring-2 ring-[#C95B4A]/20'
                      : 'bg-white border-gray-200 hover:border-[#C95B4A]/50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                    craftStyle === s.name ? 'border-[#C95B4A] bg-[#C95B4A] text-white' : 'border-gray-300'
                  }`}>
                    {craftStyle === s.name && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2D2727]">{s.name}</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Budget Slider ($0 to $300) */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold font-serif text-[#8E2020] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8E2020] text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Set Your Target Budget Range:</span>
              </label>
              <span className="text-base font-extrabold text-[#C95B4A] font-serif bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                ${budgetUSD} {currency === 'INR' ? `(~₹${(budgetUSD * 82).toLocaleString('en-IN')})` : ''}
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="300"
              step="5"
              value={budgetUSD}
              onChange={(e) => setBudgetUSD(Number(e.target.value))}
              className="w-full accent-[#C95B4A] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 font-medium">
              <span>$15 (Mini Bouquet)</span>
              <span>$150 (Garland Set)</span>
              <span>$300 (Masterpiece Collection)</span>
            </div>
          </div>

          {/* Step 4: Custom Notes & Recipient */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label className="text-xs font-bold text-[#2D2727] block mb-1">
                Recipient / Event Name (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Sana's 25th Birthday / Janmashtami Pooja"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#2D2727] block mb-1">
                Colors, Specific Flowers or Details:
              </label>
              <input
                type="text"
                placeholder="e.g. Yellow sunflowers with red hibiscus & pearl chain..."
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
              />
            </div>
          </div>

          {/* Send via WhatsApp Button */}
          <div className="pt-4 text-center">
            <button
              onClick={handleSendCustomWhatsApp}
              className="w-full sm:w-auto min-w-[280px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg whatsapp-glow flex items-center justify-center gap-3 text-base transition-all mx-auto"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Submit Custom Request via WhatsApp</span>
              <Send className="w-4 h-4 ml-1" />
            </button>
            <p className="text-xs text-gray-500 mt-2 italic">
              ✨ Instant personalized response & design suggestions directly from Sana Craft.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
