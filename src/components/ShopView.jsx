import { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown, RefreshCw, Grid } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ShopView({ categoryFilter = 'all', searchQuery = '', onQuickView }) {
  // Filters State
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [minPrice, setMinPrice] = useState(0);
  const [sortBy, setSortBy] = useState('default');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  // Categories list
  const categoriesList = [
    { id: 'all', name: 'All Collections' },
    { id: 'three-piece', name: 'Three Piece' },
    { id: 'two-piece', name: 'Two Piece' },
    { id: 'hijab', name: 'Hijab' },
    { id: 'abaya', name: 'Abaya & Tunic' }
  ];

  // Filtering & Sorting Logic
  const filteredProducts = products
    .filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Price filter
      const price = product.discountPrice;
      if (price < minPrice || price > maxPrice) {
        return false;
      }
      // Search filter
      if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Sorting
      if (sortBy === 'price-asc') {
        return a.discountPrice - b.discountPrice;
      }
      if (sortBy === 'price-desc') {
        return b.discountPrice - a.discountPrice;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0; // default (no sort)
    });

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setMaxPrice(15000);
    setMinPrice(0);
    setSortBy('default');
    setSearchTerm('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      
      {/* Search status notification */}
      {searchTerm && (
        <div className="mb-6 bg-brand-yellow/10 border border-brand-yellow/30 p-4 rounded-2xl flex items-center justify-between text-brand-purple">
          <span className="text-xs sm:text-sm font-semibold">
            Showing results for "<span className="font-extrabold italic">{searchTerm}</span>" ({filteredProducts.length} items found)
          </span>
          <button 
            onClick={() => setSearchTerm('')} 
            className="text-xs font-black underline hover:text-brand-purple/80 cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple tracking-tight">
            {categoriesList.find(c => c.id === selectedCategory)?.name || 'Collections'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wide uppercase mt-1">
            Displaying {filteredProducts.length} premium products
          </p>
        </div>

        {/* Filter controls row */}
        <div className="flex items-center gap-3">
          {/* Sorting Dropdown */}
          <div className="relative flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-2xs">
            <ArrowUpDown size={16} className="text-gray-400 mr-2" />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold text-brand-purple focus:outline-none cursor-pointer pr-4"
            >
              <option value="default">Default Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Toggle Filters Button for Mobile */}
          <button 
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="lg:hidden flex items-center bg-brand-purple text-brand-yellow px-4 py-2.5 rounded-xl text-xs font-black tracking-wide cursor-pointer active:scale-95 transition-all shadow-xs"
          >
            <SlidersHorizontal size={14} className="mr-2" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        {/* 1. Sidebar Filters (Desktop only) */}
        <aside className="hidden lg:flex flex-col gap-6 w-64 shrink-0 bg-white border border-gray-100 p-6 rounded-3xl sticky top-24 shadow-xs">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-50 pb-3">
            <h4 className="text-sm font-black text-brand-purple tracking-tight flex items-center gap-2">
              <SlidersHorizontal size={16} />
              Filter Products
            </h4>
            <button 
              onClick={handleResetFilters}
              className="text-[10px] font-black text-brand-purple/75 hover:text-brand-purple hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw size={10} />
              Reset All
            </button>
          </div>

          {/* Category List Filters */}
          <div className="flex flex-col gap-2.5">
            <h5 className="text-xs font-black text-brand-purple uppercase tracking-wider mb-1">
              Category
            </h5>
            <div className="flex flex-col gap-2">
              {categoriesList.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-left text-xs font-semibold py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-brand-purple text-brand-yellow font-bold shadow-xs'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-brand-purple'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-black text-brand-purple uppercase tracking-wider">
              Price Range
            </h5>
            <div className="flex flex-col gap-2">
              <input 
                type="range" 
                min="0" 
                max="15000" 
                step="500"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-purple cursor-pointer h-1 bg-gray-100 rounded-lg"
              />
              <div className="flex items-center justify-between text-xs font-bold text-brand-purple mt-1">
                <span>৳ {minPrice.toLocaleString()}</span>
                <span>৳ {maxPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </aside>

        {/* Mobile Filters Overlay (Collapsible) */}
        {showFiltersMobile && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowFiltersMobile(false)} />
            
            <div className="relative w-80 max-w-xs bg-white h-full p-6 flex flex-col gap-6 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-200">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h4 className="text-sm font-black text-brand-purple tracking-tight">Filters</h4>
                <button 
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-gray-400 hover:text-brand-purple"
                >
                  Reset All
                </button>
              </div>

              {/* Categories */}
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-black text-brand-purple uppercase tracking-wider mb-2">Category</h5>
                {categoriesList.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowFiltersMobile(false);
                    }}
                    className={`text-left text-xs font-semibold py-2 px-3 rounded-lg ${
                      selectedCategory === cat.id
                        ? 'bg-brand-purple text-brand-yellow font-bold shadow-xs'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-black text-brand-purple uppercase tracking-wider mb-2">Price Range</h5>
                <input 
                  type="range" 
                  min="0" 
                  max="15000" 
                  step="500"
                  value={maxPrice} 
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-brand-purple cursor-pointer"
                />
                <div className="flex items-center justify-between text-xs font-bold text-brand-purple">
                  <span>৳ {minPrice}</span>
                  <span>৳ {maxPrice}</span>
                </div>
              </div>

              <button 
                onClick={() => setShowFiltersMobile(false)}
                className="w-full bg-brand-purple text-brand-yellow py-3 rounded-xl text-xs font-bold mt-auto"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* 2. Products Grid */}
        <main className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-4">
              <div className="p-4 bg-gray-50 rounded-full text-gray-400">
                <Grid size={40} className="stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-black text-brand-purple tracking-tight">No Products Found</h3>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-semibold">
                We couldn't find any items matching your filters. Try resetting the options or adjusting your price slider.
              </p>
              <button 
                onClick={handleResetFilters}
                className="bg-brand-yellow text-brand-purple px-6 py-2.5 rounded-xl text-xs font-black hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
