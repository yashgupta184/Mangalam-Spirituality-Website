import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ShopByPurpose } from '@/components/home/ShopByPurpose';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { AuthenticitySection } from '@/components/home/AuthenticitySection';
import { InlineQuizSection } from '@/components/home/InlineQuizSection';
import { ReviewsMasonry } from '@/components/home/ReviewsMasonry';
import { FaqSection } from '@/components/home/FaqSection';

export const metadata: Metadata = {
  title: 'MANGALAM | Sacred Wearables • Authentic Nepali Rudraksha & Certified Karungali',
  description:
    'Rooted in tradition, made for today. Certified genuine 5-Mukhi Nepali Rudraksha, water-sink Karungali ebony, and energy-stone bracelets consecrated through Vedic Prana Pratishtha.',
  openGraph: {
    title: 'MANGALAM | Sacred Wearables & Authentic Malas',
    description:
      'Consecrated Nepali Rudraksha, pure Karungali ebony, and natural energy stone bracelets. 100% NABL lab tested with free express pan-India shipping.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Mangalam Sacred Wearables Collection',
      },
    ],
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mangalam Sacred Wearables',
    url: 'https://mangalam.in',
    logo: 'https://mangalam.in/logo.png',
    description:
      'Authentic Nepali Rudraksha, dense Karungali ebony, and high-vibration gemstone spiritual wearables.',
    sameAs: [
      'https://instagram.com/mangalam.sacred',
      'https://youtube.com/@mangalamwearables',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14 Rajpur Road, Kailash Veda Kendra',
      addressLocality: 'Dehradun',
      addressRegion: 'Uttarakhand',
      postalCode: '248001',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <TrustStrip />
        <ShopByPurpose />
        <BestsellersSection />
        <AuthenticitySection />
        <InlineQuizSection />
        <ReviewsMasonry />
        <FaqSection />
      </main>
    </>
  );
}
