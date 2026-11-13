'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const generalFaqs = [
  {
    q: 'How can I independently verify that my Karungali is genuine ebony wood?',
    a: 'Every Mangalam Karungali piece is guaranteed to sink immediately when placed in a glass of tap water, confirming a specific gravity exceeding 1.10 g/cm³. Cheap painted wooden beads float. Additionally, our heartwood is completely black inside with no chemical inks or surface dyes.',
  },
  {
    q: 'How are your Rudraksha and gemstones energized before dispatch?',
    a: 'Each piece undergoes traditional Prana Pratishtha (Vedic consecration). The beads are cleansed in pure Himalayan Gangajal, anointed with sandalwood paste, and charged with 108 mantra japas by dedicated temple priests on auspicious tithis (Pradosham, Ekadashi, or Purnima).',
  },
  {
    q: 'Can I wear my spiritual band while sleeping, showering, or during exercise?',
    a: 'You can wear it continuously during daily activities and sleep. However, we advise taking it off prior to hot chemical soap showers, swimming pools, or intense sweat workouts to preserve the natural structural oils of natural woods like Rudraksha and Sandalwood.',
  },
  {
    q: 'What if the bracelet size does not fit my wrist comfortably?',
    a: 'We offer a complimentary 7-day hassle-free size exchange. Simply ping our WhatsApp Concierge (+91 98765 43210) with your order ID, and we will dispatch a custom-resized piece with free reverse pickup.',
  },
  {
    q: 'Can women wear 5-Mukhi Nepali Rudraksha and Karungali?',
    a: 'Yes, absolutely without hesitation. Classical scriptures like the Shiva Purana and ancient Agamic texts celebrate Rudraksha and sacred woods as universal divine blessings for every human being, regardless of gender or astrological background.',
  },
];

export function FaqSection() {
  // This section is assigned to the Light Theme section
  // It provides the final light section after the dark Reviews
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="landing-faq-light" className="py-16 sm:py-24 bg-[var(--bg-surface)] relative overflow-hidden border-t border-[var(--border-subtle)] landing-faq-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] border border-[#C9A24B]/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E8891D]" />
            <span>Seeker Knowledge Base</span>
          </div>
          <h2 className="font-serif-sacred text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Frequently Asked Sacred Questions
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            Clear, transparent answers on materials, daily wear rules, and Vedic rituals.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {generalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-sacred text-base font-bold text-[var(--text-primary)]">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#E8891D]' : 'text-[var(--text-muted)]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
