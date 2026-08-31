import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal, 
  Sparkles, 
  Layers, 
  Boxes, 
  CheckCircle2, 
  ArrowUpDown, 
  Grid, 
  List 
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product, CategoryType } from '../types';
import { useQuote } from '../context/QuoteContext';

interface ProductsProps {
  initialCategory?: CategoryType;
  onNavigateHome?: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
  initialCategory = 'All',
  onNavigateHome,
  onSelectProduct
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { openQuoteModal, openLaserPreviewModal } = useQuote();

  const urlCategory = (searchParams.get('category') as CategoryType) || initialCategory || 'All';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(urlCategory);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc' | 'moq-asc'>('featured');
  const [readyStockOnly, setReadyStockOnly] = useState(false);
  const [laserMarkingOnly, setLaserMarkingOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync state if URL search params change
  useEffect(() => {
    const cat = (searchParams.get('category') as CategoryType) || 'All';
    setSelectedCategory(cat);
    const search = searchParams.get('search') || '';
    if (search !== searchQuery) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const updateCategoryFilter = (cat: CategoryType) => {
    setSelectedCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams, { replace: true });
  };

  const updateSearchQuery = (q: string) => {
    setSearchQuery(q);
    const newParams = new URLSearchParams(searchParams);
    if (q.trim()) {
      newParams.set('search', q.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams, { replace: true });
  };

  const materials = [
    'All',
    'Stainless Steel (AISI 304)',
    'Heavy Mild Steel (MS)',
    'Dual Tone (SS + MS)',
    'Brass Accents'
  ];

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Material filter
      if (selectedMaterial !== 'All') {
        if (selectedMaterial.includes('304') && !product.material.includes('304')) return false;
        if (selectedMaterial.includes('Mild Steel') && !product.material.includes('Mild Steel') && !product.material.includes('MS')) return false;
        if (selectedMaterial.includes('Dual Tone') && !product.material.includes('+') && !product.finish.includes('Dual')) return false;
      }

      // Ready Stock filter
      if (readyStockOnly && !product.inStock) {
        return false;
      }

      // Laser Marking filter
      if (laserMarkingOnly && !product.laserMarkingAvailable) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchCode = product.itemCode.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        const matchMat = product.material.toLowerCase().includes(query);
        if (!matchName && !matchCode && !matchCat && !matchMat) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'moq-asc') {
        return a.minOrderQty - b.minOrderQty;
      }
      return 0;
    });
  }, [selectedCategory, selectedMaterial, readyStockOnly, laserMarkingOnly, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSearchQuery('');
    setReadyStockOnly(false);
    setLaserMarkingOnly(false);
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const handleProductSelect = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      navigate(`/products/${product.slug || product.id}`);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[
            { label: 'Products', to: '/products', active: selectedCategory === 'All' },
            ...(selectedCategory !== 'All' ? [{ label: selectedCategory, active: true }] : [])
          ]}
          onNavigateHome={onNavigateHome}
        />
      </div>

      {/* Hero Category Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-1.5">
                Rajkot Manufacturing Facility • Direct Wholesale Tiers
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight">
                {selectedCategory === 'All' ? 'Complete Steel & MS Catalogue' : selectedCategory}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                Precision fabricated corporate desktop gifts, mobile docks, revolving caddies, and institutional awards. Minimum order quantity 100 pcs with instant laser branding support.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={openLaserPreviewModal}
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#DD2B1C]" />
                <span>Simulate Laser Logo</span>
              </button>
              <button
                onClick={() => openQuoteModal()}
                className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                Request Fast RFQ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sidebar & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Mobile Filter Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => updateSearchQuery(e.target.value)}
              placeholder="Search by name, item code (e.g. VT-MS-01)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => updateSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Controls: Sort & Mobile Filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 bg-gray-50"
            >
              <Filter className="w-3.5 h-3.5 text-[#DD2B1C]" />
              <span>Filters {selectedCategory !== 'All' ? '(1)' : ''}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#151616] bg-white focus:outline-none focus:border-[#DD2B1C]"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="name-asc">Alphabetical: A to Z</option>
                <option value="name-desc">Alphabetical: Z to A</option>
                <option value="moq-asc">Lowest MOQ First</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filters Sidebar */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#151616] flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#DD2B1C]" /> Filter Catalogue
                </span>
                {(selectedCategory !== 'All' || selectedMaterial !== 'All' || readyStockOnly || laserMarkingOnly) && (
                  <button
                    onClick={clearAllFilters}
                    className="text-[11px] font-bold text-[#DD2B1C] hover:underline"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  Product Categories
                </label>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => {
                    const count = cat === 'All' 
                      ? PRODUCTS.length 
                      : PRODUCTS.filter(p => p.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => updateCategoryFilter(cat)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-[#151616] text-white font-bold'
                            : 'text-gray-700 hover:bg-gray-200/70'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Material Filter */}
              <div className="pt-2 border-t border-gray-200">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  Raw Material
                </label>
                <div className="space-y-1">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        selectedMaterial === mat
                          ? 'text-[#DD2B1C] font-bold'
                          : 'text-gray-600 hover:text-[#151616]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Checkbox Toggles */}
              <div className="pt-2 border-t border-gray-200 space-y-2.5 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
                  <input
                    type="checkbox"
                    checked={readyStockOnly}
                    onChange={(e) => setReadyStockOnly(e.target.checked)}
                    className="rounded text-[#DD2B1C] focus:ring-[#DD2B1C] w-4 h-4"
                  />
                  <span>Ready Stock Only (1000+ Cartons)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
                  <input
                    type="checkbox"
                    checked={laserMarkingOnly}
                    onChange={(e) => setLaserMarkingOnly(e.target.checked)}
                    className="rounded text-[#DD2B1C] focus:ring-[#DD2B1C] w-4 h-4"
                  />
                  <span>Laser Marking Ready</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Product Grid */}
          <main className="lg:col-span-9">
            {/* Active Filters Pill Bar */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium">
              <span>Showing <strong className="text-[#151616]">{filteredProducts.length}</strong> of {PRODUCTS.length} products</span>
              {selectedCategory !== 'All' && (
                <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                  Category: {selectedCategory}
                  <X className="w-3 h-3 cursor-pointer hover:text-[#DD2B1C]" onClick={() => updateCategoryFilter('All')} />
                </span>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300 p-8">
                <Boxes className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#151616]">No matching products found</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1 mb-4">
                  We couldn't find any products matching your specific filter criteria. Try adjusting your keywords or clearing the category filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-[#DD2B1C] text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleProductSelect}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
export default Products;
