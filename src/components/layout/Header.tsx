'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useQuiz } from '@/context/QuizContext';
import { products, collections } from '@/data/products';
import { MaterialType, PurposeType } from '@/types';

export function Header() {
  const router = useRouter();
  const { totalCount, openCart } = useCart();
  const { openQuiz } = useQuiz();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'material' | 'purpose' | null>(null);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const materials: { name: MaterialType; hindi: string; desc: string }[] = [
    { name: 'Rudraksha', hindi: 'रुद्राक्ष', desc: '5-Mukhi & 7-Mukhi Nepali Beads' },
    { name: 'Karungali', hindi: 'करुंगाली', desc: 'Dense Tamil Nadu Ebony Wood' },
    { name: 'Pyrite', hindi: 'पाइराइट', desc: 'Natural Golden Wealth Crystals' },
    { name: 'Rose Quartz', hindi: 'रोज क्वार्ट्ज', desc: 'Gentle Heart Healing Crystals' },
    { name: 'Amethyst', hindi: 'नीलमणि', desc: 'Uruguayan Deep Violet Gems' },
    { name: 'Tiger Eye', hindi: 'व्याघ्र मणि', desc: 'Solar Plexus Courage Stones' },
  ];

  const purposes: { name: PurposeType; hindi: string; icon: string; desc: string }[] = [
    { name: 'Wealth', hindi: 'समृद्धि', icon: '💰', desc: 'Commercial focus & prosperity' },
    { name: 'Protection', hindi: 'सुरक्षा', icon: '🛡️', desc: 'Nazar shield & grounding' },
    { name: 'Love', hindi: 'प्रेम', icon: '🌸', desc: 'Heart healing & gentle harmony' },
    { name: 'Peace', hindi: 'शांति', icon: '🕊️', desc: 'Restful sleep & still mind' },
    { name: 'Luck', hindi: 'भाग्य', icon: '🍀', desc: 'Serendipity & opportunity' },
    { name: 'Health', hindi: 'आरोग्य', icon: '🌿', desc: 'Cellular vitality & prana' },
    { name: 'Courage', hindi: 'शौर्य', icon: '🔥', desc: 'Fearless speech & grit' },
    { name: 'Balance', hindi: 'संतुलन', icon: '⚖️', desc: '7 Chakra spinal harmony' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Filtered search results
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/collection?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-header)] backdrop-blur-md shadow-md border-b border-[var(--border-subtle)] py-2.5'
          : 'bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[var(--text-primary)] hover:text-[#E8891D] transition-colors rounded-lg"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[var(--text-primary)] hover:text-[#E8891D] transition-colors rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Mangalam Homepage"
          >
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden bg-[#FBF6EC] border border-[#C9A24B]/60 flex items-center justify-center shadow-sm group-hover:border-[#E8891D] transition-all">
              <Image src="/logo.png" alt="" width={148} height={182} className="w-full h-full object-contain scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-sacred text-2xl font-bold tracking-[0.18em] text-[var(--text-primary)] leading-none uppercase">
                MANGALAM
              </span>
              <span className="text-[9px] font-medium tracking-[0.24em] text-[#C9A24B] uppercase mt-0.5">
                Sacred Wearables
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {/* Shop by Material Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('material')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md ${
                  activeMegaMenu === 'material'
                    ? 'text-[#E8891D]'
                    : 'text-[var(--text-primary)] hover:text-[#E8891D]'
                }`}
                aria-expanded={activeMegaMenu === 'material'}
              >
                <span>Shop by Material</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'material' ? 'rotate-180 text-[#E8891D]' : 'opacity-60'}`} />
              </button>

              {/* Mega menu dropdown */}
              {activeMegaMenu === 'material' && (
                <div className="absolute top-full left-0 w-[580px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A24B]">
                      Sacred Natural Materials
                    </span>
                    <Link
                      href="/collection"
                      className="text-xs text-[#E8891D] hover:underline flex items-center gap-1 font-medium"
                    >
                      View All Materials <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {materials.map((mat) => (
                    <Link
                      key={mat.name}
                      href={`/collection?material=${encodeURIComponent(mat.name)}`}
                      className="p-3 rounded-lg hover:bg-[var(--bg-surface-elevated)] border border-transparent hover:border-[#C9A24B]/30 transition-all flex flex-col group/item"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif-sacred text-base font-semibold text-[var(--text-primary)] group-hover/item:text-[#E8891D] transition-colors">
                          {mat.name}
                        </span>
                        <span className="font-devanagari text-xs text-[#C9A24B]/80">{mat.hindi}</span>
                      </div>
                      <span className="text-xs text-[var(--text-muted)] mt-1">{mat.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Shop by Purpose Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('purpose')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md ${
                  activeMegaMenu === 'purpose'
                    ? 'text-[#E8891D]'
                    : 'text-[var(--text-primary)] hover:text-[#E8891D]'
                }`}
                aria-expanded={activeMegaMenu === 'purpose'}
              >
                <span>Shop by Purpose</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'purpose' ? 'rotate-180 text-[#E8891D]' : 'opacity-60'}`} />
              </button>

              {/* Purpose Mega Menu */}
              {activeMegaMenu === 'purpose' && (
                <div className="absolute top-full -left-20 w-[640px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A24B]">
                      Spiritual Intent & Blessings
                    </span>
                    <button
                      onClick={() => openQuiz()}
                      className="text-xs text-[#E8891D] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3" /> Take Match Quiz
                    </button>
                  </div>
                  {purposes.map((p) => (
                    <Link
                      key={p.name}
                      href={`/collection?purpose=${encodeURIComponent(p.name)}`}
                      className="p-3 rounded-lg hover:bg-[var(--bg-surface-elevated)] border border-transparent hover:border-[#C9A24B]/30 transition-all flex items-center gap-3 group/item"
                    >
                      <span className="text-xl p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                        {p.icon}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-serif-sacred text-base font-semibold text-[var(--text-primary)] group-hover/item:text-[#E8891D] transition-colors">
                            {p.name}
                          </span>
                          <span className="font-devanagari text-xs text-[#C9A24B]/70">{p.hindi}</span>
                        </div>
                        <span className="text-xs text-[var(--text-muted)] line-clamp-1">{p.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/collection"
              className="px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:text-[#E8891D] transition-colors"
            >
              All Creations
            </Link>

            <Link
              href="/#authenticity"
              className="px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:text-[#E8891D] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#7C8B6A]" />
              <span>Authenticity</span>
            </Link>

            <button
              onClick={() => openQuiz()}
              className="px-3 py-1.5 ml-1 text-xs font-semibold text-[#4A1420] dark:text-[#E0C075] bg-[#C9A24B]/15 hover:bg-[#C9A24B]/25 border border-[#C9A24B]/50 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3 h-3 text-[#E8891D]" />
              <span>Find My Match</span>
            </button>
          </nav>

          {/* Right utility actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {/* Desktop Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded-full hover:border-[#C9A24B]/60 transition-all cursor-pointer"
              aria-label="Search spiritual wearables"
            >
              <Search className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Search Rudraksha, Karungali...</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            {/* Theme toggle removed for section-wise fixed contrast implementation */}

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative p-2 text-[var(--text-primary)] hover:text-[#E8891D] hover:bg-[var(--bg-surface-elevated)] rounded-full transition-colors group cursor-pointer"
              aria-label={`Open shopping cart with ${totalCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[#E8891D] transition-colors" />
              {totalCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] px-1 bg-[#E8891D] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-in zoom-in-50 duration-200">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Live Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-[var(--bg-surface)] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#C9A24B]/40 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <form onSubmit={handleSearchSubmit} className="p-4 border-b border-[var(--border-subtle)] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#C9A24B] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by material (Karungali, Rudraksha, Pyrite) or purpose..."
                className="w-full bg-transparent text-[var(--text-primary)] text-base placeholder:text-[var(--text-muted)] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </form>

            {/* Quick Suggestions & Live Results */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              {searchQuery.trim() === '' ? (
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#C9A24B] mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Karungali Bracelet', '5 Mukhi Rudraksha', 'Pyrite Wealth Band', 'Rose Quartz Love', 'Amethyst Sleep', 'Water Sink Karungali'].map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSearchQuery(item);
                            router.push(`/collection?q=${encodeURIComponent(item)}`);
                            setSearchOpen(false);
                          }}
                          className="px-3 py-1.5 rounded-full text-xs bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[#C9A24B] text-[var(--text-secondary)] hover:text-[#E8891D] transition-colors"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                    Matching Creations ({searchResults.length})
                  </p>
                  {searchResults.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--bg-surface-elevated)] transition-colors group"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[var(--border-subtle)]">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="48px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-serif-sacred font-bold text-[var(--text-primary)] group-hover:text-[#E8891D] truncate">
                          {p.name}
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] truncate">{p.subtitle}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-[#E8891D]">₹{p.price.toLocaleString('en-IN')}</span>
                        <span className="block text-[10px] text-[var(--text-muted)] line-through">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="w-full mt-2 py-2 text-center text-xs font-semibold text-[#E8891D] hover:underline"
                  >
                    View all results for &quot;{searchQuery}&quot; →
                  </button>
                </div>
              ) : (
                <div className="py-8 text-center text-[var(--text-muted)]">
                  <p className="text-sm">No creations matched &quot;{searchQuery}&quot;.</p>
                  <p className="text-xs mt-1">Try searching for &quot;Rudraksha&quot;, &quot;Karungali&quot;, or &quot;Protection&quot;.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[var(--bg-surface)] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden bg-[#FBF6EC] border border-[#C9A24B]/60 flex items-center justify-center">
                    <Image src="/logo.png" alt="" width={148} height={182} className="w-full h-full object-contain scale-110" />
                  </div>
                  <span className="font-serif-sacred text-xl font-bold tracking-widest text-[var(--text-primary)]">
                    MANGALAM
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Quick Match Banner */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#4A1420] to-[#6A2131] text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#E0C075] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sacred Matchmaker</span>
                </div>
                <p className="text-xs text-white/90 mt-1">
                  Unsure which bead suits your astrological chart or intent?
                </p>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuiz();
                  }}
                  className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#E8891D] text-white hover:bg-[#D4770F] transition-colors"
                >
                  Take 3-Question Quiz
                </button>
              </div>

              {/* Mobile Links */}
              <div className="mt-6 space-y-4">
                <Link
                  href="/collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[var(--text-primary)] hover:text-[#E8891D]"
                >
                  Explore All Creations
                </Link>

                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#C9A24B] mb-2">
                    Shop by Material
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {materials.map((m) => (
                      <Link
                        key={m.name}
                        href={`/collection?material=${encodeURIComponent(m.name)}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] text-xs font-medium text-[var(--text-primary)] hover:text-[#E8891D]"
                      >
                        {m.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#C9A24B] mb-2">
                    Shop by Purpose
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {purposes.map((p) => (
                      <Link
                        key={p.name}
                        href={`/collection?purpose=${encodeURIComponent(p.name)}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] text-xs font-medium text-[var(--text-primary)] hover:text-[#E8891D] flex items-center gap-1.5"
                      >
                        <span>{p.icon}</span>
                        <span>{p.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
                  <Link
                    href="/#authenticity"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-[var(--text-secondary)] hover:text-[#E8891D]"
                  >
                    Lab Verification Reports
                  </Link>
                  <Link
                    href="/design-system"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-[var(--text-secondary)] hover:text-[#E8891D]"
                  >
                    Design System & Tokens
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
              <p className="flex items-center gap-1.5 text-[#7C8B6A] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> NABL Accredited Lab Testing
              </p>
              <p className="mt-1">Free express delivery across India on orders above ₹999.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
