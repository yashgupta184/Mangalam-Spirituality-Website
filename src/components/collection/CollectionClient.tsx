'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Filter, X, SlidersHorizontal, ArrowUpDown, Sparkles, Check, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';
import { MaterialType, PurposeType } from '@/types';

const allMaterials: MaterialType[] = [
  'Rudraksha',
  'Karungali',
  'Pyrite',
  'Rose Quartz',
  'Amethyst',
  'Tiger Eye',
  'Sandalwood',
  '7 Chakra',
];

const allPurposes: PurposeType[] = [
  'Wealth',
  'Protection',
  'Love',
  'Peace',
  'Luck',
  'Health',
  'Courage',
  'Balance',
];

export function CollectionClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialMaterial = searchParams.get('material') as MaterialType | null;
  const initialPurpose = searchParams.get('purpose') as PurposeType | null;
  const initialQuery = searchParams.get('q') || '';

  const [selectedMaterials, setSelectedMaterials] = useState<MaterialType[]>(
    initialMaterial ? [initialMaterial] : []
  );
  const [selectedPurposes, setSelectedPurposes] = useState<PurposeType[]>(
    initialPurpose ? [initialPurpose] : []
  );
  const [priceMax, setPriceMax] = useState<number>(5500);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync URL query params if they change
  useEffect(() => {
    const mat = searchParams.get('material') as MaterialType | null;
    const purp = searchParams.get('purpose') as PurposeType | null;
    if (mat && !selectedMaterials.includes(mat)) {
      setSelectedMaterials([mat]);
    }
    if (purp && !selectedPurposes.includes(purp)) {
      setSelectedPurposes([purp]);
    }
  }, [searchParams]);

  // Simulate fast skeleton on filter change
  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 200);
  };

  const toggleMaterial = (mat: MaterialType) => {
    triggerLoading();
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const togglePurpose = (purp: PurposeType) => {
    triggerLoading();
    setSelectedPurposes((prev) =>
      prev.includes(purp) ? prev.filter((p) => p !== purp) : [...prev, purp]
    );
  };

  const clearAllFilters = () => {
    triggerLoading();
    setSelectedMaterials([]);
    setSelectedPurposes([]);
    setPriceMax(5500);
    setMinRating(0);
    router.push('/collection');
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // Query filter
      if (initialQuery) {
        const q = initialQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesMat = p.material.toLowerCase().includes(q);
        const matchesPurp = p.purpose.toLowerCase().includes(q);
        const matchesSub = p.subtitle.toLowerCase().includes(q);
        if (!matchesName && !matchesMat && !matchesPurp && !matchesSub) return false;
      }

      // Material filter
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) {
        return false;
      }

      // Purpose filter
      if (selectedPurposes.length > 0 && !selectedPurposes.includes(p.purpose)) {
        return false;
      }

      // Price filter
      if (p.price > priceMax) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && p.rating < minRating) {
        return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // featured
      result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [selectedMaterials, selectedPurposes, priceMax, minRating, sortBy, initialQuery]);

  const activeFilterCount =
    selectedMaterials.length +
    selectedPurposes.length +
    (priceMax < 5500 ? 1 : 0) +
    (minRating > 0 ? 1 : 0);

  return (
    <div className="py-8 sm:py-12 bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--text-muted)] mb-2">
            <span>Home</span> <span className="mx-1.5">/</span>
            <span className="text-[#E8891D] font-semibold">Sacred Collection</span>
            {initialQuery && (
              <>
                <span className="mx-1.5">/</span>
                <span className="text-[var(--text-primary)]">Search: &quot;{initialQuery}&quot;</span>
              </>
            )}
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif-sacred text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
                {selectedMaterials.length === 1
                  ? `${selectedMaterials[0]} Creations`
                  : selectedPurposes.length === 1
                  ? `${selectedPurposes[0]} & Alignment`
                  : 'All Consecrated Wearables'}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5">
                Displaying {filteredProducts.length} certified authentic creations • NABL tested & Prana Pratishtha energized
              </p>
            </div>

            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#C9A24B]" />
                <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
              </button>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[var(--text-muted)] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    triggerLoading();
                    setSortBy(e.target.value as any);
                  }}
                  className="px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)] focus:outline-none focus:border-[#C9A24B] cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap mt-4 pt-3 border-t border-[var(--border-subtle)]">
              <span className="text-xs text-[var(--text-muted)] font-medium">Active Filters:</span>
              {selectedMaterials.map((m) => (
                <button
                  key={m}
                  onClick={() => toggleMaterial(m)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A1420] text-white text-xs font-medium cursor-pointer"
                >
                  <span>{m}</span>
                  <X className="w-3 h-3" />
                </button>
              ))}
              {selectedPurposes.map((p) => (
                <button
                  key={p}
                  onClick={() => togglePurpose(p)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8891D] text-white text-xs font-medium cursor-pointer"
                >
                  <span>{p}</span>
                  <X className="w-3 h-3" />
                </button>
              ))}
              {priceMax < 5500 && (
                <button
                  onClick={() => setPriceMax(5500)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-medium cursor-pointer"
                >
                  <span>Under ₹{priceMax}</span>
                  <X className="w-3 h-3" />
                </button>
              )}
              {minRating > 0 && (
                <button
                  onClick={() => setMinRating(0)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-medium cursor-pointer"
                >
                  <span>★ {minRating}+</span>
                  <X className="w-3 h-3" />
                </button>
              )}
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#E8891D] hover:underline font-semibold ml-2 cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Main Grid with Sidebar Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] sticky top-24 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <h3 className="font-serif-sacred text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#C9A24B]" />
                  <span>Refine Catalog</span>
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-[#E8891D] hover:underline font-semibold cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* By Material */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24B] mb-2.5">
                  Natural Material
                </h4>
                <div className="space-y-1.5">
                  {allMaterials.map((m) => {
                    const checked = selectedMaterials.includes(m);
                    return (
                      <label
                        key={m}
                        className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleMaterial(m)}
                          className="w-4 h-4 rounded text-[#E8891D] focus:ring-[#C9A24B] border-[var(--border-subtle)] cursor-pointer"
                        />
                        <span className={checked ? 'font-bold text-[var(--text-primary)]' : ''}>
                          {m}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* By Purpose */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24B] mb-2.5">
                  Spiritual Purpose
                </h4>
                <div className="space-y-1.5">
                  {allPurposes.map((p) => {
                    const checked = selectedPurposes.includes(p);
                    return (
                      <label
                        key={p}
                        className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePurpose(p)}
                          className="w-4 h-4 rounded text-[#E8891D] focus:ring-[#C9A24B] border-[var(--border-subtle)] cursor-pointer"
                        />
                        <span className={checked ? 'font-bold text-[var(--text-primary)]' : ''}>
                          {p}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24B]">
                    Max Price
                  </h4>
                  <span className="text-xs font-bold text-[var(--text-primary)]">
                    ₹{priceMax.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="5500"
                  step="250"
                  value={priceMax}
                  onChange={(e) => {
                    triggerLoading();
                    setPriceMax(Number(e.target.value));
                  }}
                  className="w-full accent-[#E8891D] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-1">
                  <span>₹1,000</span>
                  <span>₹5,500</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24B] mb-2">
                  Customer Rating
                </h4>
                <div className="flex gap-1.5">
                  {[0, 4.8, 4.9].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        triggerLoading();
                        setMinRating(rate);
                      }}
                      className={`flex-1 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                        minRating === rate
                          ? 'bg-[#E8891D] text-white font-bold'
                          : 'bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[#C9A24B]'
                      }`}
                    >
                      {rate === 0 ? 'All' : `★ ${rate}+`}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid (3 Columns) */}
          <main className="lg:col-span-3">
            {isLoading ? (
              // Skeleton Loaders
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-4 animate-pulse space-y-4"
                  >
                    <div className="aspect-square bg-[var(--bg-surface-elevated)] rounded-xl" />
                    <div className="h-4 bg-[var(--bg-surface-elevated)] rounded w-3/4" />
                    <div className="h-3 bg-[var(--bg-surface-elevated)] rounded w-1/2" />
                    <div className="h-8 bg-[var(--bg-surface-elevated)] rounded" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              // Empty State
              <div className="py-20 text-center rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--bg-surface-elevated)] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
                  No sacred creations match these criteria
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-2 max-w-md mx-auto">
                  Try clearing your filters or selecting a different material/purpose to view available items.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-6 px-6 py-2.5 rounded-full btn-saffron text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Sticky Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[var(--bg-surface)] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <h3 className="font-serif-sacred text-lg font-bold text-[var(--text-primary)]">
                  Filter Catalog
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Materials */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24B] mb-2.5">
                  Natural Material
                </h4>
                <div className="flex flex-wrap gap-2">
                  {allMaterials.map((m) => (
                    <button
                      key={m}
                      onClick={() => toggleMaterial(m)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                        selectedMaterials.includes(m)
                          ? 'bg-[#4A1420] text-white'
                          : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Purposes */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24B] mb-2.5">
                  Purpose
                </h4>
                <div className="flex flex-wrap gap-2">
                  {allPurposes.map((p) => (
                    <button
                      key={p}
                      onClick={() => togglePurpose(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                        selectedPurposes.includes(p)
                          ? 'bg-[#E8891D] text-white'
                          : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price Slider */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold text-[#C9A24B] uppercase">Max Price</span>
                  <span className="font-bold text-[var(--text-primary)]">₹{priceMax}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="5500"
                  step="250"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#E8891D]"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex gap-2">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-2.5 rounded-xl border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-secondary)]"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
