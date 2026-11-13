'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, CheckCircle2, ShieldCheck, Phone, MapPin, Truck, ArrowRight, Heart } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#191114] text-[#FBF6EC] border-t border-[#C9A24B]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background sacred ambient watermarks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A1420]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter & Sacred Blessing Callout */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#24151B] to-[#341B23] border border-[#C9A24B]/40 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold text-[#E0C075] uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <span className="font-devanagari text-sm">शुभ विचार</span> • Weekly Vedic Insights
            </span>
            <h3 className="font-serif-sacred text-2xl sm:text-3xl font-bold text-white">
              Receive Auspicious Tithi Guides & Consecration Rituals
            </h3>
            <p className="text-xs sm:text-sm text-[#D9CEBF] mt-2 max-w-xl">
              Join 42,000+ conscious seekers. Receive notifications on Ekadashi, Pradosham timings, and gentle guidelines to recharge your sacred wearables.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#7C8B6A]/20 border border-[#7C8B6A]/50 text-white flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7C8B6A] shrink-0" />
                <p className="text-xs">
                  Namaste! You are subscribed. Check your inbox for our complimentary Guide to Caring for Sacred Woods.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#C9A24B] absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-[#C9A24B]/40 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-[#E8891D]"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
            <span className="block text-[10px] text-zinc-400 mt-2">
              No commercial spam. Unsubscribe with 1-click anytime.
            </span>
          </div>
        </div>

        {/* Footer Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-16 h-16 shrink-0 rounded-full bg-[#FBF6EC] border border-[#C9A24B] p-1 flex items-center justify-center">
                <Image src="/logo.png" alt="" width={148} height={182} className="w-full h-full object-contain" />
              </div>
              <span className="font-serif-sacred text-2xl font-bold tracking-widest text-white uppercase">
                MANGALAM
              </span>
            </Link>
            <p className="text-xs text-[#D9CEBF] leading-relaxed max-w-sm">
              &quot;Rooted in tradition, made for today.&quot; Sacred wearables crafted from authentic Nepali Rudraksha, sustainably harvested Tamil Nadu Karungali, and high-vibration natural gemstones.
            </p>
            <div className="space-y-1.5 text-xs text-[#D9CEBF]/80 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Kailash Veda Kendra, 14 Rajpur Road, Dehradun 248001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Concierge & WhatsApp: +91 98765 43210 (Mon-Sat, 9AM-7PM)</span>
              </p>
            </div>
          </div>

          {/* Shop Pathways */}
          <div>
            <h4 className="font-serif-sacred text-sm font-bold text-[#E0C075] uppercase tracking-widest mb-3">
              Shop Materials
            </h4>
            <ul className="space-y-2 text-xs text-[#D9CEBF]">
              <li>
                <Link href="/collection?material=Rudraksha" className="hover:text-[#E8891D] transition-colors">
                  Nepali Rudraksha Malas
                </Link>
              </li>
              <li>
                <Link href="/collection?material=Karungali" className="hover:text-[#E8891D] transition-colors">
                  Tamil Nadu Karungali Wood
                </Link>
              </li>
              <li>
                <Link href="/collection?material=Pyrite" className="hover:text-[#E8891D] transition-colors">
                  Golden Pyrite Wealth Bands
                </Link>
              </li>
              <li>
                <Link href="/collection?material=Rose%20Quartz" className="hover:text-[#E8891D] transition-colors">
                  Madagascar Rose Quartz
                </Link>
              </li>
              <li>
                <Link href="/collection?material=Amethyst" className="hover:text-[#E8891D] transition-colors">
                  Uruguay Amethyst Sleep Gems
                </Link>
              </li>
              <li>
                <Link href="/collection?material=Tiger%20Eye" className="hover:text-[#E8891D] transition-colors">
                  Golden Tiger Eye Bands
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care & Policies */}
          <div>
            <h4 className="font-serif-sacred text-sm font-bold text-[#E0C075] uppercase tracking-widest mb-3">
              Sacred Care & Support
            </h4>
            <ul className="space-y-2 text-xs text-[#D9CEBF]">
              <li>
                <Link href="/#authenticity" className="hover:text-[#E8891D] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C8B6A]" />
                  <span>Verify Batch Lab Report</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => alert('Order tracking: Enter your 10-digit phone number or order ID on our WhatsApp Concierge for instant live tracking.')}
                  className="hover:text-[#E8891D] transition-colors text-left cursor-pointer"
                >
                  Track Order Status
                </button>
              </li>
              <li>
                <span className="hover:text-[#E8891D] transition-colors cursor-pointer">
                  7-Day Hassle-Free Exchange
                </span>
              </li>
              <li>
                <span className="hover:text-[#E8891D] transition-colors cursor-pointer">
                  Ritual & Energizing Instructions
                </span>
              </li>
              <li>
                <span className="hover:text-[#E8891D] transition-colors cursor-pointer">
                  Shipping & Pan-India Delivery
                </span>
              </li>
              <li>
                <Link href="/design-system" className="hover:text-[#E8891D] transition-colors">
                  Design System & Tokens
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Guarantees */}
          <div className="space-y-3">
            <h4 className="font-serif-sacred text-sm font-bold text-[#E0C075] uppercase tracking-widest mb-3">
              The Mangalam Promise
            </h4>
            <div className="p-3 rounded-xl bg-black/40 border border-zinc-800 text-[11px] text-[#D9CEBF] space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7C8B6A] shrink-0 mt-0.5" />
                <span>NABL Accredited Gemological & Wood Density Certification</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7C8B6A] shrink-0 mt-0.5" />
                <span>Prana Pratishtha Consecration on Auspicious Tithis</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7C8B6A] shrink-0 mt-0.5" />
                <span>100% Water Sink Test Guarantee for Karungali</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Badges & Copyright Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} MANGALAM SACRED WEARABLES. All Rights Reserved.</span>
          </div>

          {/* Secure Payment Icons Representation */}
          <div className="flex items-center gap-3 flex-wrap justify-center text-[10px] text-zinc-300">
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 font-bold">UPI (0% fee)</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 font-bold">Google Pay</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 font-bold">PhonePe</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 font-bold">RuPay</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 font-bold">Visa / Master</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 font-bold">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
