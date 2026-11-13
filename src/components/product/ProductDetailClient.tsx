'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Sparkles,
  ShoppingBag,
  Check,
  ChevronDown,
  Info,
  Calendar,
  Share2,
  FileText,
  Package,
  Droplet,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { CertificateModal } from '@/components/common/CertificateModal';
import { products } from '@/data/products';
import { customerReviews } from '@/data/reviews';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M (7.2 in)');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Pincode estimator
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<{
    tested: boolean;
    valid: boolean;
    estimatedDelivery?: string;
  }>({ tested: false, valid: false });

  // Accordion FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Paired bundle upsell product (find another product from same or complementary collection)
  const pairedUpsell = products.find(
    (p) => p.id !== product.id && (p.material === product.material || p.purpose === product.purpose)
  ) || products[0];

  const [bundleAdded, setBundleAdded] = useState(false);

  // Sticky add-to-cart on scroll
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleAddBundle = () => {
    addItem(product, selectedSize, 1);
    addItem(pairedUpsell, pairedUpsell.sizes[0] || 'M (7.2 in)', 1);
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 2000);
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = pincode.trim();
    if (/^\d{6}$/.test(clean)) {
      // Calculate realistic delivery date (3-4 days from now)
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      };
      setPincodeStatus({
        tested: true,
        valid: true,
        estimatedDelivery: deliveryDate.toLocaleDateString('en-IN', options),
      });
    } else {
      setPincodeStatus({ tested: true, valid: false });
    }
  };

  // Specific reviews for this product or material
  const relatedReviews = customerReviews.filter(
    (r) => r.productSlug === product.slug || r.material === product.material
  );

  return (
    <div className="py-8 sm:py-12 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs text-[var(--text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--text-primary)]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/collection" className="hover:text-[var(--text-primary)]">Creations</Link>
          <span className="mx-2">/</span>
          <Link href={`/collection?material=${encodeURIComponent(product.material)}`} className="hover:text-[var(--text-primary)]">
            {product.material}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#E8891D] font-semibold">{product.name}</span>
        </nav>

        {/* Product Hero Grid (Gallery + Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image Gallery with Interactive Thumbnails (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[var(--bg-surface)] border-2 border-[var(--border-subtle)] shadow-xl group">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={`${product.name} detailed view`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#4A1420]/90 text-white backdrop-blur-md border border-[#C9A24B]/40 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E0C075]" />
                  <span>{product.badges[0] || '100% Genuine'}</span>
                </span>
                {product.bestseller && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8891D] text-white shadow-md">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Image zoom helper tip */}
              <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white/90">
                Hover to inspect bead grain
              </div>
            </div>

            {/* Clickable Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImage === idx
                        ? 'border-[#E8891D] shadow-md scale-105'
                        : 'border-[var(--border-subtle)] hover:border-[#C9A24B]/60 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* What's Included in Your Sacred Box Visual Banner */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] mt-8">
              <h3 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-[#C9A24B]" />
                <span>What&apos;s Included in Your Sacred Box</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--text-secondary)]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7C8B6A] shrink-0 mt-0.5" />
                  <span>1x Consecrated {product.name}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7C8B6A] shrink-0 mt-0.5" />
                  <span>Serialized NABL Lab Test Certificate with QR</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7C8B6A] shrink-0 mt-0.5" />
                  <span>1x Sealed Himalayan Gangajal Consecration Vial</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7C8B6A] shrink-0 mt-0.5" />
                  <span>Embroidered Raw Silk Travel & Storage Pouch</span>
                </div>
                <div className="flex items-start gap-2.5 col-span-1 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7C8B6A] shrink-0 mt-0.5" />
                  <span>Prana Pratishtha Sanskrit Ritual & Mantra Card</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs, Buy Flow (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Ratings */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-[#C9A24B] uppercase tracking-wider">
                  {product.material} • {product.purpose} Alignment
                </span>
                <span className="font-devanagari text-xs text-[#E0C075] bg-[#4A1420] px-2 py-0.5 rounded-full">
                  {product.sanskritName || 'ॐ'}
                </span>
              </div>

              <h1 className="font-serif-sacred text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#E8891D] font-medium mt-1">
                {product.subtitle}
              </p>

              {/* Star rating summary */}
              <div className="flex items-center gap-2 mt-3 text-xs">
                <div className="flex text-[#E8891D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[var(--text-primary)]">{product.rating.toFixed(2)}</span>
                <span className="text-[var(--text-muted)]">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Price display with Honest Savings */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-[#E8891D]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-base text-[var(--text-muted)] line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#7C8B6A] text-white">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({product.discountPercent}%)
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)]">
                Inclusive of all taxes. Free express shipping + cash on delivery available.
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] flex items-center justify-between">
                <span>Or 3 interest-free payments of <strong>₹{Math.round(product.price / 3)}</strong> with UPI</span>
                <span className="text-[#C9A24B] font-bold">0% Interest</span>
              </div>
            </div>

            {/* Size / Variant Picker */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[var(--text-primary)]">
                  Select Wrist Circumference: <strong className="text-[#E8891D]">{selectedSize}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs text-[#E8891D] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5" /> Sizing Guide
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#4A1420] text-white border-2 border-[#C9A24B] shadow-md'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#C9A24B]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex items-center border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-surface)] px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-sm font-bold text-[var(--text-secondary)] hover:text-[#E8891D] px-2"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[var(--text-primary)] px-3">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-sm font-bold text-[var(--text-secondary)] hover:text-[#E8891D] px-2"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl cursor-pointer ${
                    isAdded ? 'bg-[#7C8B6A] text-white' : 'btn-saffron'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Sacred Box</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Sacred Box</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Pincode Delivery Estimator */}
            <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
              <label htmlFor="pincode-input" className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Estimate Express Delivery to Your City</span>
              </label>

              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  id="pincode-input"
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode (e.g. 560001)"
                  className="flex-1 text-xs px-3 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold btn-gold-outline cursor-pointer"
                >
                  Check
                </button>
              </form>

              {pincodeStatus.tested && (
                <div className="pt-1">
                  {pincodeStatus.valid ? (
                    <p className="text-xs text-[#7C8B6A] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Delivery expected by <strong>{pincodeStatus.estimatedDelivery}</strong> (Free Express)</span>
                    </p>
                  ) : (
                    <p className="text-xs text-red-500 font-medium">
                      Please enter a valid 6-digit Indian postal code.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Authenticity Certificate Preview Card */}
            <div className="p-4 rounded-2xl border border-[#C9A24B]/40 bg-gradient-to-r from-[#C9A24B]/10 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#4A1420] text-[#E0C075]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">
                    NABL Lab Verified Report
                  </h4>
                  <span className="text-[11px] text-[var(--text-muted)]">
                    Report #{product.specifications.certificationNumber}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setCertModalOpen(true)}
                className="text-xs font-bold text-[#E8891D] hover:underline cursor-pointer"
              >
                Inspect Report →
              </button>
            </div>

          </div>

        </div>

        {/* Benefits & Ritual Guidelines Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Traditional Benefits */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
            <h3 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E8891D]" />
              <span>Sacred Benefits & Subtle Energies</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {product.description}
            </p>
            <ul className="space-y-2.5 pt-2">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <Check className="w-4 h-4 text-[#7C8B6A] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* First Use Consecration Ritual Guide */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#4A1420]/10 via-[var(--bg-surface)] to-[var(--bg-surface)] border border-[#C9A24B]/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C9A24B]" />
                <span>First-Use Energizing Ritual</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#E8891D]/15 text-[#E8891D] font-bold">
                {product.ritualGuide.bestDay}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs">
              <span className="text-[10px] text-[var(--text-muted)] block uppercase font-semibold">Associated Sacred Mantra</span>
              <p className="font-serif-sacred text-base font-bold text-[#E8891D] mt-0.5">
                {product.ritualGuide.mantra}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[var(--text-primary)] block">Recommended Steps:</span>
              {product.ritualGuide.energizingSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <span className="w-4 h-4 rounded-full bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Complete the Set Paired Upsell Bundle */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#24131A] to-[#3A1B24] border border-[#C9A24B]/40 text-white shadow-2xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0C075] flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-[#E8891D]" /> Complete Your Sacred Set
            </span>
            <h3 className="font-serif-sacred text-2xl sm:text-3xl font-bold">
              Pair with {pairedUpsell.name} for Enhanced Synergy
            </h3>
            <p className="text-xs sm:text-sm text-[#D9CEBF] mt-2">
              Wearing complementary sacred vibrations creates balanced grounding and amplifies spiritual focus. Buy together and receive an additional 15% combo concession.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/20">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-[#E0C075]">+</span>
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/20">
                <Image
                  src={pairedUpsell.images[0]}
                  alt={pairedUpsell.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">{product.name} + {pairedUpsell.name}</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-base font-extrabold text-[#E8891D]">
                    ₹{(product.price + pairedUpsell.price - 400).toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-zinc-400 line-through">
                    ₹{(product.price + pairedUpsell.price).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddBundle}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                bundleAdded ? 'bg-[#7C8B6A] text-white' : 'btn-saffron'
              }`}
            >
              {bundleAdded ? 'Bundle Added to Box ✓' : 'Add Both to Box (Save ₹400)'}
            </button>
          </div>
        </div>

        {/* Product FAQs */}
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)] text-center mb-6">
            Questions About This Creation
          </h3>
          {product.faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-sacred text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#E8891D]' : 'text-[var(--text-muted)]'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Product Reviews */}
        <div className="mt-16 pt-12 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif-sacred text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Seeker Reviews ({relatedReviews.length})
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Verified buyer testimonials for this authentic material
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7C8B6A] bg-[#7C8B6A]/15 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedReviews.slice(0, 4).map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-[#E8891D]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[var(--text-muted)]">{rev.date}</span>
                </div>
                <h4 className="font-serif-sacred text-base font-bold text-[var(--text-primary)]">
                  &quot;{rev.title}&quot;
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {rev.comment}
                </p>
                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{rev.author} • {rev.location}</span>
                  <span className="text-[#7C8B6A] font-semibold">Verified Buyer</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Sizing Guide Modal */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setSizeGuideOpen(false)} />
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="relative bg-[var(--bg-surface)] w-full max-w-md rounded-2xl p-6 border border-[#C9A24B]/50 shadow-2xl space-y-4">
              <h3 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)]">
                Sacred Wrist Sizing Guide
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Take a strip of paper or thread, wrap it around your wrist where you normally wear a watch, and measure the length against a ruler.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex justify-between">
                  <strong>Small (S):</strong> <span>6.0 - 6.7 inches (Slender wrist / Women)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex justify-between">
                  <strong>Medium (M):</strong> <span>6.8 - 7.5 inches (Standard adult fit)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex justify-between">
                  <strong>Large (L):</strong> <span>7.6 - 8.3 inches (Broader athletic wrist)</span>
                </div>
              </div>
              <p className="text-[11px] text-[#7C8B6A] font-medium">
                Note: All our elastic bands utilize aerospace German silicone cord with mild stretch for comfortable slide-on fit. Free size exchange included!
              </p>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="w-full py-2.5 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Add-to-Cart Bar */}
      {showStickyBar && (
        <aside
          aria-label="Quick order action"
          className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-subtle)] shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200"
        >
          <div className="min-w-0">
            <h4 className="font-serif-sacred text-xs font-bold text-[var(--text-primary)] truncate">
              {product.name}
            </h4>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-[#E8891D]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer ${
              isAdded ? 'bg-[#7C8B6A] text-white' : 'btn-saffron'
            }`}
          >
            {isAdded ? 'Added ✓' : 'Add to Box'}
          </button>
        </aside>
      )}

      {/* Certificate Modal */}
      <CertificateModal isOpen={certModalOpen} onClose={() => setCertModalOpen(false)} />
    </div>
  );
}
