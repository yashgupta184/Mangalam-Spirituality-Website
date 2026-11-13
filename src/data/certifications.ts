import { BatchReport } from '@/types';

export const sampleBatchReports: BatchReport[] = [
  {
    id: 'rep-01',
    reportNumber: 'NABL-GEM-2026-4418',
    testedDate: '15 September 2026',
    productName: 'Shiva Drishti 5-Mukhi Nepali Rudraksha',
    beadBatch: 'BATCH-NP-26-09A (Bhojpur Harvest)',
    testMethod: 'Digital X-Ray Radiography + Micro-Fissure Stereomicroscopy',
    density: '0.98 - 1.04 g/cm³',
    specificGravity: '1.02 (Standard authentic range)',
    fissureIntegrity: '5 Continuous Internal Compartments (Natural)',
    nablLabId: 'GEM-IND-ACCR-892',
    resultStatus: 'Passed - 100% Authentic',
    qrVerifyUrl: 'https://verify.mangalam.in/reports/NABL-GEM-2026-4418',
  },
  {
    id: 'rep-02',
    reportNumber: 'TN-FOR-LAB-2026-9021',
    testedDate: '22 September 2026',
    productName: 'Maha Rakshak Pure Karungali (Diospyros ebenum)',
    beadBatch: 'BATCH-TN-EBONY-26-4',
    testMethod: 'Water Displacement Volumetric Sink Test & Pyrolysis GC-MS',
    density: '1.14 g/cm³ (High density heartwood)',
    specificGravity: '1.14 (> 1.0, Sinks instantly in H2O)',
    fissureIntegrity: 'Zero artificial dye or chemical impregnation detected',
    nablLabId: 'FOREST-MET-LAB-104',
    resultStatus: 'Passed - 100% Authentic',
    qrVerifyUrl: 'https://verify.mangalam.in/reports/TN-FOR-LAB-2026-9021',
  },
  {
    id: 'rep-03',
    reportNumber: 'NABL-CRY-2026-1184',
    testedDate: '29 September 2026',
    productName: 'Kuber Dhan Shree Natural Golden Pyrite',
    beadBatch: 'BATCH-PYR-PERU-26-08',
    testMethod: 'X-Ray Fluorescence (XRF) Elemental Spectroscopy',
    density: '4.95 - 5.10 g/cm³',
    specificGravity: '5.01 (Untreated mineral purity)',
    fissureIntegrity: 'Natural FeS2 cubic crystalline matrix (Untreated)',
    nablLabId: 'GEM-IND-ACCR-892',
    resultStatus: 'Conforms to Pure Standard',
    qrVerifyUrl: 'https://verify.mangalam.in/reports/NABL-CRY-2026-1184',
  }
];

export const authenticitySteps = [
  {
    step: '01',
    title: 'Ethical Direct Origin Sourcing',
    tagline: 'No Middlemen. No Counterfeits.',
    description: 'We harvest directly from family cooperatives in the high-altitude forests of Bhojpur & Sankhuwasabha (Nepal) for Rudraksha, and sustainable forest reserves in Tamil Nadu for mature Karungali ebony.',
    icon: 'Trees',
  },
  {
    step: '02',
    title: 'Multi-Point Lab Certification',
    tagline: 'Science Validating Tradition',
    description: 'Every batch undergoes laboratory testing: digital X-ray inspection to count seed chambers, flotation gravity tests (Karungali sinks, genuine Rudraksha sinks/settles), and spectroscopic mineral verification.',
    icon: 'Microscope',
  },
  {
    step: '03',
    title: 'Vedic Prana Pratishtha Consecration',
    tagline: 'Awakened with Sacred Sound',
    description: 'Before packaging, every wearable is cleansed with natural Gangajal, anointed with pure sandalwood, and energized through authentic Vedic Shanti & Siddhi mantra rituals by practicing temple sevaks.',
    icon: 'Sparkles',
  },
];
