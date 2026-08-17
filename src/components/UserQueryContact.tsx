'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '@/data/products';
import { MessageCircle, Send, Phone, Mail, MapPin, Copy, Check, ChevronDown, ChevronUp, Sparkles, MessageSquare, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function UserQueryContact() {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    queryType: 'Product Order Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const queryTypes = [
    'Product Order Inquiry',
    'Custom Pipe Cleaner / Crochet Order',
    'Festival & Mandir Decor Bulk Inquiry',
    'Shipping & Delivery Status',
    'Other Special Request'
  ];

  const faqs = [
    {
      q: 'How long does it take to handcraft my custom order?',
      a: 'In-stock items are dispatched within 24 hours. Custom pipe cleaner garlands and bespoke crochet bouquets take 2-4 business days as every petal is sculpted by hand with care.'
    },
    {
      q: 'Can I customize flower colors, bouquet wraps, or idol throne sizes?',
      a: 'Yes! We personalize every creation. You can select flower colors, bouquet wrapping paper, ribbon styles, and lotus throne dimensions for your Bal Gopal idol.'
    },
    {
      q: 'Will pipe cleaner flowers & crochet bouquets fade over time?',
      a: 'No! Our crafts are made with premium colorfast plush pipe cleaners and high-density soft yarn. They stay vibrant forever with zero watering or maintenance.'
    },
    {
      q: 'How can I connect directly with Sana Craft Studio?',
      a: 'You can tap any WhatsApp button on this site to start a direct chat, send us a free SMS query, or reach out via Instagram DM @sana_craftstudio!'
    }
  ];

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch (err) {
      console.error(err);
    }
  };

  const handleWhatsAppDirect = () => {
    const queryDetails = formData.message ? `\n*Query:* ${formData.message}` : '';
    const text = `Hello !
Thank you for reaching out to Sana Craft. 🌸✨
We create handmade and customized pipe cleaner crafts.

*Customer Query:*
• *Name:* ${formData.name || 'Valued Customer'}
• *Contact:* ${formData.phoneOrEmail || 'N/A'}
• *Type:* ${formData.queryType}${queryDetails}

Please let us know your requirements, and we’ll be happy to assist you.

Regards,
Sana Craft 💐`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleSmsDirect = () => {
    const text = encodeURIComponent(
      `Hello Sana Craft! Query from ${formData.name || 'Customer'}: ${formData.message || 'Please send details about custom crafts.'}`
    );
    window.location.href = `sms:${BUSINESS_INFO.whatsappNumber}?body=${text}`;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#E88D7D]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#8E2020] uppercase tracking-wider shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#C95B4A]" />
            <span>Direct Customer Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#2D2727]">
            Connect Directly with Sana Craft
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Have a query about our handmade flower bouquets or custom divine lotus seats? Send a query below or connect instantly via WhatsApp Business!
          </p>
        </div>

        {/* 2 Column Layout: Query Form + WhatsApp & Business Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct User Query Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-[#E88D7D]/30 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#8E2020]">Send Us Your Requirement</h3>
                <p className="text-xs text-gray-500">Fill in your details for an instant response</p>
              </div>
              <span className="text-2xl">💐</span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-2xl shadow-md">
                  ✓
                </div>
                <h4 className="text-lg font-serif font-bold text-emerald-900">Query Received Successfully!</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Thank you for reaching out to Sana Craft 🌸✨. We have recorded your query and will connect with you shortly!
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-full text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat Now on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 px-5 rounded-full text-xs"
                  >
                    Send Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#2D2727] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#2D2727] block mb-1">Phone Number / Email</label>
                    <input
                      type="text"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phoneOrEmail}
                      onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2D2727] block mb-1">Query Subject / Category</label>
                  <select
                    value={formData.queryType}
                    onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white font-medium"
                  >
                    {queryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2D2727] block mb-1">Your Message / Custom Requirement *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you'd like to order, target colors, delivery date, etc..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C95B4A] bg-white"
                  />
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="submit"
                    className="bg-[#C95B4A] hover:bg-[#8E2020] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Free Query</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md whatsapp-glow transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Direct</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSmsDirect}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Free SMS Link</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Business Contact Card & Greeting Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Standard Official Greeting Card */}
            <div className="bg-gradient-to-br from-[#8E2020] via-[#C95B4A] to-[#8E2020] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl font-bold select-none">
                🌸
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h4 className="text-lg font-serif font-bold">Official Business Greeting</h4>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                <p className="whitespace-pre-line">
                  {BUSINESS_INFO.welcomeGreeting}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold">{BUSINESS_INFO.fullName}</div>
                  <div className="text-[10px] text-white/80">Active Daily 9:00 AM - 9:00 PM</div>
                </div>

                <button
                  onClick={handleWhatsAppDirect}
                  className="bg-white text-emerald-700 hover:bg-emerald-50 text-xs font-bold py-2 px-4 rounded-full shadow-md flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
                  <span>Connect Now</span>
                </button>
              </div>
            </div>

            {/* Quick Contact Info Items */}
            <div className="glass-card rounded-3xl p-6 border border-[#E88D7D]/30 space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-gray-500 font-semibold">WhatsApp Business</div>
                    <div className="text-sm font-bold text-[#2D2727]">{BUSINESS_INFO.formattedPhone}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors flex items-center gap-1"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-2xl border border-gray-100 hover:border-pink-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-gray-500 font-semibold">Instagram DM</div>
                    <div className="text-sm font-bold text-[#2D2727] group-hover:text-pink-600 transition-colors">
                      {BUSINESS_INFO.instagramHandle}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full">
                  Visit Profile ↗
                </span>
              </a>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-serif font-bold text-[#2D2727]">Frequently Asked Questions</h3>
            <p className="text-xs text-gray-500">Quick answers regarding customization, shipping & floral care</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#E88D7D]/20 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-serif font-bold text-[#2D2727] flex items-center justify-between text-sm sm:text-base hover:text-[#C95B4A] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#C95B4A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
