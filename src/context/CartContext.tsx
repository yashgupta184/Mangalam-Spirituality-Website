'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '@/types';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, selectedSize?: string, quantity?: number) => void;
  removeItem: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  hasUpsell: boolean;
  toggleUpsell: () => void;
  upsellProduct: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
  };
  totalCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 99;

const UPSELL_PRODUCT = {
  id: 'upsell-gangajal-incense',
  name: 'Sacred Gangajal & Brass Dhoop Consecration Kit',
  price: 199,
  originalPrice: 499,
  image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=300&auto=format&fit=crop',
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [hasUpsell, setHasUpsell] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mangalam-cart') ?? localStorage.getItem('japam-cart');
      if (saved) {
        const savedItems = JSON.parse(saved) as CartItem[];
        setItems(
          savedItems.map((item) => ({
            ...item,
            product: {
              ...item.product,
              id: item.product.id.replace(/^japam-/, 'mangalam-'),
            },
          }))
        );
      }
      const savedCoupon = localStorage.getItem('mangalam-coupon') ?? localStorage.getItem('japam-coupon');
      if (savedCoupon) {
        setAppliedCoupon(savedCoupon);
      }
    } catch {
      // ignore
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('mangalam-cart', JSON.stringify(items));
      localStorage.removeItem('japam-cart');
      if (appliedCoupon) {
        localStorage.setItem('mangalam-coupon', appliedCoupon);
        localStorage.removeItem('japam-coupon');
      } else {
        localStorage.removeItem('mangalam-coupon');
        localStorage.removeItem('japam-coupon');
      }
    } catch {
      // ignore
    }
  }, [items, appliedCoupon, isLoaded]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product: Product, selectedSize: string = 'M (7.2 in)', quantity: number = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }

      return [...prev, { product, selectedSize, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, selectedSize: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId: string, selectedSize: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === selectedSize) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
    setHasUpsell(false);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SHUBH10') {
      setAppliedCoupon('SHUBH10');
      return { success: true, message: 'Code SHUBH10 applied! 10% discount on order.' };
    }
    if (clean === 'PRATHAM') {
      setAppliedCoupon('PRATHAM');
      return { success: true, message: 'Code PRATHAM applied! ₹200 off your sacred order.' };
    }
    return { success: false, message: 'Invalid coupon code. Try SHUBH10 or PRATHAM.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const toggleUpsell = () => {
    setHasUpsell((prev) => !prev);
  };

  const itemsSubtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const subtotal = itemsSubtotal + (hasUpsell ? UPSELL_PRODUCT.price : 0);

  let discount = 0;
  if (appliedCoupon === 'SHUBH10') {
    discount = Math.round(subtotal * 0.1);
  } else if (appliedCoupon === 'PRATHAM') {
    discount = Math.min(200, subtotal);
  }

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : STANDARD_SHIPPING_FEE;
  const total = Math.max(0, subtotal - discount + shipping);

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0) + (hasUpsell ? 1 : 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        discount,
        shipping,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        hasUpsell,
        toggleUpsell,
        upsellProduct: UPSELL_PRODUCT,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
