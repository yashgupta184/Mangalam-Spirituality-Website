import { Product, Collection } from '@/types';

export const collections: Collection[] = [
  {
    id: 'col-1',
    slug: 'rudraksha',
    name: 'Rudraksha Malas & Bands',
    sanskritName: 'रुद्राक्ष साधना',
    tagline: 'Tears of Shiva for clarity and stillness',
    description: 'Sourced from the sacred foothills of Nepal. Each bead is naturally grown, inspected under magnification, and consecrated through Vedic Prana Pratishtha.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Protection',
    material: 'Rudraksha',
  },
  {
    id: 'col-2',
    slug: 'karungali',
    name: 'Karungali Sacred Ebony',
    sanskritName: 'करुंगाली रक्षक',
    tagline: 'Ancient ebony wood for electromagnetic grounding',
    description: 'Known for absorbing negative planetary energies and electromagnetic radiation. Handcrafted from mature black ebony wood harvested ethically in Tamil Nadu.',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Protection',
    material: 'Karungali',
  },
  {
    id: 'col-3',
    slug: 'wealth-abundance',
    name: 'Wealth & Abundance',
    sanskritName: 'शुभ लाभ एवं समृद्धि',
    tagline: "Fools' Gold and Sun stones that fuel visionary action",
    description: 'Traditionally revered for attracting auspicious beginnings, career focus, and commercial prosperity. Featuring untreated Golden Pyrite and Golden Quartz.',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Wealth',
    material: 'Pyrite',
  },
  {
    id: 'col-4',
    slug: 'protection-shielding',
    name: 'Protection & Shielding',
    sanskritName: 'अमोध सुरक्षा कवच',
    tagline: 'Formidable grounding for the modern energetic aura',
    description: 'Designed to repel evil eye (nazar) and psychic fatigue. Blends Karungali ebony with authentic 5-Mukhi Nepali Rudraksha beads.',
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Protection',
    material: 'Karungali',
  },
  {
    id: 'col-5',
    slug: 'peace-meditation',
    name: 'Inner Peace & Sleep',
    sanskritName: 'शांत चित्त एवं समाधि',
    tagline: 'Cooling vibrations for agitated modern minds',
    description: 'Infused with cooling lunar energy to soothe anxiety and encourage deep restorative sleep. Pure untreated South American Amethyst and Mysore White Sandalwood.',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Peace',
    material: 'Amethyst',
  },
  {
    id: 'col-6',
    slug: 'love-harmony',
    name: 'Love & Relationship Harmony',
    sanskritName: 'हृदय चक्र अनुराग',
    tagline: 'Gentle heart-chakra healing and self-compassion',
    description: 'Crafted from raw Madagascar Rose Quartz and Green Aventurine, fostering deeper emotional resonance, peaceful dialogue, and heart-centered living.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Love',
    material: 'Rose Quartz',
  },
  {
    id: 'col-7',
    slug: 'courage-confidence',
    name: 'Courage & Decisive Power',
    sanskritName: 'शौर्य एवं संकल्प शक्ति',
    tagline: 'Solar plexus activation for unyielding focus',
    description: 'Silky chatoyant Golden Tiger Eye combined with rare 7-Mukhi Mahalaxmi Rudraksha for decisive leadership, public speaking, and fearlessness.',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Courage',
    material: 'Tiger Eye',
  },
  {
    id: 'col-8',
    slug: 'health-balance',
    name: 'Holistic Health & Chakra Balance',
    sanskritName: 'आरोग्य एवं सप्त चक्र',
    tagline: 'Aligning the seven subtle vortexes of the spine',
    description: 'A harmonious spectrum of seven earth-born gemstones tuned to the frequency of physical equilibrium, cellular vitality, and energetic alignment.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    purpose: 'Health',
    material: '7 Chakra',
  },
];

