'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, Play, QrCode, FileText, Sparkles, Trees, Microscope, Flame, ArrowUpRight } from 'lucide-react';
import { CertificateModal } from '@/components/common/CertificateModal';
import { VideoModal } from '@/components/common/VideoModal';

export function AuthenticitySection() {
  // This section is assigned to the Dark Theme section
  // It provides the fourth dark section after the light Bestsellers
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Direct Forest Harvesting',
      subtitle: 'Ethical Origin',
      icon: Trees,
      desc: 'Nepali 5-Mukhi & 7-Mukhi Rudraksha sourced from high-altitude trees in Bhojpur. Mature Karungali ebony harvested from dry evergreen forests of Tamil Nadu.',
    },
    {
      number: '02',
      title: 'Govt. Lab Verification',
      subtitle: 'Science & X-Ray Tests',
      icon: Microscope,
      desc: 'Every lot is tested at NABL-accredited gem labs for volumetric density (Karungali sink test), stereomicroscopic mukhi analysis, and seed compartment radiography.',
    },
    {
      number: '03',
      title: 'Prana Pratishtha Havan',
      subtitle: 'Sacred Consecration',
      icon: Flame,
      desc: 'Cleansed with natural Himalayan Gangajal and energized through Vedic Shanti mantras during auspicious Muhurtas by practicing temple sevaks.',
    },
  ];

  return (
    <section id="landing-authenticity-dark" className="py-16 sm:py-24 bg-[var(--bg-primary)] relative overflow-hidden landing-authenticity-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sacred Truth & Science</span>
          </div>
          <h2 className="font-serif-sacred text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            How We Guarantee 100% Authenticity
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-3">
            In an industry plagued by plastic beads and chemically stained timber, Mangalam establishes absolute transparency through scientific scrutiny and devotional care.
          </p>
        </div>

        {/* 3-Step Visual Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C9A24B]/60 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-[#C9A24B]/50">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[#C9A24B]/30 flex items-center justify-center text-[#E8891D]">
                      <Icon className="w-6 h-6 text-[#C9A24B]" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8891D] block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-[11px] text-[#A44C18] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Vedic Quality Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Interactive Visual Proofs: Batch Test Report Card & Video Thumbnail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sample Batch Test Report Card (7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border-2 border-[#B87333]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#422216] text-[#D48E48]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)]">
                      Sample Batch Test Report Card
                    </h3>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      NABL-GEM-2026-4418 • Bhojpur Harvest Lot 09A
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#A44C18]/15 text-[#A44C18] border border-[#A44C18]/30 text-xs font-bold">
                  PASSED 100% ✓
                </span>
              </div>

              {/* Sample Report Key Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase font-semibold">Test Method</span>
                  <span className="text-xs font-bold text-[var(--text-primary)]">X-Ray Radiography</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase font-semibold">Specific Gravity</span>
                  <span className="text-xs font-bold text-[#C96818]">1.14 g/cm³ (Sinks)</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase font-semibold">Chemical Dye</span>
                  <span className="text-xs font-bold text-[#A44C18]">0.0% Detected</span>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Every Mangalam piece ships with an individualized certificate bearing a serialized QR code. Scan it with any mobile camera to view high-resolution laboratory X-rays and density readings.
              </p>
            </div>

            <div className="relative z-10 pt-5 mt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <QrCode className="w-4 h-4 text-[#C9A24B]" />
                <span>Includes physical certificate in every box</span>
              </div>

              <button
                onClick={() => setCertModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl btn-gold-outline text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>View Full Certificate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Video Thumbnail (QR-to-Video Concept) (5 Columns) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#C9A24B]/40 shadow-xl relative min-h-[300px] flex flex-col justify-end p-6 sm:p-8 bg-zinc-950 group">
            <Image
              src="https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=800&auto=format&fit=crop"
              alt="Water sink test demonstration video thumbnail"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10">
              <div className="mb-4">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="w-14 h-14 rounded-full bg-[#E8891D] hover:bg-[#D4770F] text-white flex items-center justify-center shadow-2xl transition-all group-hover:scale-110 cursor-pointer"
                  aria-label="Play Water Sink Verification Video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>

              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E0C075] block mb-1">
                QR-to-Video Concept
              </span>
              <h3 className="font-serif-sacred text-xl sm:text-2xl font-bold text-white leading-tight">
                Watch the Water-Sink & Radiography Test
              </h3>
              <p className="text-xs text-zinc-300 mt-1.5 line-clamp-2">
                See genuine ebony wood sink in water and learn how to identify fake painted counterfeits at home in 30 seconds.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Modals */}
      <CertificateModal isOpen={certModalOpen} onClose={() => setCertModalOpen(false)} />
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
}
