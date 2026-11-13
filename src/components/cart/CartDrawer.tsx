'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, Tag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    discount,
    shipping,
    total,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    hasUpsell,
    toggleUpsell,
    upsellProduct,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponMessage({ text: res.message, isError: !res.success });
    if (res.success) {
      setCouponInput('');
    }
  };

  const progressPercent = Math.min(100, Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          aria-label="Shopping Cart Drawer"
          className="w-screen max-w-md bg-[var(--bg-surface)] border-l border-[var(--border-subtle)] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-serif-sacred text-xl font-bold text-[var(--text-primary)]">
                Your Sacred Box
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-medium text-[#B87333]">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center justify-between text-xs font-medium mb-1.5">
              <span className="text-[var(--text-secondary)]">
                {amountNeededForFreeShipping > 0 ? (
                  <>
                    Add <strong className="text-[#C96818]">₹{amountNeededForFreeShipping}</strong> more for <strong>FREE Express Shipping</strong>
                  </>
                ) : (
                  <span className="text-[#A44C18] font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Auspicious! You unlocked Free Express Shipping!
                  </span>
                )}
              </span>
              <span className="text-[#B87333] font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[var(--border-subtle)] h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#B87333] to-[#C96818] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--bg-surface-elevated)] border border-[#B87333]/30 flex items-center justify-center text-[#B87333]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)]">
                  Your sacred box is empty
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1 max-w-xs mx-auto">
                  Bring divine stillness into your daily life with authentic Nepali Rudraksha and Karungali.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-5 px-6 py-2.5 rounded-full btn-saffron text-xs font-semibold uppercase tracking-wider"
                >
                  Explore Sacred Creations
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[var(--border-subtle)]">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-serif-sacred text-sm font-bold text-[var(--text-primary)] line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.product.id, item.selectedSize)}
                              className="text-[var(--text-muted)] hover:text-red-600 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="inline-block text-[11px] text-[var(--text-muted)] bg-[var(--bg-surface)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)] mt-0.5">
                            Size: {item.selectedSize}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-surface)] overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                              className="px-2 py-1 text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)]"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold text-[var(--text-primary)]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                              className="px-2 py-1 text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)]"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-bold text-[#C96818]">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                            {item.product.originalPrice > item.product.price && (
                              <span className="block text-[10px] text-[var(--text-muted)] line-through">
                                ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Combo Consecration Upsell Item */}
                <div className="p-3.5 rounded-xl border border-[#B87333]/40 bg-gradient-to-r from-[#B87333]/10 to-[#C96818]/5">
                  <div className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#B87333]/30">
                      <Image
                        src={upsellProduct.image}
                        alt={upsellProduct.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#C96818]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333]">
                          Sacred Add-on Blessing
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)] truncate mt-0.5">
                        {upsellProduct.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-bold text-[#C96818]">₹{upsellProduct.price}</span>
                        <span className="text-[10px] text-[var(--text-muted)] line-through">
                          ₹{upsellProduct.originalPrice}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={toggleUpsell}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        hasUpsell
                          ? 'bg-[#A44C18] text-white'
                          : 'bg-[#B87333] text-white hover:bg-[#A36224]'
                      }`}
                    >
                      {hasUpsell ? 'Added ✓' : '+ Add'}
                    </button>
                  </div>
                </div>

                {/* Coupon Code Section */}
                <div className="pt-2">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#A44C18]/10 border border-[#A44C18]/30 text-xs">
                      <div className="flex items-center gap-2 text-[#A44C18] font-semibold">
                        <Tag className="w-3.5 h-3.5" />
                        <span>Code &quot;{appliedCoupon}&quot; applied (-₹{discount})</span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-xs text-[#A44C18] hover:underline font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Offer code (e.g. SHUBH10)"
                          className="w-full text-xs uppercase px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:normal-case placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#B87333]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-3 py-2 text-xs font-semibold rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[#B87333] text-[var(--text-primary)] hover:text-[#C96818] transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponMessage && (
                    <p
                      className={`text-[11px] mt-1.5 ${
                        couponMessage.isError ? 'text-red-600' : 'text-[#A44C18] font-semibold'
                      }`}
                    >
                      {couponMessage.text}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-3">
              <div className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#A44C18] font-semibold">
                    <span>Sacred Blessing Concession</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-[#A44C18] font-semibold">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex justify-between text-base font-bold text-[var(--text-primary)]">
                  <span>Total Amount</span>
                  <span className="text-[#C96818]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full py-3.5 px-4 rounded-xl btn-saffron text-sm font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Proceed to Sacred Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-3 text-[11px] text-[var(--text-muted)] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" /> 100% Genuine Guaranteed
                </span>
                <span>•</span>
                <span>UPI / RuPay / Cards / COD</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