export const products: Product[] = [
  // 1. Rudraksha - Bestseller 1
  {
    id: 'mangalam-01',
    slug: 'shiva-drishti-5-mukhi-nepali-rudraksha-band',
    name: 'Shiva Drishti Rudraksha Band',
    subtitle: 'Clarity, meditative focus & nervous system grounding',
    sanskritName: 'शिव दृष्टि पंचमुखी रुद्राक्ष',
    material: 'Rudraksha',
    purpose: 'Peace',
    collectionSlug: 'rudraksha',
    price: 1499,
    originalPrice: 2299,
    discountPercent: 35,
    rating: 4.95,
    reviewCount: 428,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Govt. Lab Tested', 'Authentic Nepali Origin', 'Prana Pratishtha Energized'],
    shortDescription: 'Hand-picked 8mm 5-Mukhi Nepali Rudraksha beads strung on aerospace-grade double-stretch silicone cord with 925 sterling silver spacer beads.',
    description: 'Traditionally worn by yogis and spiritual seekers across centuries, the 5-Mukhi Rudraksha is governed by Lord Shiva himself. Its unique bio-electric resonance is believed to calm pulse fluctuations, reduce chronic stress, and foster laser-sharp mental clarity during demanding days.',
    benefits: [
      'Traditionally believed to stabilize blood pressure and irregular cardiac rhythms',
      'Acts as an anchor for daily dhyana (mindfulness) and meditation',
      'Natural dielectric properties neutralize ambient electromagnetic smog',
      'Comes consecrated with Gangajal & Vedic mantras on a Pradosham tithi'
    ],
    specifications: {
      beadSize: '8mm round calibrated beads',
      beadCount: '23-25 beads (depending on selected wrist size)',
      cord: 'Dual-layered German braided elastic core (won’t snap)',
      metalAccents: 'Pure 925 Sterling Silver consecrated bead caps',
      origin: 'Bhojpur Region, Himalayan Foothills, Nepal',
      certificationNumber: 'NABL-GEM-2026-4418',
    },
    ritualGuide: {
      bestDay: 'Monday morning during Brahma Muhurta (5:00 AM - 6:30 AM)',
      deity: 'Lord Shiva',
      mantra: 'ॐ नमः शिवाय (Om Namah Shivaya) - 108 Times',
      energizingSteps: [
        'Rinse gently in fresh Gangajal or raw cow milk',
        'Light pure Desi ghee lamp or natural dhoop sticks',
        'Hold the bracelet in your right palm and chant the sacred mantra',
        'Wear on the right wrist with a quiet prayer of intention'
      ]
    },
    sizes: ['S (6.5 in / 16.5cm)', 'M (7.2 in / 18.2cm)', 'L (8.0 in / 20.3cm)'],
    faqs: [
      {
        question: 'How do I know this Rudraksha is 100% authentic?',
        answer: 'Every Mangalam bead is NABL-accredited laboratory certified with individual micro-fissure inspection and X-Ray density verification. A scannable QR certificate is enclosed in your box.'
      },
      {
        question: 'Can I wear it while bathing or showering?',
        answer: 'We recommend removing it during chemical soap or chlorine baths to maintain the natural essential oils of the Rudraksha wood.'
      },
      {
        question: 'Can women wear this Rudraksha band?',
        answer: 'Yes, absolutely. The ancient scriptures make no gender distinction for sacred 5-Mukhi Rudraksha beads.'
      }
    ]
  },

  // 2. Karungali - Bestseller 2
  {
    id: 'mangalam-02',
    slug: 'maha-rakshak-pure-karungali-ebony-bracelet',
    name: 'Maha Rakshak Karungali Bracelet',
    subtitle: 'Nazar shield, planetary balance & aura insulation',
    sanskritName: 'महा रक्षक शुद्ध करुंगाली',
    material: 'Karungali',
    purpose: 'Protection',
    collectionSlug: 'karungali',
    price: 1299,
    originalPrice: 1999,
    discountPercent: 35,
    rating: 4.98,
    reviewCount: 612,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Govt. Tested Ebony Wood', 'Sinks in Water Guaranteed', 'Bestseller'],
    shortDescription: '100% authentic dense Tamil Nadu Karungali (Black Ebony) wood beads with antique gold copper mantra cylinder.',
    description: 'Karungali (Diospyros ebenum) has been revered in South Indian temple traditions for millennia. Unlike painted imitation wood, genuine Karungali is ultra-dense, sinks spontaneously in water, and develops a richer luster the longer it touches your skin.',
    benefits: [
      'Believed to repel jealousy, evil eye (drishti/nazar), and psychological heaviness',
      'Traditionally associated with pacifying Mars (Kuja) and Saturn (Shani) planetary afflictions',
      'Dense natural dielectric wood that grounds physical tension and restlessness',
      'Naturally smooth, lightweight, and hypoallergenic on sensitive skin'
    ],
    specifications: {
      beadSize: '10mm smooth cylindrical barrel or spherical beads',
      beadCount: '20 handcrafted beads',
      cord: 'High-tensile ballistic stretch cord',
      metalAccents: 'Antique Gold 18K micro-plated brass mantra bead',
      origin: 'Ethically harvested dry evergreen forests, Tamil Nadu',
      certificationNumber: 'TN-FOR-LAB-2026-9021',
    },
    ritualGuide: {
      bestDay: 'Tuesday or Saturday sunrise',
      deity: 'Lord Murugan / Lord Hanuman',
      mantra: 'ॐ हं हनुमते नमः (Om Ham Hanumate Namah) - 21 Times',
      energizingSteps: [
        'Perform the water-sink test upon unboxing to verify genuine density',
        'Wipe dry and apply a drop of natural sesame or sandalwood oil',
        'Hold near camphor flame and offer mental devotion',
        'Wear on your active wrist'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Will this Karungali sink in water?',
        answer: 'Yes! Genuine Karungali wood has a specific gravity higher than 1.10 g/cm³, meaning it immediately sinks in fresh water without hesitation. Every box includes instructions for home testing.'
      },
      {
        question: 'Does the black color wash off or stain clothes?',
        answer: 'No. Genuine ebony wood is naturally pitch black through its entire heartwood without artificial chemical paints.'
      }
    ]
  },

  // 3. Pyrite - Bestseller 3
  {
    id: 'mangalam-03',
    slug: 'kuber-dhan-shree-natural-pyrite-wristband',
    name: 'Kuber Dhan Shree Pyrite Band',
    subtitle: 'Wealth attraction, financial discipline & magnetic confidence',
    sanskritName: 'कुबेर धन श्री पाइराइट बंध',
    material: 'Pyrite',
    purpose: 'Wealth',
    collectionSlug: 'wealth-abundance',
    price: 1699,
    originalPrice: 2499,
    discountPercent: 32,
    rating: 4.92,
    reviewCount: 384,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['100% Natural Golden Pyrite', 'Untreated Grade AAA', 'Siddhi Consecrated'],
    shortDescription: 'Faceted 8mm shimmering Golden Pyrite beads with raw brass Kuber Yantra coin charm.',
    description: 'Nicknamed "Fools Gold" by the casual observer, genuine Pyrite is an iron-sulfide crystal that radiates an undeniable golden solar brilliance. Revered in gemological alchemy as the stone of fiscal sovereignty, confidence, and enterprise.',
    benefits: [
      'Traditionally believed to stimulate the Solar Plexus chakra for bold commercial moves',
      'Assists in overcoming poverty mindset and self-limiting beliefs around money',
      'Heavy, metallic cool weight that brings immediate sensory grounding',
      'Energized with Lakshmi-Kuber mantras for commercial longevity'
    ],
    specifications: {
      beadSize: '8mm faceted cut beads with high light refraction',
      beadCount: '24 natural crystalline beads',
      cord: 'Quad-strand Korean nylon elastic weave',
      metalAccents: 'Cast brass micro Kuber Yantra disc',
      origin: 'Huanzala Mine, Peru (Ethically certified cut & polish)',
      certificationNumber: 'NABL-CRY-2026-1184',
    },
    ritualGuide: {
      bestDay: 'Thursday or Friday morning during Shukla Paksha',
      deity: 'Goddess Mahalakshmi & Lord Kuber',
      mantra: 'ॐ श्रीं ह्रीं क्लीं श्रीं सिद्धलक्ष्म्यै नमः (108 Times)',
      energizingSteps: [
        'Place on clean yellow silk cloth facing North-East',
        'Offer yellow flowers and natural rice grains (akshat)',
        'Recite Kuber Gayatri mantra with earnest commercial intent',
        'Wear on your dominant working wrist'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Can Pyrite get wet in water?',
        answer: 'Because Pyrite contains natural iron, prolonged exposure to moisture can cause surface oxidation. We advise wiping dry if exposed to water.'
      }
    ]
  },

  // 4. Rose Quartz - Bestseller 4
  {
    id: 'mangalam-04',
    slug: 'anahata-prema-madagascar-rose-quartz-bracelet',
    name: 'Anahata Prema Rose Quartz Band',
    subtitle: 'Heart-chakra healing, forgiveness & emotional warmth',
    sanskritName: 'अनाहत प्रेम रोज क्वार्ट्ज',
    material: 'Rose Quartz',
    purpose: 'Love',
    collectionSlug: 'love-harmony',
    price: 1399,
    originalPrice: 1999,
    discountPercent: 30,
    rating: 4.89,
    reviewCount: 310,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Madagascar Grade A', 'Gentle Heart Energy', 'Natural Soft Blush'],
    shortDescription: 'Hand-polished translucent blush Rose Quartz beads accented with a brushed rose-gold lotus charm.',
    description: 'Unwind emotional friction and cultivate compassionate resilience with Madagascar Rose Quartz. Emits a gentle, non-aggressive vibration that soothes relationship anxieties, eases grief, and reconnects you with unconditional self-respect.',
    benefits: [
      'Traditionally worn to cultivate deep domestic harmony and peaceful communication',
      'Soothes the hyper-critical inner monologue and promotes restful contentment',
      'Harmonizes the fourth (Anahata) energetic center located at the cardiac plexi',
      'A perfect, thoughtful gift for weddings, anniversaries, or self-renewal'
    ],
    specifications: {
      beadSize: '8mm smooth cabochon beads',
      beadCount: '23 calibrated crystal beads',
      cord: 'Invisible high-durability silicon stretch core',
      metalAccents: '18K Rose Gold electroplated sacred lotus charm',
      origin: 'Madagascar (Direct artisan cut)',
      certificationNumber: 'NABL-CRY-2026-6632',
    },
    ritualGuide: {
      bestDay: 'Friday evening at twilight (Sandhya Kaal)',
      deity: 'Goddess Parvati / Radha Rani',
      mantra: 'ॐ क्लीं कृष्णाय नमः (Om Kleem Krishnaya Namah)',
      energizingSteps: [
        'Cleanse under mild running water or moonlight for 1 hour',
        'Place near fresh pink or white rose petals',
        'Breathe deep into your chest center while affirming gentle kindness',
        'Wear on your left (receiving) wrist'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Why wear it on the left wrist?',
        answer: 'In classical energetic anatomy, the left hand is the receptive feminine gateway (Ida Nadi), making it ideal for absorbing soothing emotional frequencies.'
      }
    ]
  },

  // 5. Amethyst - Bestseller 5
  {
    id: 'mangalam-05',
    slug: 'sahasrara-shanti-uruguay-amethyst-bracelet',
    name: 'Sahasrara Shanti Amethyst Band',
    subtitle: 'Deep REM sleep, anxiety alleviation & spiritual intuition',
    sanskritName: 'सहस्रार शांति नीलमणि',
    material: 'Amethyst',
    purpose: 'Peace',
    collectionSlug: 'peace-meditation',
    price: 1599,
    originalPrice: 2299,
    discountPercent: 30,
    rating: 4.96,
    reviewCount: 295,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Deep Violet Uruguay Origin', 'Third Eye Awakener', 'Sleep Aid'],
    shortDescription: 'Deep royal purple Uruguayan Amethyst beads with antique silver Om bead.',
    description: 'Amethyst has been known as the stone of temperate mastery across Vedic, Greek, and Egyptian traditions. Its cooling violet wavelength helps quiet obsessive overthinking, promotes deep non-interrupted sleep, and clears the Crown chakra.',
    benefits: [
      'Traditionally utilized to soothe insomnia and turbulent dream states',
      'Helps alleviate emotional fatigue from digital screen overstimulation',
      'Supports steady concentration during breathwork (Pranayama) and contemplation',
      'Naturally cool stone that lowers sensory irritability during hectic workdays'
    ],
    specifications: {
      beadSize: '8mm translucent cut gem beads',
      beadCount: '24 beads',
      cord: 'Japanese silicone elastic cord',
      metalAccents: '925 Solid Sterling Silver Om bead',
      origin: 'Artigas, Uruguay (Natural deep purple saturation)',
      certificationNumber: 'NABL-CRY-2026-8840',
    },
    ritualGuide: {
      bestDay: 'Saturday evening before bedtime',
      deity: 'Lord Shiva / Lord Shani Dev',
      mantra: 'ॐ शं शनैश्चराय नमः (Om Sham Shanaishcharaya Namah)',
      energizingSteps: [
        'Place on windowsill under waxing moonlight',
        'Light a stick of natural lavender or white sage incense',
        'Hold near brow center (Ajna chakra) for 3 minutes of rhythmic breathing',
        'Wear on either wrist or place under your pillow before sleep'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Can I keep it under my pillow while sleeping?',
        answer: 'Yes! Many practitioners keep their Amethyst bracelet under or beside their pillow to support deep alpha-wave relaxation.'
      }
    ]
  },

  // 6. Tiger Eye - Bestseller 6
  {
    id: 'mangalam-06',
    slug: 'veerya-sankalpa-golden-tiger-eye-bracelet',
    name: 'Veerya Sankalpa Tiger Eye Band',
    subtitle: 'Courage, negotiation mastery & warrior vitality',
    sanskritName: 'वीर्य संकल्प व्याघ्र मणि',
    material: 'Tiger Eye',
    purpose: 'Courage',
    collectionSlug: 'courage-confidence',
    price: 1399,
    originalPrice: 1999,
    discountPercent: 30,
    rating: 4.91,
    reviewCount: 260,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['High Chatoyancy AAA', 'Confidence Catalyst', 'Vedic Consecrated'],
    shortDescription: '8mm luminous chatoyant Golden-Brown Tiger Eye with brushed titanium finish bead.',
    description: 'Golden Tiger Eye is famous for its optical chatoyancy — a shifting luminous band that mirrors the vigilant iris of a predator. Worn traditionally to dispel ungrounded timidity, strengthen public speaking poise, and dissolve procrastination.',
    benefits: [
      'Stimulates the Solar Plexus (Manipura) center for executive decisiveness',
      'Protects against intimidation and draining interpersonal dynamics',
      'Brings pragmatic logic to ambitious entrepreneurial dreams',
      'Sturdy scratch-resistant gemstone rated 7 on Mohs mineral hardness scale'
    ],
    specifications: {
      beadSize: '8mm optical chatoyant beads',
      beadCount: '23 beads',
      cord: 'Double-run high resilience polymer core',
      metalAccents: 'Brushed Titanium steel spacer bead',
      origin: 'Northern Cape, South Africa',
      certificationNumber: 'NABL-CRY-2026-7731',
    },
    ritualGuide: {
      bestDay: 'Sunday sunrise',
      deity: 'Surya Bhagwan (The Sun)',
      mantra: 'ॐ घृणि सूर्याय नमः (Om Ghrini Suryaya Namah) - 12 Times',
      energizingSteps: [
        'Expose to direct morning sunlight for 15 minutes',
        'Offer pure water (Arghya) to the rising sun',
        'Hold bracelet over your solar plexus and visualize warm amber fire',
        'Wear on dominant right wrist for outward authority'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Who should wear Tiger Eye?',
        answer: 'Anyone needing greater daily confidence, self-discipline, sales mastery, or relief from indecisiveness.'
      }
    ]
  },

  // 7. Karungali + Rudraksha Dual Shield - Bestseller 7
  {
    id: 'mangalam-07',
    slug: 'rudra-raksha-karungali-rudraksha-kavach-bracelet',
    name: 'Rudra Raksha Dual Kavach Band',
    subtitle: 'The ultimate sacred shield: Pure Ebony + Nepali Rudraksha',
    sanskritName: 'रुद्र रक्षा द्विदल कवच',
    material: 'Karungali',
    purpose: 'Protection',
    collectionSlug: 'protection-shielding',
    price: 1599,
    originalPrice: 2399,
    discountPercent: 33,
    rating: 4.99,
    reviewCount: 540,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Top Rated Shield', 'Dual Consecration', '100% Water Sink Verified'],
    shortDescription: 'Alternating beads of 8mm Tamil Nadu Karungali ebony and authentic 5-Mukhi Nepali Rudraksha.',
    description: 'Combining the electromagnetic shielding density of Karungali with the bio-dielectric consciousness-awakening of Shiva’s tears. This is our most requested protective wristband among entrepreneurs, travelers, and healthcare professionals.',
    benefits: [
      'Dual energetic insulation against negative intentions, burnout, and fatigue',
      'Balances both fiery aggressive impulses and sluggish inertia',
      'Authentic certified natural components with zero synthetic coatings',
      'Consecrated in a special 3-hour Prana Pratishtha havan ceremony'
    ],
    specifications: {
      beadSize: '8mm calibrated round beads',
      beadCount: '12 Karungali + 11 Rudraksha beads',
      cord: 'Reinforced dual-core elasticity cord',
      metalAccents: 'Antique Gold 18K plated Trishul-Damru charm',
      origin: 'Nepal & Tamil Nadu Sacred Reserves',
      certificationNumber: 'NABL-DUAL-2026-9934',
    },
    ritualGuide: {
      bestDay: 'Monday or Tuesday evening during Pradosham',
      deity: 'Lord Shiva & Bhairav Baba',
      mantra: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात्',
      energizingSteps: [
        'Sprinkle with sacred Gangajal and natural vibhuti',
        'Chant Rudra Gayatri 11 times with closed eyes',
        'Tie or slide onto your wrist with a clear vow of inner purity'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Why combine Karungali and Rudraksha?',
        answer: 'Karungali wood provides strong physical aura grounding, while Rudraksha refines mental frequencies. Together they create complete psychophysical equilibrium.'
      }
    ]
  },

  // 8. 7 Chakra Balance - Bestseller 8
  {
    id: 'mangalam-08',
    slug: 'sapt-chakra-prana-vitality-bracelet',
    name: 'Sapt Chakra Prana Balance Band',
    subtitle: '7 earth-born gemstones for complete energetic alignment',
    sanskritName: 'सप्त चक्र प्राण संतुलन',
    material: '7 Chakra',
    purpose: 'Balance',
    collectionSlug: 'health-balance',
    price: 1499,
    originalPrice: 2199,
    discountPercent: 31,
    rating: 4.93,
    reviewCount: 342,
    inStock: true,
    bestseller: true,
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['7 Genuine Crystals', 'NABL Certified Gems', 'Aligns Nadis'],
    shortDescription: 'Red Jasper, Carnelian, Tiger Eye, Green Aventurine, Sodalite, Amethyst, and Clear Quartz beads.',
    description: 'Every energy vortex (Chakra) along the spinal column vibrates to a specific electromagnetic frequency. This bracelet uses seven strictly untreated natural minerals to support the open flow of Kundalini prana from Muladhara to Sahasrara.',
    benefits: [
      'Encourages balanced vitality, preventing energetic depletion',
      'Releases blocked somatic tension stored in joints and muscles',
      'Daily sensory reminder to pause, breathe into the spine, and center oneself',
      'Vivid, harmonious color balance suitable with both traditional and modern wear'
    ],
    specifications: {
      beadSize: '8mm polished gem globes',
      beadCount: '24 beads (7 chakra cores + volcanic basalt grounds)',
      cord: 'Triple-braided silicone stretch strand',
      metalAccents: 'Brushed antique bronze Lotus bead',
      origin: 'India, Brazil, and South Africa',
      certificationNumber: 'NABL-CHK-2026-3391',
    },
    ritualGuide: {
      bestDay: 'Any morning following a 10-minute sun salutation practice',
      deity: 'The Universal Supreme Self (Brahman)',
      mantra: 'LAM, VAM, RAM, YAM, HAM, OM, SILENCE (Chakra Bija Mantras)',
      energizingSteps: [
        'Sit with straight spine in Padmasana or Sukhasana',
        'Hold bracelet at heart level and visualize a beam of golden light ascending your spine',
        'Silently chant each seed syllable once for each colored gem',
        'Wear throughout your waking hours'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Are the stones genuine or colored glass?',
        answer: '100% natural earth-mined stones verified by gemological testing. We do not use stained synthetic resin or dyed glass.'
      }
    ]
  },

  // 9-24: Additional 16 Products across 8 collections
  {
    id: 'mangalam-09',
    slug: 'divine-kuber-pyrite-mala-108-beads',
    name: 'Kuber Mahadhan 108 Pyrite Japa Mala',
    subtitle: 'Sacred counting mala for Lakshmi-Kuber Siddhi mantra japa',
    sanskritName: 'कुबेर महाधन १०८ पाइराइट जपमाला',
    material: 'Pyrite',
    purpose: 'Wealth',
    collectionSlug: 'wealth-abundance',
    price: 3499,
    originalPrice: 4999,
    discountPercent: 30,
    rating: 4.97,
    reviewCount: 189,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Traditional 108+1 Beads', 'Hand-Knotted Silk', 'Wealth Sadhana'],
    shortDescription: '108 hand-knotted 6mm metallic golden Pyrite beads with pure saffron silk tassel and Sumeru bead.',
    description: 'Designed for serious mantra sadhana. Each bead is individually knotted on pure saffron silk thread, ensuring silent, smooth finger glide during daily counting without friction or bead collisions.',
    benefits: [
      'Enables exact 108 count mantra repetitions without visual distraction',
      'Pure silk thread knotting guarantees durability for decades of prayer',
      'Radiates a glorious heavy metallic gold glow that deepens sacred spaces',
      'Includes brass mala storage pouch and Gangajal energizing kit'
    ],
    specifications: {
      beadSize: '6mm calibrated micro-faceted beads',
      beadCount: '108 + 1 Guru bead',
      cord: 'Pure Ahimsa mulberry silk hand-tied knots',
      metalAccents: 'Raw brass Sumeru bell',
      origin: 'Peru / Jaipur master knotters',
      certificationNumber: 'NABL-MAL-2026-4402',
    },
    ritualGuide: {
      bestDay: 'Friday evening or Diwali night',
      deity: 'Goddess Mahalakshmi',
      mantra: 'ॐ ह्रीं श्रीं क्रीं श्रीं क्रीं क्लीं श्रीं महालक्ष्मी मम गृहे धनं पूरय पूरय चिंतायै दूरय दूरय स्वाहा',
      energizingSteps: [
        'Never cross the Sumeru bead; turn the mala around at the 108th bead',
        'Store in the provided brass-zippered silk pouch away from dust'
      ]
    },
    sizes: ['One Size (108 Beads Mala - 34 inches loop)'],
    faqs: [
      {
        question: 'Can I wear this around my neck or only use for counting?',
        answer: 'You may wear it around your neck inside your clothing to keep the sacred energy close to your heart, or reserve it exclusively on your altar for meditation.'
      }
    ]
  },

  {
    id: 'mangalam-10',
    slug: 'authentic-karungali-108-bead-japamala',
    name: 'Mahakal Karungali 108 Japa Mala',
    subtitle: 'Dense Tamil Nadu ebony wood mala for ultimate protection',
    sanskritName: 'महाकाल करुंगाली १०८ जपमाला',
    material: 'Karungali',
    purpose: 'Protection',
    collectionSlug: 'karungali',
    price: 2999,
    originalPrice: 4299,
    discountPercent: 30,
    rating: 4.96,
    reviewCount: 215,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['108 Genuine Ebony Beads', 'Sinks in Water', 'Hand-Knotted'],
    shortDescription: '8mm cylindrical barrel Karungali ebony beads hand-knotted on black sacred thread with copper wire caps.',
    description: 'Ancient temple priests in Madurai and Tiruchendur wear Karungali malas to withstand intense spiritual tapasya. Dense, dark, and resilient, it grounds the human nervous system against acute atmospheric turbulence.',
    benefits: [
      'Grounds psychic vulnerability and creates an impenetrable energetic boundary',
      'Aids in the pacification of negative Mars/Saturn doshas in Vedic astrology',
      'Naturally smooth texture becomes lustrous with daily chant friction',
      'Supplied with our certificate of wood density and flotation test guarantee'
    ],
    specifications: {
      beadSize: '8mm barrel-carved beads',
      beadCount: '108 + 1 Guru bead',
      cord: 'Heavy-duty consecrated cotton-silk thread',
      metalAccents: 'Pure Copper Guru bead capping',
      origin: 'Tamil Nadu Dry Evergreen Forest',
      certificationNumber: 'TN-FOR-LAB-2026-8812',
    },
    ritualGuide: {
      bestDay: 'Tuesday sunrise or Amavasya night',
      deity: 'Lord Bhairav / Lord Murugan',
      mantra: 'ॐ भैरवाय नमः (Om Bhairavaya Namah)',
      energizingSteps: [
        'Consecrated with pure dhoop and sesame oil anointment',
        'Count using the thumb and middle finger of the right hand'
      ]
    },
    sizes: ['One Size (108 Beads Mala - 36 inches loop)'],
    faqs: [
      {
        question: 'Does the mala come already energized?',
        answer: 'Yes, every piece undergoes Vedic Prana Pratishtha by certified temple priests prior to dispatch.'
      }
    ]
  },

  {
    id: 'mangalam-11',
    slug: 'chandan-shanti-mysore-white-sandalwood-mala',
    name: 'Mysore Chandan Shanti Mala',
    subtitle: 'Natural aromatic White Sandalwood for cooling serenity',
    sanskritName: 'मैसूर श्वेत चंदन शांति माला',
    material: 'Sandalwood',
    purpose: 'Peace',
    collectionSlug: 'peace-meditation',
    price: 2499,
    originalPrice: 3499,
    discountPercent: 28,
    rating: 4.94,
    reviewCount: 165,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Authentic Karnataka Sandalwood', 'Naturally Fragrant', 'Pitta Pacifying'],
    shortDescription: 'Natural 8mm Mysore White Sandalwood beads emitting an ethereal, warm wood fragrance.',
    description: 'Sandalwood (Santalum album) has been celebrated in the Charaka Samhita as the premier cooling wood of Ayurveda. Its soothing aroma activates the parasympathetic rest response, cooling heated temperaments and cultivating contemplative stillness.',
    benefits: [
      'Natural divine fragrance that lingers gently for years',
      'Cools excessive bodily pitta (heat, anger, inflammatory restlessness)',
      'Traditionally favored for Gayatri and Saraswati mantra chanting',
      'Gentle satin touch that feels like silk on the skin'
    ],
    specifications: {
      beadSize: '8mm round unpainted beads',
      beadCount: '108 + 1 Guru bead',
      cord: 'Braided white cotton thread with tassel',
      metalAccents: 'None - Pure sacred wood',
      origin: 'Mysore, Karnataka (Forest Dept. Certified)',
      certificationNumber: 'KT-FOR-2026-3392',
    },
    ritualGuide: {
      bestDay: 'Wednesday or Thursday sunrise',
      deity: 'Goddess Saraswati & Lord Vishnu',
      mantra: 'ॐ ऐं सरस्वत्यै नमः (Om Aim Saraswatyai Namah)',
      energizingSteps: [
        'Store in airtight wooden or brass box when not in use to preserve fragrance',
        'Avoid contact with synthetic deodorants or perfumes'
      ]
    },
    sizes: ['One Size (108 Beads Mala)'],
    faqs: [
      {
        question: 'Is the scent artificial?',
        answer: 'No! It is 100% genuine heartwood scent with natural santalol oil. No synthetic chemicals or sprays are ever used.'
      }
    ]
  },

  {
    id: 'mangalam-12',
    slug: 'lakshmi-kamal-gatta-lotus-seed-wristband',
    name: 'Kamal Gatta Lakshmi Band',
    subtitle: 'Sacred dried lotus seeds for auspicious new undertakings',
    sanskritName: 'कमल गट्टा लक्ष्मी बंध',
    material: 'Rudraksha',
    purpose: 'Wealth',
    collectionSlug: 'wealth-abundance',
    price: 1199,
    originalPrice: 1799,
    discountPercent: 33,
    rating: 4.88,
    reviewCount: 142,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Organic Dried Lotus Seeds', 'Lakshmi Grace', 'Traditional Sadhana'],
    shortDescription: 'Naturally dried dark brown lotus seeds with 18k gold plated lotus flower talisman.',
    description: 'The lotus flower emerges untainted from murky ponds, symbolizing pure wealth that never corrupts the soul. Worn to invoke Goddess Mahalakshmi’s sustained blessings and stability in family businesses.',
    benefits: [
      'Traditionally believed to dissolve stubborn financial roadblocks',
      'Organic seed texture that feels wonderfully earthy against the wrist',
      'Reminds the wearer of purity and unblemished purpose amidst chaos',
      'Consecrated with Sri Suktam hymns'
    ],
    specifications: {
      beadSize: '10mm natural oval seeds',
      beadCount: '18 selected seeds',
      cord: 'Double-strung elastic cord',
      metalAccents: '18K Gold Plated Lotus charm',
      origin: 'Varanasi Sacred Lotus Wetlands',
      certificationNumber: 'IND-AGR-2026-4409',
    },
    ritualGuide: {
      bestDay: 'Friday morning',
      deity: 'Goddess Mahalakshmi',
      mantra: 'ॐ श्रीं ह्रीं क्लीं त्रिभुवन महालक्ष्म्यै अस्मांक दारिद्र्य नाशय प्रचुर धन देहि देहि क्लीं ह्रीं श्रीं ॐ',
      energizingSteps: [
        'Place on silver plate with rose petals',
        'Offer incense and wear with a humble, grateful heart'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Are these real seeds?',
        answer: 'Yes, dried natural Nelumbo nucifera (sacred lotus) seeds harvested by hand.'
      }
    ]
  },

  {
    id: 'mangalam-13',
    slug: 'bhagya-vriddhi-citrine-aventurine-luck-band',
    name: 'Bhagya Vriddhi Fortune Band',
    subtitle: 'Golden Citrine & Green Aventurine for new opportunities',
    sanskritName: 'भाग्य वृद्धि समृद्धि बंध',
    material: 'Pyrite',
    purpose: 'Luck',
    collectionSlug: 'wealth-abundance',
    price: 1599,
    originalPrice: 2299,
    discountPercent: 30,
    rating: 4.90,
    reviewCount: 228,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Natural Honey Citrine', 'Opportunity Magnet', 'Aura Brightener'],
    shortDescription: 'Golden Honey Citrine alternating with lush Green Aventurine crystals.',
    description: 'Citrine carries the warm, expansive vibration of Jupiter (Guru Bhagwan). Paired with Green Aventurine — known worldwide as the "Stone of Opportunity" — this band is an optimistic talisman for students, founders, and job seekers.',
    benefits: [
      'Encourages openness to unexpected serendipity and lucky synchronicity',
      'Boosts motivation during challenging exams, interviews, and pitches',
      'Bright, radiant sunny aesthetic that brings instant joy upon viewing',
      'Certified authentic untreated mineral specimens'
    ],
    specifications: {
      beadSize: '8mm polished globes',
      beadCount: '23 crystal beads',
      cord: 'Super-flexible polymer stretch core',
      metalAccents: 'Brushed gold four-leaf clover motif',
      origin: 'Minas Gerais, Brazil',
      certificationNumber: 'NABL-CRY-2026-9011',
    },
    ritualGuide: {
      bestDay: 'Thursday sunrise',
      deity: 'Lord Brihaspati (Guru)',
      mantra: 'ॐ बृं बृहस्पतये नमः (Om Brim Brihaspataye Namah)',
      energizingSteps: [
        'Cleanse in early sunlight for 10 minutes',
        'Hold near throat center and set your target milestone'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Is this heat-treated amethyst or natural citrine?',
        answer: 'We exclusively source natural pale-golden unheated honey citrine with subtle earth veining.'
      }
    ]
  },

  {
    id: 'mangalam-14',
    slug: 'arogya-swasthya-neem-wood-silver-bracelet',
    name: 'Arogya Swasthya Sacred Neem Band',
    subtitle: 'Ancient anti-microbial Neem heartwood with 925 Silver',
    sanskritName: 'आरोग्य स्वास्थ्य नीम काष्ठ',
    material: 'Karungali',
    purpose: 'Health',
    collectionSlug: 'health-balance',
    price: 1199,
    originalPrice: 1699,
    discountPercent: 29,
    rating: 4.87,
    reviewCount: 132,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Vedic Neem Heartwood', 'Purifying Touch', '925 Silver Capped'],
    shortDescription: '8mm seasoned wild Neem wood beads with pure 925 sterling silver guru bead.',
    description: 'Neem (Azadirachta indica) is designated in the Atharva Veda as "Sarva Roga Nivarini" — the healer of all ailments. Its bio-compounds maintain skin freshness, calm inflamed dermal tissues, and stimulate immune vitality.',
    benefits: [
      'Gentle bio-active wood that naturally repels impurities on the wrist',
      'Lightweight, breathable feel ideal for sports and yoga practice',
      'Traditionally believed to strengthen physiological resilience and stamina',
      'Hand-turned by rural artisans using seasoned fallen branches'
    ],
    specifications: {
      beadSize: '8mm turned spherical beads',
      beadCount: '24 beads',
      cord: 'Elastic silicone thread',
      metalAccents: 'Solid 925 Sterling Silver consecrated bead',
      origin: 'Gujarat organic groves',
      certificationNumber: 'IND-FOR-2026-1178',
    },
    ritualGuide: {
      bestDay: 'Wednesday or Friday sunrise',
      deity: 'Dhanvantari Bhagwan (The Celestial Physician)',
      mantra: 'ॐ नमो भगवते वासुदेवाय धन्वन्तरये अमृतकलशहस्ताय नमः',
      energizingSteps: [
        'Anoint with a micro drop of natural sesame oil periodically'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Does the neem wood have a strong bitter smell?',
        answer: 'It has a mild, earthy, clean herbal scent that is very pleasant and non-overpowering.'
      }
    ]
  },

  {
    id: 'mangalam-15',
    slug: 'kali-shakti-black-tourmaline-obsidian-bracelet',
    name: 'Kali Shakti Black Tourmaline Shield',
    subtitle: 'Heavy psychic grounder for emotional empaths and healers',
    sanskritName: 'काली शक्ति कृष्ण तूरमलीन',
    material: 'Karungali',
    purpose: 'Protection',
    collectionSlug: 'protection-shielding',
    price: 1599,
    originalPrice: 2299,
    discountPercent: 30,
    rating: 4.95,
    reviewCount: 312,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Grade AAA Tourmaline', 'Heavy Negative Ionizer', 'Aura Repeller'],
    shortDescription: 'Natural 8mm Black Tourmaline crystals with faceted Black Obsidian focal stone.',
    description: 'Black Tourmaline is one of nature’s only pyro-electric and piezo-electric minerals, naturally generating negative ions that clear static tension. Formidable protection for those who absorb heavy energies from crowds, hospitals, or corporate boardrooms.',
    benefits: [
      'Strongly repels environmental negativity and toxic interpersonal dynamics',
      'Anchors flighty, scattered thinking into rooted presence',
      'Transforms heavy emotional exhaustion into grounded composure',
      'Heavy substantial wrist feel providing instant sensory comfort'
    ],
    specifications: {
      beadSize: '8mm dense crystal spheres',
      beadCount: '23 beads',
      cord: 'Reinforced dual-strand elastic',
      metalAccents: 'Gunmetal finished stainless steel Trishul bead',
      origin: 'Bahia, Brazil',
      certificationNumber: 'NABL-CRY-2026-5590',
    },
    ritualGuide: {
      bestDay: 'Saturday night or Amavasya',
      deity: 'Maa Kali & Bhairav Baba',
      mantra: 'ॐ क्रीं कालिकायै नमः (Om Kreem Kalikayai Namah)',
      energizingSteps: [
        'Cleanse with rock salt smoke (Dhoop) every 15 days'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'How do I cleanse Black Tourmaline?',
        answer: 'Place it on dry rock salt or near burning natural incense for 10 minutes once a fortnight.'
      }
    ]
  },

  {
    id: 'mangalam-16',
    slug: 'medha-shakti-lapis-lazuli-wisdom-bracelet',
    name: 'Medha Shakti Royal Lapis Lazuli Band',
    subtitle: 'Truthful communication, intellectual depth & throat chakra',
    sanskritName: 'मेधा शक्ति नील लाजवर्त बंध',
    material: 'Amethyst',
    purpose: 'Peace',
    collectionSlug: 'peace-meditation',
    price: 1699,
    originalPrice: 2499,
    discountPercent: 32,
    rating: 4.93,
    reviewCount: 198,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Authentic Afghan Lapis', 'Golden Pyrite Inclusions', 'Throat Chakra'],
    shortDescription: 'Deep celestial blue Lapis Lazuli naturally flecked with golden Pyrite veins.',
    description: 'Prized by ancient royalty from Egypt to the Indus Valley Civilization. Lapis Lazuli stimulates the intellect, banishes stage fright, and encourages speaking your authentic truth with calm eloquence.',
    benefits: [
      'Helps speakers, advocates, teachers, and executives articulate vision',
      'Calms throat constriction and social performance anxiety',
      'Natural flecks of golden pyrite amplify discernment and mental acuity',
      'Striking royal lapis blue hue that elevates any outfit'
    ],
    specifications: {
      beadSize: '8mm polished gemstone spheres',
      beadCount: '23 beads',
      cord: 'Japanese stretch silicone core',
      metalAccents: 'Antique Silver Saraswati Veena charm',
      origin: 'Badakhshan, Afghanistan',
      certificationNumber: 'NABL-CRY-2026-4421',
    },
    ritualGuide: {
      bestDay: 'Wednesday morning',
      deity: 'Goddess Saraswati / Lord Budh',
      mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः (Om Bram Breem Broum Sah Budhaya Namah)',
      energizingSteps: [
        'Expose to early morning blue sky light for 15 minutes'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Are the gold flecks painted?',
        answer: 'No, they are natural embedded crystals of Pyrite, the classic marker of genuine high-grade Lapis Lazuli.'
      }
    ]
  },

  {
    id: 'mangalam-17',
    slug: 'garuda-raksha-karungali-silver-kada',
    name: 'Garuda Raksha Karungali Silver Kada',
    subtitle: 'Solid Karungali ebony cuff capped with 925 Hallmarked Silver',
    sanskritName: 'गरुड़ रक्षा करुंगाली रजत कड़ा',
    material: 'Karungali',
    purpose: 'Protection',
    collectionSlug: 'karungali',
    price: 3899,
    originalPrice: 5499,
    discountPercent: 29,
    rating: 4.99,
    reviewCount: 174,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Solid Ebony Heartwood', '925 Hallmarked Silver Caps', 'Regal Heritage'],
    shortDescription: 'Seamless hand-bent solid Karungali ebony wood core with intricately carved 925 sterling silver lion-face terminals.',
    description: 'A masterpiece of traditional Indian metal-and-wood craft. Solid mature ebony is steam-molded and anchored with hallmarked sterling silver terminal caps, creating a regal, heirloom-worthy protection kada.',
    benefits: [
      'Heirloom craftsmanship that lasts for generations',
      'Direct constant skin contact with dense therapeutic ebony wood',
      'Substantial masculine yet elegant silhouette',
      'Hallmarked 925 pure silver terminal ends with anti-tarnish treatment'
    ],
    specifications: {
      beadSize: '12mm thick curved solid ebony wood shank',
      beadCount: 'Continuous solid seamless band',
      cord: 'Rigid cuff with slight flex for fitting over wrist',
      metalAccents: '925 Hallmarked Sterling Silver lion-face terminal caps',
      origin: 'Tamil Nadu & Cuttack Silver Filigree artisans',
      certificationNumber: 'NABL-SIL-2026-2201',
    },
    ritualGuide: {
      bestDay: 'Tuesday sunrise or Pushya Nakshatra',
      deity: 'Lord Narasimha / Lord Hanuman',
      mantra: 'ॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्योर्मृत्युं नमाम्यहम् ॥',
      energizingSteps: [
        'Anoint silver tips with pure Ganga jal and chandan paste'
      ]
    },
    sizes: ['M (Wrist 7.0 - 7.5 in)', 'L (Wrist 7.6 - 8.2 in)'],
    faqs: [
      {
        question: 'Is the kada adjustable?',
        answer: 'The kada has gentle flexibility at the opening to slide comfortably over the side of the wrist.'
      }
    ]
  },

  {
    id: 'mangalam-18',
    slug: 'mahalakshmi-7-mukhi-nepali-rudraksha-band',
    name: 'Mahalakshmi 7-Mukhi Rudraksha Band',
    subtitle: 'Governed by Goddess Lakshmi & Planet Saturn for wealth stability',
    sanskritName: 'महालक्ष्मी सप्तमुखी रुद्राक्ष',
    material: 'Rudraksha',
    purpose: 'Wealth',
    collectionSlug: 'rudraksha',
    price: 2499,
    originalPrice: 3499,
    discountPercent: 28,
    rating: 4.97,
    reviewCount: 206,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Authentic 7-Mukhi Nepali', 'X-Ray Verified', 'Saturn & Lakshmi Blessing'],
    shortDescription: 'Rare 7-Mukhi collector Nepali Rudraksha bead flanked by 8mm Pyrite and silver rondelles.',
    description: 'Scripturally recorded as the sacred manifestation of Goddess Mahalakshmi herself, the 7-Mukhi Rudraksha neutralizes the financial instability caused by Saturn (Shani Sade Sati). It opens doors to steady, ethical prosperity.',
    benefits: [
      'Helps alleviate sudden unexpected financial losses and recurring business obstacles',
      'Strengthens endurance, patience, and strategic long-term vision',
      'Authentic certified 7 natural internal seed chambers verified via X-Ray',
      'Hand-strung with pure 925 sterling silver spacer rings'
    ],
    specifications: {
      beadSize: '16mm Nepali 7-Mukhi focal bead + 8mm Pyrite beads',
      beadCount: '1 Master Bead + 20 Accent Beads',
      cord: 'Multi-ply Japanese polymer stretch weave',
      metalAccents: 'Pure 925 Sterling Silver consecrated rings',
      origin: 'Sankhuwasabha District, Nepal',
      certificationNumber: 'NABL-RUD-2026-7789',
    },
    ritualGuide: {
      bestDay: 'Friday evening or Saturday sunrise',
      deity: 'Maha Lakshmi & Shani Dev',
      mantra: 'ॐ ह्रीं नमः (Om Hreem Namah) - 108 Times',
      energizingSteps: [
        'Anoint with rose attar and chant the beeja mantra 108 times'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Does it come with an X-Ray report?',
        answer: 'Yes! Rare high-mukhi beads like 7-Mukhi include a physical high-resolution laboratory X-Ray photograph verifying all 7 internal compartments.'
      }
    ]
  },

  {
    id: 'mangalam-19',
    slug: 'surya-tejas-red-carnelian-courage-band',
    name: 'Surya Tejas Carnelian Courage Band',
    subtitle: 'Fire element stone for decisive action and boundless stamina',
    sanskritName: 'सूर्य तेजस रक्त कार्नेलियन',
    material: 'Tiger Eye',
    purpose: 'Courage',
    collectionSlug: 'courage-confidence',
    price: 1299,
    originalPrice: 1899,
    discountPercent: 31,
    rating: 4.89,
    reviewCount: 154,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Natural Deep Amber Carnelian', 'Sacral Fire', 'Energy Booster'],
    shortDescription: 'Lustrous translucent sunset-red Carnelian beads with brushed antique gold Surya bead.',
    description: 'Carnelian is the ancient gemstone of warriors and architects. Its rich terracotta fire awakens the Sacral (Svadhisthana) chakra, dissolving apathy, stimulating physical appetite for achievement, and restoring creative vitality.',
    benefits: [
      'Ignites drive to finish long-delayed projects and athletic goals',
      'Dissolves emotional lethargy and chronic self-doubt',
      'Supports healthy blood circulation and metabolic warmth',
      'Vibrant fiery orange-red color that radiates confidence'
    ],
    specifications: {
      beadSize: '8mm high-gloss round beads',
      beadCount: '23 beads',
      cord: 'Elastic memory core cord',
      metalAccents: 'Antique Gold 18K plated Surya emblem',
      origin: 'Gujarat Riverbeds, India',
      certificationNumber: 'NABL-CRY-2026-3319',
    },
    ritualGuide: {
      bestDay: 'Sunday sunrise',
      deity: 'Surya Dev',
      mantra: 'ॐ आदित्याय नमः (Om Adityaya Namah)',
      energizingSteps: [
        'Place in warm sunlight for 30 minutes before first wearing'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Will Carnelian fade in sunlight?',
        answer: 'No, natural carnelian iron coloration is completely UV-stable and maintains its rich red lustre.'
      }
    ]
  },

  {
    id: 'mangalam-20',
    slug: 'hridaya-prema-green-aventurine-abundance-band',
    name: 'Hridaya Prema Green Aventurine Band',
    subtitle: 'Heart-chakra balance, optimistic luck & domestic peace',
    sanskritName: 'हृदय प्रेम हरित मरकत बंध',
    material: 'Rose Quartz',
    purpose: 'Love',
    collectionSlug: 'love-harmony',
    price: 1349,
    originalPrice: 1999,
    discountPercent: 32,
    rating: 4.90,
    reviewCount: 167,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Grade A Green Aventurine', 'Heart Renewal', 'Serendipity Stone'],
    shortDescription: 'Cool jade-green shimmering Aventurine beads with a silver tree of life charm.',
    description: 'Green Aventurine shimmers with natural microscopic fuchsite mica platelets. Treasured as a heart-stabilizing stone that clears emotional scars, eases conflict between partners, and invites gentle family harmony.',
    benefits: [
      'Helps release old grudges and lingering relationship bitterness',
      'Invites open, honest communication with family members',
      'Provides a calm, refreshing energetic touch throughout the day',
      'Fosters emotional resilience during rapid life transitions'
    ],
    specifications: {
      beadSize: '8mm smooth polished beads',
      beadCount: '24 beads',
      cord: 'Resilient elastic core',
      metalAccents: '925 Sterling Silver Kalpavriksha (Tree of Life) charm',
      origin: 'Bellary, Karnataka',
      certificationNumber: 'NABL-CRY-2026-6644',
    },
    ritualGuide: {
      bestDay: 'Wednesday or Friday morning',
      deity: 'Lord Budh & Goddess Parvati',
      mantra: 'ॐ नमः शिवाय (Om Namah Shivaya)',
      energizingSteps: [
        'Rest near a healthy indoor green plant overnight before wearing'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Can I wear this alongside Rose Quartz?',
        answer: 'Yes! Combining Green Aventurine and Rose Quartz creates the quintessential Heart Chakra synergy.'
      }
    ]
  },

  {
    id: 'mangalam-21',
    slug: 'panchamukhi-nepali-rudraksha-108-japa-mala',
    name: 'Panchamukhi Nepali 108 Japa Mala',
    subtitle: 'Classic 108+1 counting mala of pure Nepali Rudraksha',
    sanskritName: 'पंचमुखी नेपाली १०८ जपमाला',
    material: 'Rudraksha',
    purpose: 'Peace',
    collectionSlug: 'rudraksha',
    price: 2799,
    originalPrice: 3999,
    discountPercent: 30,
    rating: 4.98,
    reviewCount: 390,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Nepali Origin Guaranteed', '108 Hand-Knotted Beads', 'Vedic Prana Pratishtha'],
    shortDescription: 'Calibrated 7mm natural 5-Mukhi Nepali Rudraksha beads hand-knotted on red sacred silk thread with silver guru bead.',
    description: 'The golden standard of classical mantra meditation. Unlike cheap Indonesian beads, authentic Nepali beads have deep natural ridges (mukhis), solid internal density, and long-lasting sacred bio-electric resonance.',
    benefits: [
      'Deep, crisp ridges make counting effortless and tactile',
      'Each bead individually knotted to prevent friction and wear',
      'Blessed at the holy banks of Bagmati / Pashupatinath',
      'Comes with full NABL lab verification batch certificate'
    ],
    specifications: {
      beadSize: '7mm selected Nepali beads',
      beadCount: '108 + 1 Guru bead',
      cord: 'Pure red silk with manual knotting between each bead',
      metalAccents: '925 Solid Sterling Silver Guru bead ring',
      origin: 'Dharan / Sankhuwasabha, Nepal',
      certificationNumber: 'NABL-RUD-2026-1089',
    },
    ritualGuide: {
      bestDay: 'Monday sunrise during Shiva Pradosh',
      deity: 'Lord Shiva',
      mantra: 'ॐ नमः शिवाय (Om Namah Shivaya) - 108 Times daily',
      energizingSteps: [
        'Anoint gently with pure raw milk or Gangajal'
      ]
    },
    sizes: ['One Size (108 Beads Mala - 32 inches loop)'],
    faqs: [
      {
        question: 'What is the difference between Nepali and Indonesian Rudraksha?',
        answer: 'Nepali beads are larger, have pronounced deep fissures, higher specific gravity, and are scripturally considered the most potent for sadhana.'
      }
    ]
  },

  {
    id: 'mangalam-22',
    slug: 'sphatik-chandan-soma-cool-mala',
    name: 'Sphatik Chandan Soma Mala',
    subtitle: 'Pure Himalayan Quartz & White Sandalwood dual mala',
    sanskritName: 'स्फटिक चंदन सोम शीतलता माला',
    material: 'Sandalwood',
    purpose: 'Peace',
    collectionSlug: 'peace-meditation',
    price: 2899,
    originalPrice: 4199,
    discountPercent: 31,
    rating: 4.96,
    reviewCount: 182,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Diamond-Cut Himalayan Quartz', 'Pure Mysore Sandalwood', 'High Pitta Coolant'],
    shortDescription: 'Alternating beads of diamond-faceted natural Clear Quartz (Sphatik) and Mysore White Sandalwood.',
    description: 'Known in Ayurvedic gemology as the "Soma" duo — bringing lunar cool ambrosia to an overheated mind. Diamond-cut Sphatik conducts pure crystalline light, while White Sandalwood diffuses earthy herbal peace.',
    benefits: [
      'Instant tangible cooling sensation against warm or agitated skin',
      'Enhances mental purity during high-stakes strategic negotiations',
      'Traditionally used for chanting mantras of Saraswati and Gayatri',
      'Exquisite, understated luxury aesthetic suitable for formal occasions'
    ],
    specifications: {
      beadSize: '8mm faceted crystal & round sandalwood',
      beadCount: '108 + 1 Guru bead',
      cord: 'Hand-knotted white Ahimsa silk thread',
      metalAccents: 'Solid silver Sumeru bead cap',
      origin: 'Kullu Valley, Himalayas & Mysore',
      certificationNumber: 'NABL-SPH-2026-9921',
    },
    ritualGuide: {
      bestDay: 'Monday or Full Moon (Purnima) evening',
      deity: 'Goddess Gayatri / Chandra Dev',
      mantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
      energizingSteps: [
        'Expose to full moonlight overnight on a glass dish'
      ]
    },
    sizes: ['One Size (108 Beads Mala)'],
    faqs: [
      {
        question: 'How do I know the Sphatik is not glass?',
        answer: 'Genuine Sphatik stays noticeably cold to the touch even in warm summer air and produces faint blue triboluminescent sparks when gently tapped in complete darkness.'
      }
    ]
  },

  {
    id: 'mangalam-23',
    slug: 'tri-shakti-karungali-rudraksha-pyrite-band',
    name: 'Tri Shakti Sovereign Band',
    subtitle: 'The Triple Alliance: Karungali, Rudraksha & Golden Pyrite',
    sanskritName: 'त्रिशक्ति सार्वभौम बंध',
    material: 'Karungali',
    purpose: 'Balance',
    collectionSlug: 'health-balance',
    price: 1899,
    originalPrice: 2799,
    discountPercent: 32,
    rating: 4.98,
    reviewCount: 276,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['Protection + Clarity + Abundance', 'Triple Siddhi Blessed', 'Executive Choice'],
    shortDescription: 'Handcrafted combination of dense Karungali ebony, 5-Mukhi Nepali Rudraksha, and shimmering Golden Pyrite.',
    description: 'Designed for ambitious modern leaders balancing complex business, family, and spiritual lives. Karungali protects your boundaries, Rudraksha anchors your poise, and Pyrite attracts material abundance.',
    benefits: [
      'Synthesizes protection, mental clarity, and commercial success in one wrist piece',
      'Balances the three constitutional doshas (Vata, Pitta, Kapha)',
      'Subtle, understated elegance that pairs effortlessly with a luxury watch',
      'Supplied with comprehensive triple-material certification report'
    ],
    specifications: {
      beadSize: '8mm calibrated spherical beads',
      beadCount: '24 beads (8 Karungali, 8 Rudraksha, 8 Pyrite)',
      cord: 'Reinforced dual-strand ballistic silicone core',
      metalAccents: '925 Silver & 18K Gold duo spacer rings',
      origin: 'Nepal, Tamil Nadu, Peru',
      certificationNumber: 'NABL-TRI-2026-8801',
    },
    ritualGuide: {
      bestDay: 'Thursday sunrise or Pradosham',
      deity: 'Lord Shiva, Maa Lakshmi & Lord Murugan',
      mantra: 'ॐ ह्रीं श्रीं क्लीं नमः शिवाय (Om Hreem Shreem Kleem Namah Shivaya)',
      energizingSteps: [
        'Hold in palms over natural camphor flame before putting on'
      ]
    },
    sizes: ['S (6.5 in)', 'M (7.2 in)', 'L (8.0 in)'],
    faqs: [
      {
        question: 'Can I wear this with my wristwatch?',
        answer: 'Yes, absolutely. It looks exceptionally distinguished beside a steel or leather wristwatch on either arm.'
      }
    ]
  },

  {
    id: 'mangalam-24',
    slug: 'bhairav-kavach-karungali-silver-pendant-necklace',
    name: 'Bhairav Kavach Karungali Silver Pendant',
    subtitle: 'Carved Karungali ebony pendant encased in 925 Sterling Silver',
    sanskritName: 'भैरव कवच करुंगाली रजत लॉकेट',
    material: 'Karungali',
    purpose: 'Protection',
    collectionSlug: 'karungali',
    price: 2499,
    originalPrice: 3499,
    discountPercent: 28,
    rating: 4.95,
    reviewCount: 168,
    inStock: true,
    bestseller: false,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop',
    ],
    badges: ['925 Hallmarked Silver', 'Solid Karungali Core', 'Bhairav Siddhi Energized'],
    shortDescription: 'Solid carved Karungali ebony cylinder encased in pure 925 sterling silver yantra frame on adjustable silk cord.',
    description: 'An impenetrable talisman worn directly over the heart and thymus gland. The dark, dense Karungali wood is carved with subtle sacred geometry and held in a protective cage of hallmarked silver.',
    benefits: [
      'Rests near the high-heart chakra, insulating against sudden energetic distress',
      'Adjustable pure hand-twisted silk necklace cord with silver slider',
      'Safe to wear daily during sports, work, and sleep',
      'Individually inspected and NABL silver purity hallmarked'
    ],
    specifications: {
      beadSize: '32mm tall Karungali cylinder with 10mm diameter',
      beadCount: '1 Master Pendant on cord',
      cord: 'Adjustable high-strength black silk thread',
      metalAccents: 'Pure 925 Sterling Silver hallmarked frame',
      origin: 'Tamil Nadu & Kerala temple sculptors',
      certificationNumber: 'NABL-PEN-2026-1049',
    },
    ritualGuide: {
      bestDay: 'Tuesday or Saturday night',
      deity: 'Lord Bhairav',
      mantra: 'ॐ भ्रं भैरवाय नमः (Om Bhram Bhairavaya Namah)',
      energizingSteps: [
        'Touch to forehead and heart center with reverence'
      ]
    },
    sizes: ['Adjustable Cord (16 to 28 inches)'],
    faqs: [
      {
        question: 'Is the silver 925 hallmarked?',
        answer: 'Yes, the silver case has an official BIS 925 hallmark stamp visible on the top bail.'
      }
    ]
  }
];
