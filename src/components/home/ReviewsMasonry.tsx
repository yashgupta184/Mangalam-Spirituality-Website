'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, Filter } from 'lucide-react';
import { customerReviews } from '@/data/reviews';
import { MaterialType } from '@/types';

export function ReviewsMasonry() {
  // This section is assigned to the Dark Theme section
  // It provides the sixth dark section after the light Matchmaker
  const [selectedFilter, setSelectedFilter] = useState<'All' | MaterialType>('All');

  const filterTabs: ('All' | MaterialType)[] = [
    'All',
    'Rudraksha',
    'Karungali',
    'Pyrite',
    'Rose Quartz',
    'Amethyst',
    'Tiger Eye',
  ];

  const filteredReviews = selectedFilter === 'All'
    ? customerReviews
    : customerReviews.filter((r) => r.material === selectedFilter);

  return (
    <section id="landing-reviews-dark" className="py-16 sm:py-24 bg-[var(--bg-primary)] relative overflow-hidden landing-reviews-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>21,800+ Verified Seekers</span>
          </div>
          <h2 className="font-serif-sacred text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Echoes of Transformation
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            Read unfiltered accounts from professionals, yogis, and everyday seekers who have made Mangalam part of their daily aura.
          </p>
        </div>

        {/* Filter Tabs by Material */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-[#4A1420] text-white shadow-md'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#C9A24B]'
              }`}
            >
              {tab === 'All' ? 'All Reviews' : tab}
            </button>
          ))}
        </div>

        {/* Reviews Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="break-inside-avoid p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C9A24B]/50 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#E8891D]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[var(--text-muted)]">{review.date}</span>
                </div>

                {/* Review Title */}
                <h3 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] mb-2">
                  &quot;{review.title}&quot;
                </h3>

                {/* Review Body */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {review.comment}
                </p>
              </div>

              {/* Author & Product attribution */}
              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#C9A24B]/40">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] leading-tight">
                      {review.author}
                    </h4>
                    <span className="text-[10px] text-[var(--text-muted)] block">
                      {review.location}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#A44C18] bg-[#A44C18]/10 px-2 py-0.5 rounded-full border border-[#A44C18]/25">
                    <ShieldCheck className="w-3 h-3" /> Verified Buyer
                  </span>
                  <span className="block text-[9px] text-[var(--text-muted)] mt-1 truncate max-w-[120px]">
                    {review.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
