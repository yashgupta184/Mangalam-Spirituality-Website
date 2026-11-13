'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { useQuiz } from '@/context/QuizContext';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1800&auto=format&fit=crop',
    alt: 'Authentic Nepali Rudraksha and sacred energy stones on warm neutral silk background',
    tag: 'Tears of Shiva • Nepal Harvest',
  },
  {
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1800&auto=format&fit=crop',
    alt: 'Dense Tamil Nadu Karungali ebony wood bracelet with golden accents',
    tag: 'Ancient Ebony • Tamil Nadu Forests',
  },
  {
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1800&auto=format&fit=crop',
    alt: 'Natural Golden Pyrite crystal mala and bracelet attracting wealth',
    tag: 'Untreated Golden Pyrite • Wealth Sadhana',
  },
];

export function HeroSection() {
  const { openQuiz } = useQuiz();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="landing-hero-dark" className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] landing-hero-dark">
      {/* Background Images with graceful crossfade and warm luxury overlay */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-25 dark:opacity-35 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Atmospheric Overlays for Warm Ivory Editorial Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/40 to-[var(--bg-primary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/20 dark:from-transparent via-transparent to-[var(--bg-primary)]/80" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        {/* Subtle Sacred Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[#C9A24B]/50 text-xs text-[#4A1420] dark:text-[#E0C075] mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-[#E8891D]" />
          <span className="font-serif-sacred tracking-wider font-semibold">
            Rooted in Tradition • Made for Today
          </span>
          <span className="w-1 h-1 rounded-full bg-[#E8891D]" />
          <span className="text-[11px] text-[var(--text-muted)]">
            {heroSlides[currentSlide].tag}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-sacred text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#4A1420] dark:text-[#FBF6EC] leading-[1.12]">
          Sacred Energies. <br />
          <span className="italic font-normal text-[#C9A24B] dark:text-[#E0C075]">Refined for Modern Life.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
          Authentic Nepali Rudraksha, Govt.-Certified Karungali Ebony, and High-Vibration Energy Stones — individually consecrated through Vedic Prana Pratishtha.
        </p>

        {/* Two Clear CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/#bestsellers"
            className="w-full sm:w-auto px-8 py-4 rounded-xl btn-saffron text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:shadow-[#E8891D]/30 transition-all cursor-pointer"
          >
            <span>Shop Bestsellers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => openQuiz()}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[#C9A24B]/70 text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 hover:border-[#E8891D] cursor-pointer shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#E8891D]" />
            <span>Find My Perfect Match</span>
          </button>
        </div>

        {/* Micro Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B87333]" />
            <span className="font-medium">NABL Lab Batch Tested</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8891D]" />
            <span className="font-medium">100% Water-Sink Karungali</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#C9A24B]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current text-[#E8891D]" />
              ))}
            </div>
            <span className="font-bold text-[var(--text-primary)] ml-1">4.95 / 5.0</span>
            <span className="text-[var(--text-muted)]">(21,800+ Seekers)</span>
          </div>
        </div>

      </div>

      {/* Slide indicators at bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-8 bg-[#E8891D]' : 'w-2 bg-[var(--text-muted)]/30 hover:bg-[var(--text-muted)]/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
