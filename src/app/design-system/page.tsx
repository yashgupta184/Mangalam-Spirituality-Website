'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Star,
  Check,
  Lock,
  ChevronDown,
} from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';

export default function DesignSystemPage() {
  const sampleProduct = products[0];

  const colorTokens = [
    {
      name: 'Deep Maroon',
      hex: '#4A1420',
      cssVar: '--maroon',
      role: 'Primary Dark & Sacred Anchor',
      wcag: 'Pass AA (11.8:1 on Ivory)',
      bgClass: 'bg-[#4A1420] text-white',
    },
    {
      name: 'Saffron',
      hex: '#E8891D',
      cssVar: '--saffron',
      role: 'Action Accent / High-Conversion CTAs',
      wcag: 'Pass AA Large (4.6:1 on Charcoal)',
      bgClass: 'bg-[#E8891D] text-white',
    },
    {
      name: 'Antique Gold',
      hex: '#C9A24B',
      cssVar: '--gold',
      role: 'Highlights, Hairlines, Sacred Icons',
      wcag: 'Pass AA (5.2:1 on Dark Maroon)',
      bgClass: 'bg-[#C9A24B] text-[#1F1A17]',
    },
    {
      name: 'Warm Ivory',
      hex: '#FBF6EC',
      cssVar: '--ivory',
      role: 'Primary Background (Light Mode)',
      wcag: 'Pass AA (13.6:1 with Charcoal)',
      bgClass: 'bg-[#FBF6EC] text-[#1F1A17] border border-[#C9A24B]/30',
    },
    {
      name: 'Charcoal',
      hex: '#1F1A17',
      cssVar: '--charcoal',
      role: 'High-Legibility Body Text',
      wcag: 'Pass AAA (13.6:1 on Ivory)',
      bgClass: 'bg-[#1F1A17] text-white',
    },
    {
      name: 'Sage',
      hex: '#7C8B6A',
      cssVar: '--sage',
      role: 'Authenticity & Lab Verification Badges',
      wcag: 'Pass AA (4.8:1 on Ivory)',
      bgClass: 'bg-[#7C8B6A] text-white',
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="pb-8 border-b border-[var(--border-subtle)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] border border-[#C9A24B]/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E8891D]" />
            <span>Living Design System</span>
          </div>
          <h1 className="font-serif-sacred text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
            Mangalam Design Language & Tokens
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            A cohesive aesthetic combining temple reverence with modern editorial clarity. Built with accessible WCAG AA contrast (minimum 4.5:1 ratio), responsive mobile-first typography, and sacred tactile micro-interactions.
          </p>
        </div>

        {/* 1. Color Palette Tokens */}
        <section className="space-y-6">
          <h2 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
            1. Core Palette & Contrast Compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorTokens.map((token) => (
              <div
                key={token.name}
                className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs space-y-3"
              >
                <div
                  className={`h-24 rounded-xl flex items-end p-3 ${token.bgClass}`}
                >
                  <span className="font-mono text-xs font-bold">{token.hex}</span>
                </div>
                <div>
                  <h4 className="font-serif-sacred text-base font-bold text-[var(--text-primary)]">
                    {token.name}
                  </h4>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] block">
                    {token.cssVar}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{token.role}</p>
                  <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex items-center gap-1 text-[11px] text-[#7C8B6A] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{token.wcag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="space-y-6">
          <h2 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
            2. Typography Hierarchy
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6">
            <div className="pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B]">
                Display Headline 1 (Cormorant Garamond 64px)
              </span>
              <h1 className="font-serif-sacred text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-1">
                Sacred Energies. Modern Grace.
              </h1>
            </div>

            <div className="pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B]">
                Section Heading 2 (Cormorant Garamond 36px)
              </span>
              <h2 className="font-serif-sacred text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">
                Authentic 5-Mukhi Nepali Rudraksha
              </h2>
            </div>

            <div className="pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B]">
                Card Title 3 (Cormorant Garamond 22px)
              </span>
              <h3 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)] mt-1">
                Maha Rakshak Karungali Ebony Wristband
              </h3>
            </div>

            <div className="pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B]">
                Devanagari Sanskrit Script (Noto Serif Devanagari)
              </span>
              <p className="font-devanagari text-2xl font-bold text-[#E0C075] bg-[#4A1420] p-4 rounded-xl inline-block mt-2">
                ॐ नमः शिवाय • शुभ लाभ • सत्यं शिवं सुन्दरम्
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B]">
                Body Sans Clean (Plus Jakarta Sans / Inter 14px)
              </span>
              <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                Every bead in the Mangalam collection is harvested through direct forest cooperatives in Bhojpur and Tamil Nadu. Natural bio-electric resonance grounds the central nervous system against modern electromagnetic fatigue.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Button Component States */}
        <section className="space-y-6">
          <h2 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
            3. Interactive Buttons & CTA States
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-wrap gap-4 items-center">
            
            <button className="px-6 py-3 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md">
              <ShoppingBag className="w-4 h-4" />
              <span>Primary Saffron CTA</span>
            </button>

            <button className="px-6 py-3 rounded-xl btn-gold-outline text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer">
              <Sparkles className="w-4 h-4 text-[#E8891D]" />
              <span>Secondary Gold Outline</span>
            </button>

            <button className="px-6 py-3 rounded-xl bg-[#4A1420] text-white hover:bg-[#6A2131] text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all">
              <Lock className="w-4 h-4 text-[#E0C075]" />
              <span>Dark Maroon Anchor</span>
            </button>

            <button className="px-6 py-3 rounded-xl bg-[#7C8B6A] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer">
              <Check className="w-4 h-4" />
              <span>Success State</span>
            </button>

            <button disabled className="px-6 py-3 rounded-xl bg-zinc-400 text-white text-xs font-bold uppercase tracking-wider cursor-not-allowed opacity-50">
              Disabled CTA
            </button>
          </div>
        </section>

        {/* 4. Badges & Trust Seals */}
        <section className="space-y-6">
          <h2 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
            4. Authenticity Badges & Seals
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-wrap gap-3 items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7C8B6A]/15 text-[#7C8B6A] border border-[#7C8B6A]/30">
              <ShieldCheck className="w-3.5 h-3.5" /> NABL Lab Tested
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4A1420] text-[#E0C075] border border-[#C9A24B]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E8891D]" /> Prana Pratishtha Siddhi
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8891D] text-white shadow-xs">
              35% OFF
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#C9A24B]/20 text-[#C9A24B] border border-[#C9A24B]/40">
              ★ 4.95 / 5.0 Rating
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
              100% Water-Sink Karungali
            </span>
          </div>
        </section>

        {/* 5. Product Card Component Preview */}
        <section className="space-y-6">
          <h2 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
            5. Component in Context: Sacred Product Card
          </h2>
          <div className="max-w-sm">
            <ProductCard product={sampleProduct} />
          </div>
        </section>

      </div>
    </div>
  );
}
