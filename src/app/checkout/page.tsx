'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  ArrowLeft,
  Sparkles,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    subtotal,
    discount,
    shipping,
    total,
    appliedCoupon,
    clearCart,
    hasUpsell,
    upsellProduct,
  } = useCart();

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pincode: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    address: '',
    landmark: '',
  });

  const [shippingMethod, setShippingMethod] = useState<'free' | 'priority'>('free');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Auto-detect Indian city/state on 6-digit pincode
  const handlePincodeChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 6);
    setFormData((prev) => ({ ...prev, pincode: clean }));

    if (clean.length === 6) {
      if (clean.startsWith('56')) {
        setFormData((prev) => ({ ...prev, city: 'Bengaluru', state: 'Karnataka' }));
      } else if (clean.startsWith('40') || clean.startsWith('41')) {
        setFormData((prev) => ({ ...prev, city: 'Mumbai / Pune', state: 'Maharashtra' }));
      } else if (clean.startsWith('11')) {
        setFormData((prev) => ({ ...prev, city: 'New Delhi', state: 'Delhi NCR' }));
      } else if (clean.startsWith('60')) {
        setFormData((prev) => ({ ...prev, city: 'Chennai', state: 'Tamil Nadu' }));
      } else if (clean.startsWith('30') || clean.startsWith('31')) {
        setFormData((prev) => ({ ...prev, city: 'Jaipur', state: 'Rajasthan' }));
      } else if (clean.startsWith('24')) {
        setFormData((prev) => ({ ...prev, city: 'Dehradun', state: 'Uttarakhand' }));
      } else {
        setFormData((prev) => ({ ...prev, city: 'Metro City', state: 'India' }));
      }
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `MANGALAM-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();

      // Confetti celebratory burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E8891D', '#C9A24B', '#4A1420'],
        });
      } catch {
        // ignore
      }
    }, 1200);
  };

  const finalTotal = total + (shippingMethod === 'priority' ? 149 : 0);

  if (orderComplete) {
    return (
      <div className="py-16 sm:py-24 bg-[var(--bg-primary)] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-[var(--bg-surface)] rounded-3xl p-8 sm:p-10 border-2 border-[#C9A24B]/50 shadow-2xl text-center space-y-5 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#7C8B6A]/20 border border-[#7C8B6A] text-[#7C8B6A] flex items-center justify-center mx-auto">
            <Check className="w-8 h-8" />
          </div>

          <span className="font-devanagari text-base font-bold text-[#C9A24B]">
            शुभ संकल्प सिद्धम् • Congratulations!
          </span>

          <h2 className="font-serif-sacred text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Your Sacred Order is Confirmed
          </h2>

          <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Order Reference:</span>
              <strong className="font-mono text-[#E8891D]">{orderId}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Recipient:</span>
              <span className="font-bold text-[var(--text-primary)]">{formData.fullName || 'Seeker'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Delivery To:</span>
              <span className="text-[var(--text-secondary)]">{formData.city}, {formData.pincode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Payment Mode:</span>
              <span className="uppercase font-semibold text-[var(--text-primary)]">{paymentMethod}</span>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            A confirmation WhatsApp message and SMS have been dispatched with your live tracking link. Each bead is now undergoing final Prana Pratishtha anointment with fresh Gangajal.
          </p>

          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/"
              className="py-3 px-6 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider block"
            >
              Return to Sacred Home
            </Link>
            <Link
              href="/collection"
              className="py-2.5 px-6 rounded-xl border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Explore More Creations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0 && !hasUpsell) {
    return (
      <div className="py-24 bg-[var(--bg-primary)] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-4">
          <div className="w-16 h-16 rounded-full bg-[var(--bg-surface)] border border-[#C9A24B]/30 flex items-center justify-center mx-auto text-[#C9A24B]">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
            Your sacred box is empty
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            Please add your desired spiritual wearable before proceeding to checkout.
          </p>
          <Link
            href="/collection"
            className="inline-block py-2.5 px-6 rounded-full btn-saffron text-xs font-bold uppercase tracking-wider"
          >
            Explore Creations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)]">
          <Link href="/collection" className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[#E8891D]">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-[#7C8B6A] font-semibold">
            <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted Sacred Checkout
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form: Delivery & Payment (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Contact & Shipping Address */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C9A24B]" />
                <span>1. Contact & Delivery Destination</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                    Email for Invoice & Certificate
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aryan@example.com"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                    PIN Code (6 digits) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => handlePincodeChange(e.target.value)}
                    placeholder="e.g. 560001"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={`${formData.city}, ${formData.state}`}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] cursor-not-allowed"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                    Flat, House No., Apartment, Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House / Apartment #, Street name"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipping Speed Option */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
              <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C9A24B]" />
                <span>2. Select Delivery Mode</span>
              </h3>

              <div className="space-y-2 text-xs">
                <label className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  shippingMethod === 'free' ? 'border-[#E8891D] bg-[#E8891D]/5 font-semibold' : 'border-[var(--border-subtle)]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === 'free'}
                      onChange={() => setShippingMethod('free')}
                      className="accent-[#E8891D]"
                    />
                    <div>
                      <p className="text-[var(--text-primary)]">Free Express Delivery (3-5 business days)</p>
                      <span className="text-[10px] text-[var(--text-muted)]">Pan-India express courier with tracking</span>
                    </div>
                  </div>
                  <span className="text-[#7C8B6A] font-bold">FREE</span>
                </label>

                <label className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  shippingMethod === 'priority' ? 'border-[#E8891D] bg-[#E8891D]/5 font-semibold' : 'border-[var(--border-subtle)]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === 'priority'}
                      onChange={() => setShippingMethod('priority')}
                      className="accent-[#E8891D]"
                    />
                    <div>
                      <p className="text-[var(--text-primary)]">Priority Consecrated Air Courier (1-2 business days)</p>
                      <span className="text-[10px] text-[var(--text-muted)]">First dispatched on morning flights</span>
                    </div>
                  </div>
                  <span className="text-[#E8891D] font-bold">+₹149</span>
                </label>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#C9A24B]" />
                <span>3. Payment Method</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: QrCode, badge: 'Instant 0% Fee' },
                  { id: 'card', label: 'Cards / NetBanking', icon: CreditCard, badge: 'Visa/RuPay' },
                  { id: 'cod', label: 'Cash on Delivery', icon: Banknote, badge: '+₹50 COD Fee' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = paymentMethod === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPaymentMethod(item.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#E8891D] bg-[#E8891D]/10 font-bold'
                          : 'border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[#C9A24B]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-4 h-4 text-[#C9A24B]" />
                        <span className="text-[9px] text-[#7C8B6A] uppercase font-bold">{item.badge}</span>
                      </div>
                      <span className="text-xs text-[var(--text-primary)]">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {paymentMethod === 'upi' && (
                <div className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-1">
                  <p className="font-semibold text-[var(--text-primary)]">
                    Scan UPI QR or pay via GPay / PhonePe / Paytm:
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Payment request will be prompted seamlessly upon confirming the order.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] sticky top-24 space-y-4">
              <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)] pb-3 border-b border-[var(--border-subtle)]">
                Order Summary ({items.length + (hasUpsell ? 1 : 0)})
              </h3>

              {/* Items summary */}
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-3 text-xs">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[var(--border-subtle)]">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-sacred font-bold text-[var(--text-primary)] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[10px] text-[var(--text-muted)]">
                        Size: {item.selectedSize} • Qty: {item.quantity}
                      </span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}

                {hasUpsell && (
                  <div className="flex gap-3 text-xs pt-2 border-t border-[var(--border-subtle)]">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[var(--border-subtle)]">
                      <Image
                        src={upsellProduct.image}
                        alt={upsellProduct.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-sacred font-bold text-[var(--text-primary)] truncate">
                        {upsellProduct.name}
                      </h4>
                      <span className="text-[10px] text-[#C9A24B]">Consecration Add-on</span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">₹{upsellProduct.price}</span>
                  </div>
                )}
              </div>

              {/* Price Calculation */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#7C8B6A]">
                    <span>Coupon ({appliedCoupon})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingMethod === 'priority' ? '₹149' : shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex justify-between text-lg font-bold text-[var(--text-primary)]">
                  <span>Total Amount</span>
                  <span className="text-[#E8891D]">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Consecrating Order...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Complete Sacred Order (₹{finalTotal.toLocaleString('en-IN')})</span>
                  </>
                )}
              </button>

              <div className="pt-2 text-center text-[10px] text-[var(--text-muted)] space-y-1">
                <p>Protected by 7-Day Free Size Exchange & Consecration Guarantee</p>
                <p>Dispatched with sealed Gangajal vial & NABL certificate</p>
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
