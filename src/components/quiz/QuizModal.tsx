'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Sparkles, ArrowRight, ArrowLeft, Check, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useQuiz } from '@/context/QuizContext';
import { useCart } from '@/context/CartContext';
import { PurposeType } from '@/types';

export function QuizModal() {
  const { isQuizOpen, closeQuiz, answers, setAnswers, recommendations, currentStep, setStep, resetQuiz } = useQuiz();
  const { addItem } = useCart();
  const [addedIds, setAddedIds] = React.useState<Record<string, boolean>>({});

  if (!isQuizOpen) return null;

  const intents: { title: PurposeType; label: string; icon: string; desc: string }[] = [
    { title: 'Protection', label: 'Shield & Grounding', icon: '🛡️', desc: 'Repel nazar, workplace envy & mental burnout' },
    { title: 'Wealth', label: 'Abundance & Career', icon: '💰', desc: 'Attract prosperity, new contracts & business luck' },
    { title: 'Peace', label: 'Peace & Restful Sleep', icon: '🕊️', desc: 'Calm restless thoughts, cool anger & insomnia' },
    { title: 'Love', label: 'Love & Family Harmony', icon: '🌸', desc: 'Heart healing, compassion & relationship bonds' },
    { title: 'Courage', label: 'Courage & Confidence', icon: '🔥', desc: 'Public presence, decisive power & stamina' },
    { title: 'Balance', label: '7 Chakra Equilibrium', icon: '⚖️', desc: 'Total physiological alignment & prana flow' },
  ];

  const elements = [
    { name: 'Fire', rashi: 'Aries, Leo, Sagittarius', desc: 'Passionate, energetic, prone to heated stress' },
    { name: 'Earth', rashi: 'Taurus, Virgo, Capricorn', desc: 'Practical, disciplined, seeking abundance & stability' },
    { name: 'Air', rashi: 'Gemini, Libra, Aquarius', desc: 'Intellectual, communicative, prone to racing mind' },
    { name: 'Water', rashi: 'Cancer, Scorpio, Pisces', desc: 'Deeply intuitive, empathic, prone to emotional absorption' },
    { name: 'Universal', rashi: 'Not sure / General balance', desc: 'Harmonize all planetary forces equally' },
  ];

  const budgetOptions = [
    { id: 'under-1500', title: 'Daily Sacred Band (Under ₹1,500)', desc: '8mm calibrated wristband for daily office or active wear' },
    { id: 'band-standard', title: 'Silver / Gold Accent Band (₹1,500 - ₹2,500)', desc: 'Handcrafted with consecrated 925 silver or 18k gold beads' },
    { id: 'mala', title: 'Traditional 108 Japa Mala (₹2,500+)', desc: '108+1 hand-knotted counting mala with silk tassel for dhyana' },
  ];

  const handleQuickAdd = (p: (typeof recommendations)[0]) => {
    addItem(p, p.sizes[0] || 'M (7.2 in)', 1);
    setAddedIds((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [p.id]: false }));
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity" onClick={closeQuiz} />

      <div className="min-h-full flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className="relative bg-[var(--bg-surface)] w-full max-w-3xl rounded-3xl shadow-2xl border-2 border-[#C9A24B]/50 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        >
          {/* Subtle background sacred gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8891D]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A1420]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={closeQuiz}
            className="absolute top-5 right-5 p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors z-20"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Header */}
          <div className="relative z-10 mb-6 pb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A24B] uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4 text-[#E8891D]" />
              <span>Sacred Matchmaker • Step {currentStep} of 4</span>
            </div>
            <h2 className="font-serif-sacred text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {currentStep === 1 && 'What is your primary spiritual intention?'}
              {currentStep === 2 && 'Which elemental energy speaks to you?'}
              {currentStep === 3 && 'Choose your preferred wearable style'}
              {currentStep === 4 && 'Your Consecrated Matches'}
            </h2>
            <div className="w-full bg-[var(--border-subtle)] h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C9A24B] to-[#E8891D] transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Intention / Purpose */}
          {currentStep === 1 && (
            <div className="relative z-10 space-y-4">
              <p className="text-xs text-[var(--text-muted)]">
                Select the primary energetic shift or blessing you wish to welcome into your daily life:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {intents.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, intent: item.title }));
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 group cursor-pointer ${
                      answers.intent === item.title
                        ? 'border-[#E8891D] bg-[#E8891D]/10 shadow-md'
                        : 'border-[var(--border-subtle)] hover:border-[#C9A24B]/50 hover:bg-[var(--bg-surface-elevated)]'
                    }`}
                  >
                    <span className="text-2xl p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] group-hover:text-[#E8891D] transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Element / Rashi */}
          {currentStep === 2 && (
            <div className="relative z-10 space-y-4">
              <p className="text-xs text-[var(--text-muted)]">
                Selecting your elemental constitution helps balance either excess heat, sluggishness, or restlessness:
              </p>
              <div className="space-y-2.5">
                {elements.map((el) => (
                  <button
                    key={el.name}
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, element: el.name }));
                      setStep(3);
                    }}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-center justify-between group cursor-pointer ${
                      answers.element === el.name
                        ? 'border-[#E8891D] bg-[#E8891D]/10'
                        : 'border-[var(--border-subtle)] hover:border-[#C9A24B]/50 hover:bg-[var(--bg-surface-elevated)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif-sacred text-base font-bold text-[var(--text-primary)] group-hover:text-[#E8891D]">
                          {el.name} Element
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[#C9A24B] font-medium">
                          {el.rashi}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{el.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#E8891D] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Style & Budget */}
          {currentStep === 3 && (
            <div className="relative z-10 space-y-4">
              <p className="text-xs text-[var(--text-muted)]">
                How would you prefer to integrate this sacred wearable into your routine?
              </p>
              <div className="space-y-3">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, budgetStyle: opt.id }));
                      setStep(4);
                    }}
                    className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group cursor-pointer ${
                      answers.budgetStyle === opt.id
                        ? 'border-[#E8891D] bg-[#E8891D]/10'
                        : 'border-[var(--border-subtle)] hover:border-[#C9A24B]/50 hover:bg-[var(--bg-surface-elevated)]'
                    }`}
                  >
                    <div>
                      <h3 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] group-hover:text-[#E8891D]">
                        {opt.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{opt.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#E8891D] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Dynamic Recommendations Output */}
          {currentStep === 4 && (
            <div className="relative z-10 space-y-5">
              <div className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[#C9A24B]/30 flex items-center justify-between text-xs">
                <span className="text-[var(--text-secondary)]">
                  Matched for: <strong className="text-[#E8891D]">{answers.intent}</strong> • <strong className="text-[#C9A24B]">{answers.element}</strong> Element
                </span>
                <button
                  onClick={resetQuiz}
                  className="text-xs text-[#E8891D] hover:underline font-semibold"
                >
                  Retake Quiz
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto p-1">
                {recommendations.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex gap-3 items-center group hover:border-[#C9A24B]/60 transition-all"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[var(--border-subtle)]">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24B] tracking-wider block">
                        {product.material}
                      </span>
                      <Link
                        href={`/product/${product.slug}`}
                        onClick={closeQuiz}
                        className="font-serif-sacred text-sm font-bold text-[var(--text-primary)] hover:text-[#E8891D] line-clamp-1"
                      >
                        {product.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-[#E8891D]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={closeQuiz}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold border border-[var(--border-subtle)] hover:border-[#C9A24B] text-[var(--text-secondary)]"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => handleQuickAdd(product)}
                          className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                            addedIds[product.id]
                              ? 'bg-[#7C8B6A] text-white'
                              : 'bg-[#E8891D] text-white hover:bg-[#D4770F]'
                          }`}
                        >
                          {addedIds[product.id] ? 'Added ✓' : '+ Add to Box'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Controls in Footer */}
          <div className="relative z-10 mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
            {currentStep > 1 && currentStep < 4 ? (
              <button
                onClick={() => setStep(currentStep - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                onClick={() => setStep(currentStep + 1)}
                className="px-5 py-2.5 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={closeQuiz}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close & View Selections
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
