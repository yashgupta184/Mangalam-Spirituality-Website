# MANGALAM (मंगलम्) — Sacred Wearables

> *"Rooted in tradition, made for today."*

A luxury front-end e-commerce experience for authentic Nepali Rudraksha, dense Tamil Nadu Karungali (ebony wood), and natural energy-stone bracelets and malas. Built specifically for discerning modern Indian buyers aged 20–45 who seek genuine spiritual grounding without tacky discount tropes or counterfeit anxiety.

---

## 🌟 Live Features & Architecture

### 1. Visual Identity & Design System (`/design-system`)
- **Atmosphere**: Calm, warm, temple-meets-boutique. Luxury jewellery editorial aesthetic.
- **Palette Tokens (WCAG AA Compliant)**:
  - **Deep Maroon (`#4A1420`)**: Primary dark and sacred anchor.
  - **Saffron (`#E8891D`)**: Singular, high-converting accent CTA color.
  - **Antique Gold (`#C9A24B`)**: Highlights, hairline dividers, and sacred iconography.
  - **Warm Ivory (`#FBF6EC`)**: Light mode background ensuring 13.6:1 contrast against Charcoal text.
  - **Charcoal (`#1F1A17`)**: High-legibility body text.
  - **Sage (`#7C8B6A`)**: Secondary accent for "Govt. Lab Tested" and "Verified Genuine" seals.
- **Dual-Mode Theme Engine**: Seamless toggle between Day Ivory and Deep Sacred Dusk modes with localStorage persistence.
- **Typography Scale**:
  - Refined Serif: **Cormorant Garamond** (Google Fonts) for regal, editorial headlines.
  - Modern Clean Sans: **Plus Jakarta Sans** for mobile legibility.
  - Authentic Devanagari: **Noto Serif Devanagari** for sacred Sanskrit accents (`ॐ नमः शिवाय`, `शुभ लाभ`).

---

### 2. Homepage Sections
1. **Slim Announcement Bar**: Dismissible, rotating free shipping threshold notification and auspicious seasonal offerings.
2. **Sticky Luxury Header**:
   - Sacred emblem + brand mark wordmark.
   - Dual-path Mega-Menu: **Shop by Material** (Rudraksha, Karungali, Pyrite, Rose Quartz, Amethyst, Tiger Eye) & **Shop by Purpose** (Wealth, Protection, Love, Peace, Luck, Health, Courage, Balance).
   - Live autocomplete search with product thumbnail previews.
   - Light/Dark theme toggle.
   - Cart trigger with animated item count badge.
   - Full mobile drawer with accordions.
3. **Hero Section**: Full-bleed luxury editorial imagery, slow graceful crossfade between 3 high-aesthetic visuals, dual CTAs (*Shop Bestsellers* & *Find My Perfect Match*), and verified trust pills.
4. **Trust Strip**: 4 icon badges (*Lab Tested Batch Reports*, *Govt. Certified Karungali*, *Vedic Siddhi Energized*, *Free Express India Shipping*) and an animated counter of **21,800+ Verified Seekers**.
5. **Shop by Purpose**: 8 interactive illustrated tiles with subtle golden hover glow, linking to pre-filtered collections.
6. **Bestsellers Carousel**: Curated 8 top items with image hover-swap, honest discounts, star ratings, and size-selectable quick-add.
7. **Authenticity Storytelling**: 3-step visual narrative (*Ethical Harvest* → *Lab Verification* → *Prana Pratishtha Consecration*), accompanied by an interactive **Batch Test Report Card** and a **QR-to-Video Water-Sink Demonstration Modal**.
8. **Interactive "Find My Perfect Match" Quiz**: Inline 3-question mini-quiz (Intent, Element/Rashi, Budget) generating immediate dynamic recommendations, plus a full-screen interactive modal version.
9. **Reviews Masonry**: Real customer testimonials with profile avatars, locations (Bengaluru, Chennai, Mumbai, Jaipur, Pune), verified buyer badges, and material filter tabs.
10. **Ethos & FAQ Accordion**: Clear, non-exaggerated answers on wood density, daily wear, ritual bathing, and size exchanges.
11. **Comprehensive Footer**: Weekly Vedic newsletter, WhatsApp concierge, order tracking, policies, address, and Indian payment icons (UPI, RuPay, Visa, COD).

