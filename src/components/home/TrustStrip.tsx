'use client';

import React, { useState, useEffect } from 'react';
import { Microscope, Award, Flame, Truck, CheckCircle2 } from 'lucide-react';

export function TrustStrip() {
  // This section is assigned to the Light Theme section
  // It provides the first light section after the dark Hero
  const [count, setCount] = useState(19500);

  // Animated count up to 21,840
  useEffect(() => {
    const target = 21840;
    const step = 65;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const trustItems = [
    {
      icon: Microscope,
      title: 'Lab Tested Batch Reports',
      desc: 'NABL Certified Micro & X-Ray Tests',
    },
    {
      icon: Award,
      title: 'Govt. Certified Karungali',
      desc: '100% Water-Sink Ebony Wood',
    },
    {
      icon: Flame,
      title: 'Vedic Siddhi Energized',
      desc: 'Prana Pratishtha by Temple Priests',
    },
    {
      icon: Truck,
      title: 'Free Express India Delivery',
      desc: 'Dispatched from Sacred Dehradun',
    },
  ];

  return (
    <section id="landing-trust-light" className="relative z-20 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] py-6 sm:py-8 shadow-sm landing-trust-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated review count banner */}
        <div className="text-center pb-6 mb-6 border-b border-[var(--border-subtle)]">
          <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[#B87333] font-bold">
              <CheckCircle2 className="w-4 h-4" /> Trusted Nationwide:
            </span>
            <span className="font-mono text-base sm:text-lg font-extrabold text-[#E8891D]">
              {count.toLocaleString('en-IN')}+
            </span>
            <span>Verified 5-Star Reviews across India & Overseas</span>
          </p>
        </div>

        {/* 4 Trust Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[#C9A24B]/50 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[#C9A24B]/30 text-[#C9A24B] shrink-0">
                  <Icon className="w-5 h-5 text-[#C9A24B]" />
                </div>
                <div>
                  <h4 className="font-serif-sacred text-sm font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
