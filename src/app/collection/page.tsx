import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { CollectionClient } from '@/components/collection/CollectionClient';

export const metadata: Metadata = {
  title: 'Sacred Collection | Authentic Rudraksha, Karungali & Healing Crystals - MANGALAM',
  description:
    'Explore our catalog of certified 5-Mukhi Nepali Rudraksha malas, dense Tamil Nadu Karungali ebony bracelets, and genuine energy stones. Filter by spiritual purpose and natural material.',
};

export default function CollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="w-10 h-10 border-2 border-[#E8891D] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif-sacred text-base text-[var(--text-secondary)]">
            Loading Sacred Creations...
          </p>
        </div>
      }
    >
      <CollectionClient />
    </Suspense>
  );
}
