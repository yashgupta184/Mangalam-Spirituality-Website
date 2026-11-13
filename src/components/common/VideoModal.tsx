'use client';

import React, { useState } from 'react';
import { X, Play, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className="relative bg-[var(--bg-surface)] w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-[#C9A24B]/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-surface-elevated)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <h3 className="font-serif-sacred text-base font-bold text-[var(--text-primary)]">
                Laboratory Verification: Water-Sink & Micro-X-Ray Test
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Simulated Video Player */}
          <div className="relative aspect-video bg-black flex flex-col items-center justify-center text-white overflow-hidden">
            {/* Visual simulation representation of the water sink test & X-ray */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/80 to-zinc-900/60" />

            {/* Graphic simulation of water beaker test */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-4">
              <div className="flex items-center justify-center gap-8">
                {/* Genuine Bead */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-32 rounded-b-2xl border-2 border-cyan-400/40 bg-cyan-950/30 p-2 flex flex-col justify-end items-center relative">
                    <div className="absolute top-2 left-2 text-[9px] text-cyan-300 font-mono">WATER TEST</div>
                    <div className="w-6 h-6 rounded-full bg-[#1F1A17] border border-[#C9A24B] shadow-lg animate-bounce mb-1">
                      <span className="block text-[8px] text-center text-[#E0C075] mt-1 font-bold">1.14</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#B87333] mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mangalam Karungali (Sinks)
                  </span>
                </div>

                {/* Fake Bead */}
                <div className="flex flex-col items-center opacity-60">
                  <div className="w-24 h-32 rounded-b-2xl border-2 border-zinc-700 bg-zinc-900/30 p-2 flex flex-col justify-start items-center relative">
                    <div className="absolute top-2 left-2 text-[9px] text-zinc-500 font-mono">COUNTERFEIT</div>
                    <div className="w-6 h-6 rounded-full bg-amber-900/80 border border-zinc-600 shadow-lg mt-3">
                      <span className="block text-[8px] text-center text-zinc-400 mt-1">0.65</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-red-400 mt-2">
                    Painted Wood (Floats)
                  </span>
                </div>
              </div>

              <div className="max-w-md bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-zinc-300">
                <p className="font-semibold text-[#E0C075]">
                  Live Test Demonstration (Batch #TN-26-09A)
                </p>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Because genuine Tamil Nadu Karungali ebony wood has a natural density exceeding 1.10 g/cm³, it sinks spontaneously to the bottom of the beaker. Cheap painted imitation timber floats.
                </p>
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3 flex items-center justify-between text-xs text-zinc-300 z-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-[#E8891D] text-white transition-colors"
                  aria-label={isPlaying ? "Pause demonstration" : "Play demonstration"}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                </button>
                <span className="font-mono text-[11px]">00:18 / 00:45</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#B87333] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Optical Density Verified
              </span>
            </div>
          </div>

          {/* Footer explanation */}
          <div className="p-4 bg-[var(--bg-surface)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              Scan the QR code on your certificate to re-watch anytime on your mobile device.
            </span>
            <button
              onClick={onClose}
              className="py-1.5 px-4 rounded-lg btn-saffron text-xs font-semibold"
            >
              Done Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
