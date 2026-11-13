import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, Noto_Serif_Devanagari } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { QuizProvider } from '@/context/QuizContext';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { QuizModal } from '@/components/quiz/QuizModal';
import { FloatingConcierge } from '@/components/layout/FloatingConcierge';

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const devanagari = Noto_Serif_Devanagari({
  variable: '--font-devanagari',
  subsets: ['devanagari', 'latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mangalam.in'),
  title: {
    default: 'MANGALAM | Sacred Wearables • Authentic Nepali Rudraksha & Certified Karungali',
    template: '%s | MANGALAM Sacred Wearables',
  },
  description:
    'Rooted in tradition, made for today. Certified genuine Nepali Rudraksha, dense Tamil Nadu Karungali ebony, and natural energy stone bracelets consecrated through Vedic Prana Pratishtha.',
  keywords: [
    'Rudraksha bracelet',
    'Karungali bracelet',
    'water sink Karungali',
    '5 Mukhi Nepali Rudraksha',
    'Pyrite wealth band',
    'spiritual wearables India',
    'authentic japa mala',
    'NABL lab certified rudraksha',
  ],
  authors: [{ name: 'Mangalam Sacred Wearables' }],
  creator: 'Mangalam',
  publisher: 'Mangalam Sacred Wearables',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mangalam.in',
    siteName: 'MANGALAM Sacred Wearables',
    title: 'MANGALAM | Sacred Wearables • Rooted in Tradition, Made for Today',
    description:
      'Certified authentic Nepali Rudraksha, water-sink Karungali ebony, and healing gemstone bracelets with individual lab test reports.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Mangalam Sacred Wearables',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MANGALAM Sacred Wearables',
    description: 'Certified authentic Nepali Rudraksha, Karungali & spiritual gemstone bracelets.',
    images: ['https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${cormorant.variable} ${jakarta.variable} ${devanagari.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E8891D] focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <CartProvider>
            <QuizProvider>
              <AnnouncementBar />
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />

              {/* Global Interactive Overlays */}
              <CartDrawer />
              <QuizModal />
              <FloatingConcierge />
            </QuizProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