---

### 3. Collection Catalog (`/collection`)
- Full catalog of **24 products** across 8 collections.
- Live sidebar filters: **Material**, **Purpose**, **Price Range Slider**, and **Rating**.
- Sort options: *Featured First*, *Price: Low to High*, *Price: High to Low*, *Highest Rated*.
- Mobile sticky filter drawer with active filter chips and 1-tap reset.
- Skeleton loading feedback during filter transitions.
- Empty state when search or filter combinations yield zero items.

---

### 4. Product Detail Experience (`/product/[slug]`)
- Dynamic SSG route for all 24 items with unique SEO metadata.
- Interactive image gallery with thumbnail switcher and hover magnification hint.
- Benefit-led headline and Sanskrit dedication.
- Transparent price calculation with honest discount percentage and 0% UPI installment breakdown.
- Size selector with interactive **Wrist Sizing Guide Modal**.
- Real-time **6-digit Indian Pincode Delivery Estimator** calculating estimated delivery dates.
- Visual checklist: **"What's Included in Your Sacred Box"** (Consecrated Wearable, NABL Lab Certificate with QR, Ganga Jal vial, Brass travel pouch, Mantra card).
- Expandable **NABL Lab Certificate Modal** displaying density, specific gravity, and X-ray fissure integrity.
- **"Complete the Set"** paired upsell bundle with 1-click combo discount.
- Specific product FAQs and customer reviews.
- Mobile sticky add-to-cart bar appearing smoothly on scroll.

---

### 5. Cart Drawer & Mock Checkout (`/checkout`)
- Slide-over cart drawer with animated free-shipping progress meter (₹999 threshold).
- 1-click combo add-on: **Sacred Gangajal & Brass Dhoop Consecration Kit** (₹199).
- Promo engine with instant discount calculation (`SHUBH10` for 10% off, `PRATHAM` for ₹200 off).
- Dedicated checkout page with address form, automatic Indian city/state detection from 6-digit pincode, delivery speed selector, and payment choices (UPI with QR, Card, NetBanking, COD).
- Celebratory confetti animation upon order confirmation with mock tracking code (`MANGALAM-XXXXXX`).

---

### 6. Floating Customer Guidance
- **Floating WhatsApp Concierge**: Launches pre-filled WhatsApp conversation with a spiritual sevak.
- **"Help Me Choose" Pill**: Triggers the interactive 3-step recommendation matchmaker from any viewport.

---

## 🛠️ Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with CSS variables
- **Icons**: Lucide React
- **Confetti Animation**: canvas-confetti
- **Typography**: `next/font/google` (Cormorant Garamond, Plus Jakarta Sans, Noto Serif Devanagari)

---

## 🚀 Setup & Local Execution

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build & Verification**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📐 Design Decisions & Rationale
1. **Trust-First Architecture**: Counterfeit anxiety is the #1 objection for spiritual jewellery in India. Every touchpoint displays verifiable science (density readings, water-sink guarantees, NABL serialized lab certificates) alongside traditional Vedic respect.
2. **Honest Commercials**: Banned fake countdown timers and deceptive "90% off" claims. Used honest discount pills, clear strike-throughs, and free shipping progress bars.
3. **Restrained Devotional Tone**: Phrasing adopts respectful expressions like *"traditionally believed to support..."* and *"revered for centuries"* rather than fraudulent health or miracle guarantees.
4. **Mobile-First UX**: Over 80% of Indian e-commerce occurs on smartphones. Designed touch targets of 44px minimum, sticky mobile add-to-cart bars, swipeable bestsellers carousels, and responsive sliding drawers.
