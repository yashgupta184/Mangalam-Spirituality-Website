'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Check, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { PurposeType, Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useQuiz } from '@/context/QuizContext';

export function InlineQuizSection() {
  // This section is assigned to the Light Theme section
  // It provides the fifth light section after the dark Authenticity
  const { addItem } = useCart();
  const { openQuiz } = useQuiz();

  const [intent, setIntent] = useState<PurposeType>('Protection');
  const [element, setElement] = useState<string>('Earth');
  const [budget, setBudget] = useState<string>('all');
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  // Compute matched items inline
  const matches = React.useMemo(() => {
    let result = products.filter((p) => p.purpose === intent);
    if (result.length === 0) {
      result = products.filter((p) => p.bestseller);
    }
    if (budget === 'under-1500') {
      result = result.filter((p) => p.price <= 1500);
    } else if (budget === 'mala') {
      const malas = result.filter((p) => p.name.toLowerCase().includes('mala'));
      if (malas.length > 0) result = malas;
    }
    return result.slice(0, 3);
  }, [intent, element, budget]);

  const handleAdd = (p: Product) => {
    addItem(p, p.sizes[0] || 'M (7.2 in)', 1);
    setQuickAddedId(p.id);
    setTimeout(() => setQuickAddedId(null), 1800);
  };

  return (
    <section id="landing-matchmaker-light" className="py-16 sm:py-24 bg-[var(--bg-surface)] relative overflow-hidden landing-matchmaker-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#4A1420]/15 via-[var(--bg-surface-elevated)] to-[#C9A24B]/10 border border-[#C9A24B]/40 shadow-xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8891D]/15 text-[#E8891D] border border-[#E8891D]/30 text-xs font-semibold uppercase tracking-widest mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Vedic Guidance</span>
              </div>
              <h2 className="font-serif-sacred text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                Find My Perfect Match (Mini-Quiz)
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5">
                Answer 3 quick questions below to discover the exact sacred bead aligned with your energetic goals.
              </p>
            </div>

            <button
              onClick={() => openQuiz()}
              className="self-start lg:self-center px-5 py-2.5 rounded-full btn-gold-outline text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <span>Open Full Screen Matchmaker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            {/* Question 1: Intent */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] uppercase font-bold text-[#C9A24B] tracking-wider block mb-1">
                Question 1 of 3
              </span>
              <h4 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] mb-3">
                Your Primary Intention
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'Protection', label: '🛡️ Protection & Nazar Shield' },
                  { id: 'Wealth', label: '💰 Wealth & Commercial Prosperity' },
                  { id: 'Peace', label: '🕊️ Inner Peace & Deep Sleep' },
                  { id: 'Love', label: '🌸 Love & Family Harmony' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIntent(item.id as PurposeType)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      intent === item.id
                        ? 'bg-[#E8891D] text-white font-bold shadow-xs'
                        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:bg-[#C9A24B]/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Element / Rashi */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] uppercase font-bold text-[#C9A24B] tracking-wider block mb-1">
                Question 2 of 3
              </span>
              <h4 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] mb-3">
                Your Zodiac Element
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'Earth', label: '🌱 Earth (Taurus, Virgo, Capricorn)' },
                  { id: 'Fire', label: '🔥 Fire (Aries, Leo, Sagittarius)' },
                  { id: 'Air', label: '💨 Air (Gemini, Libra, Aquarius)' },
                  { id: 'Water', label: '🌊 Water (Cancer, Scorpio, Pisces)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setElement(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      element === item.id
                        ? 'bg-[#E8891D] text-white font-bold shadow-xs'
                        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:bg-[#C9A24B]/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Budget / Wear Style */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] uppercase font-bold text-[#C9A24B] tracking-wider block mb-1">
                Question 3 of 3
              </span>
              <h4 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] mb-3">
                Wearable Style / Budget
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'all', label: '✨ All Curated Matches' },
                  { id: 'under-1500', label: '🏷️ Daily Band (Under ₹1,500)' },
                  { id: 'mala', label: '📿 Traditional 108 Japa Mala' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudget(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      budget === item.id
                        ? 'bg-[#E8891D] text-white font-bold shadow-xs'
                        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:bg-[#C9A24B]/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Inline Live Recommendations */}
          <div className="pt-6 border-t border-[var(--border-subtle)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C9A24B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E8891D]" /> Recommended for Your Energy Matrix ({matches.length})
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                Selected: {intent} • {element} Element
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {matches.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C9A24B] transition-all flex flex-col justify-between group"
                >
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[var(--border-subtle)]">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="64px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24B] block">
                        {product.material}
                      </span>
                      <Link
                        href={`/product/${product.slug}`}
                        className="font-serif-sacred text-sm font-bold text-[var(--text-primary)] hover:text-[#E8891D] line-clamp-1"
                      >
                        {product.name}
                      </Link>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs font-bold text-[#E8891D]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex gap-2">
                    <Link
                      href={`/product/${product.slug}`}
                      className="flex-1 py-1.5 px-2 text-center rounded-lg border border-[var(--border-subtle)] text-[11px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#C9A24B] transition-colors"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        quickAddedId === product.id
                          ? 'bg-[#A44C18] text-white'
                          : 'btn-saffron'
                      }`}
                    >
                      {quickAddedId === product.id ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add to Box</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
