'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, ShoppingBag, Check } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M (7.2 in)');
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If multiple sizes, open picker if not opened
    if (product.sizes.length > 1 && !showSizePicker) {
      setShowSizePicker(true);
      return;
    }

    addItem(product, selectedSize, 1);
    setIsAdded(true);
    setShowSizePicker(false);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const primaryBadge = product.badges[0] || 'Certified Authentic';

  return (
    <article
      aria-label={product.name}
      className="group relative flex flex-col rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C9A24B]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
    >
      {/* Top Badges & Discount */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#4A1420]/90 text-[#FBF6EC] backdrop-blur-xs shadow-xs border border-[#C9A24B]/30">
          <ShieldCheck className="w-3 h-3 text-[#E0C075]" />
          <span>{primaryBadge}</span>
        </span>

        {product.discountPercent > 0 && (
          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E8891D] text-white shadow-xs">
            {product.discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Image Container with Hover Swap */}
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-square w-full overflow-hidden bg-[var(--bg-surface-elevated)]"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            product.images[1] ? 'group-hover:opacity-0' : ''
          }`}
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        )}
      </Link>

      {/* Product Content Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between">
        <div>
          {/* Rating and Purpose */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#C9A24B] uppercase tracking-wider font-semibold text-[10px]">
              {product.material} • {product.purpose}
            </span>
            <div className="flex items-center gap-1 text-[var(--text-secondary)]">
              <Star className="w-3.5 h-3.5 fill-[#E8891D] text-[#E8891D]" />
              <span className="font-bold text-xs">{product.rating.toFixed(1)}</span>
              <span className="text-[10px] text-[var(--text-muted)]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-[#E8891D] transition-colors">
            <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)] line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Benefit-led phrase */}
          <p className="text-xs text-[var(--text-muted)] line-clamp-2 mt-1 min-h-[32px]">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing and Quick Add */}
        <div className="pt-3 mt-2 border-t border-[var(--border-subtle)]">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-[#E8891D]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[var(--text-muted)] line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Size Selector Dropdown / Inline pills when active */}
          {showSizePicker && product.sizes.length > 1 && (
            <div className="mb-2.5 p-2 rounded-lg bg-[var(--bg-surface-elevated)] border border-[#C9A24B]/40 animate-in fade-in zoom-in-95 duration-150">
              <span className="block text-[10px] font-semibold text-[var(--text-muted)] uppercase mb-1">
                Select Wrist Size:
              </span>
              <div className="flex gap-1.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(s);
                    }}
                    className={`flex-1 py-1 px-1.5 text-[11px] rounded font-medium transition-colors ${
                      selectedSize === s
                        ? 'bg-[#4A1420] text-white'
                        : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:bg-[#C9A24B]/20'
                    }`}
                  >
                    {s.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Add CTA */}
          <button
            onClick={handleQuickAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
              isAdded
                ? 'bg-[#A44C18] text-white'
                : 'btn-saffron'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Box</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{showSizePicker ? 'Confirm & Add' : 'Quick Add'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
