'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Truck, ShieldCheck } from 'lucide-react';

const announcements = [
  {
    icon: Truck,
    text: 'Free Express India Delivery on orders above ₹999 | Cod Available',
  },
  {
    icon: Sparkles,
    text: 'Auspicious Shravan Offer: Use code SHUBH10 for extra 10% off',
  },
  {
    icon: ShieldCheck,
    text: '100% Asli Karungali & Nepali Rudraksha with Govt. Lab Certificates',
  },
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <aside
      aria-label="Promotions and notices"
      className="relative z-50 bg-[#4A1420] text-[#FBF6EC] text-xs py-2 px-4 border-b border-[#C9A24B]/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center space-x-2 text-center transition-all duration-300">
          <CurrentIcon className="w-3.5 h-3.5 text-[#E8891D] shrink-0 animate-pulse" />
          <p className="font-medium tracking-wide">
            {announcements[currentIndex].text}
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 text-[#FBF6EC]/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
