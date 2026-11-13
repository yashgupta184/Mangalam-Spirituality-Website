'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';

export function BestsellersSection() {
  // This section is assigned to the Light Theme section
  // It provides the third light section after the dark TrustStrip
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Exactly 8 curated bestsellers, non-repeating
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="landing-bestsellers-light" className="py-16 sm:py-24 bg-[var(--bg-surface)] relative overflow-hidden landing-bestsellers-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8891D]/15 text-[#E8891D] border border-[#E8891D]/30 text-xs font-semibold uppercase tracking-widest mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E8891D]" />
              <span>Consecrated Favorites</span>
            </div>
            <h2 className="font-serif-sacred text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Most Cherished Creations
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5 max-w-xl">
              Strictly 100% genuine Nepali Rudraksha, water-sink Karungali, and natural energy stones revered by thousands of daily practitioners.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/collection"
              className="text-xs font-bold text-[#E8891D] hover:underline flex items-center gap-1 mr-2"
            >
              <span>Explore All (24)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Scroll buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full border border-[var(--border-subtle)] hover:border-[#C9A24B] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:text-[#E8891D] transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full border border-[var(--border-subtle)] hover:border-[#C9A24B] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:text-[#E8891D] transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start"
            >
              <ProductCard product={product} priority={index < 2} />
            </div>
          ))}
        </div>

        {/* Subtle helper note */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-[var(--text-muted)]">
            Swipe sideways on mobile to discover all 8 consecrated bestsellers • Free shipping automatically applies at checkout
          </p>
        </div>

      </div>
    </section>
  );
}
