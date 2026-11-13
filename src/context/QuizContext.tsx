'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product, PurposeType } from '@/types';
import { products } from '@/data/products';

interface QuizAnswers {
  intent: PurposeType | 'All';
  element: string;
  budgetStyle: string;
}

interface QuizContextType {
  isQuizOpen: boolean;
  openQuiz: (initialIntent?: PurposeType) => void;
  closeQuiz: () => void;
  answers: QuizAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>;
  recommendations: Product[];
  currentStep: number;
  setStep: (step: number) => void;
  resetQuiz: () => void;
}

const defaultAnswers: QuizAnswers = {
  intent: 'Protection',
  element: 'Earth',
  budgetStyle: 'band-standard',
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);
  const [currentStep, setCurrentStep] = useState(1);

  const openQuiz = (initialIntent?: PurposeType) => {
    if (initialIntent) {
      setAnswers((prev) => ({ ...prev, intent: initialIntent }));
    }
    setCurrentStep(1);
    setIsQuizOpen(true);
  };

  const closeQuiz = () => setIsQuizOpen(false);

  const resetQuiz = () => {
    setAnswers(defaultAnswers);
    setCurrentStep(1);
  };

  // Compute recommendations dynamically
  const recommendations = React.useMemo(() => {
    let matches = products.filter((p) => {
      if (answers.intent !== 'All' && p.purpose !== answers.intent) {
        return false;
      }
      return true;
    });

    if (matches.length === 0) {
      matches = products.filter((p) => p.bestseller);
    }

    // Filter by budget/style if needed
    if (answers.budgetStyle === 'mala') {
      const malas = matches.filter((p) => p.name.toLowerCase().includes('mala'));
      if (malas.length > 0) return malas;
    } else if (answers.budgetStyle === 'under-1500') {
      const budgetItems = matches.filter((p) => p.price <= 1500);
      if (budgetItems.length > 0) return budgetItems;
    }

    return matches.slice(0, 4);
  }, [answers]);

  return (
    <QuizContext.Provider
      value={{
        isQuizOpen,
        openQuiz,
        closeQuiz,
        answers,
        setAnswers,
        recommendations,
        currentStep,
        setStep: setCurrentStep,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
