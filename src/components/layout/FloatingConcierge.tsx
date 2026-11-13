'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { useQuiz } from '@/context/QuizContext';

export function FloatingConcierge() {
  const { openQuiz } = useQuiz();

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Help Me Choose Quiz Pill */}
      <button
        onClick={() => openQuiz()}
        className="pointer-events-auto shadow-xl flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--bg-surface)] border-2 border-[#B87333] text-[var(--text-primary)] hover:border-[#C96818] hover:bg-[var(--bg-surface-elevated)] transition-all hover:scale-105 group cursor-pointer"
        aria-label="Help me choose spiritual wearable"
      >
        <div className="w-5 h-5 rounded-full bg-[#C96818]/15 flex items-center justify-center text-[#C96818] group-hover:rotate-12 transition-transform">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
        </div>
        <span className="text-xs font-serif-sacred font-bold tracking-wide">
          Help Me Choose
        </span>
      </button>
    </div>
  );
}
