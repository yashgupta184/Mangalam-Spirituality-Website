'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PurposeType } from '@/types';

interface PurposeTile {
  purpose: PurposeType;
  sanskrit: string;
  mantra: string;
  tagline: string;
  icon: string;
  gradient: string;
  glowColor: string;
}

const purposeTiles: PurposeTile[] = [
  {
    purpose: 'Wealth',
    sanskrit: 'धन एवं समृद्धि',
    mantra: 'Shree Kuber',
    tagline: 'Attract commercial expansion, financial sovereignty & visionary ambition.',
    icon: '🪙',
    gradient: 'from-[#4A1420]/15 to-[#C9A24B]/20',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(201,162,75,0.25)]',
  },
  {
    purpose: 'Protection',
    sanskrit: 'रक्षा एवं अभय',
    mantra: 'Maha Raksha',
    tagline: 'Formidable shield against nazar, toxic fatigue & emotional depletion.',
    icon: '🛡️',
    gradient: 'from-[#320C14]/20 to-[#1F1A17]/30',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(74,20,32,0.3)]',
  },
  {
    purpose: 'Love',
    sanskrit: 'हृदय चक्र प्रेम',
    mantra: 'Anahata Shanti',
    tagline: 'Gentle heart healing, deep compassionate resonance & marital harmony.',
    icon: '🌸',
    gradient: 'from-pink-900/15 to-rose-900/10',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(244,114,182,0.2)]',
  },
  {
    purpose: 'Peace',
    sanskrit: 'शांत चित्त',
    mantra: 'Dhyana Samadhi',
    tagline: 'Cooling vibrations for racing minds, anxiety release & restorative sleep.',
    icon: '🕊️',
    gradient: 'from-purple-900/15 to-indigo-900/15',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]',
  },
  {
    purpose: 'Luck',
    sanskrit: 'भाग्य वृद्धि',
    mantra: 'Shubh Labh',
    tagline: 'Open doors to unexpected synchronicity, academic success & auspicious breaks.',
    icon: '🌾',
    gradient: 'from-amber-900/15 to-[#B87333]/15',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(184,115,51,0.2)]',
  },
  {
    purpose: 'Health',
    sanskrit: 'आरोग्य पुष्टि',
    mantra: 'Dhanvantari',
    tagline: 'Stimulate cellular stamina, soothe inflammation & restore physiological prana.',
    icon: '🪵',
    gradient: 'from-[#422216]/15 to-[#A44C18]/15',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(164,76,24,0.2)]',
  },
  {
    purpose: 'Courage',
    sanskrit: 'शौर्य एवं संकल्प',
    mantra: 'Veerya Tejas',
    tagline: 'Unshakable poise during public negotiations, leadership & bold leaps.',
    icon: '🔥',
    gradient: 'from-[#E8891D]/15 to-amber-900/20',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(232,137,29,0.25)]',
  },
  {
    purpose: 'Balance',
    sanskrit: 'सप्त चक्र संतुलन',
    mantra: 'Kundalini Yoga',
    tagline: 'Harmonize the 7 subtle nerve plexi along the spine for total equanimity.',
    icon: '⚖️',
    gradient: 'from-cyan-900/15 to-blue-900/15',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
  },
];

export function ShopByPurpose() {
  return (
    <section id="landing-sacred-purpose-dark" className="py-16 sm:py-24 bg-[var(--bg-primary)] relative overflow-hidden landing-sacred-purpose-dark">
      {/* Sacred geometric divider */}
      <div className="gold-divider max-w-5xl mx-auto mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] border border-[#C9A24B]/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E8891D]" />
            <span>Spiritual Intent Pathways</span>
          </div>
          <h2 className="font-serif-sacred text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Shop by Sacred Purpose
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2.5">
            Every bead possesses a distinct elemental resonance. Choose according to the energy you desire to invite into your daily consciousness.
          </p>
        </div>

        {/* 8 Illustrated Tiles with Hover Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {purposeTiles.map((tile) => (
            <Link
              key={tile.purpose}
              href={`/collection?purpose=${encodeURIComponent(tile.purpose)}`}
              className={`group relative p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C9A24B]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${tile.glowColor} overflow-hidden`}
            >
              {/* Subtle background gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Icon & Sanskrit Mantra */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] shadow-xs group-hover:scale-110 transition-transform">
                    {tile.icon}
                  </span>
                  <span className="font-devanagari text-xs font-semibold text-[#C9A24B] bg-[#C9A24B]/10 px-2 py-1 rounded-full border border-[#C9A24B]/20">
                    {tile.sanskrit}
                  </span>
                </div>

                {/* Purpose Title */}
                <h3 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)] group-hover:text-[#E8891D] transition-colors">
                  {tile.purpose}
                </h3>
                <span className="block text-[11px] font-medium text-[#C9A24B] uppercase tracking-wider mt-0.5">
                  {tile.mantra}
                </span>

                {/* Description */}
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  {tile.tagline}
                </p>
              </div>

              {/* Action Link at Bottom */}
              <div className="relative z-10 mt-6 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-[#E8891D]">
                <span>Explore Creations</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
