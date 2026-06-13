import { useState } from 'react';
import { Search, User, ShoppingBasket, Menu, X, Sparkles } from 'lucide-react';

export default function Header({ currentView = 'home', onSearch }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchVal);
      // Redirect to shop page
      window.location.hash = '#shop';
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const getLinkClass = (viewName) => {
    const isActive = currentView === viewName;
    return `relative py-1 cursor-pointer transition-all duration-300 font-bold ${
      isActive 
        ? 'text-brand-purple after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-purple' 
        : 'text-brand-purple/75 hover:text-brand-purple after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-purple hover:after:w-full'
    }`;
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100">
      {/* Top Announcement Bar */}
      <div className="w-full bg-brand-purple text-white py-2.5 px-4 text-[10px] sm:text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 flex-wrap transition-all duration-300">
        <span>Get</span>
        <span className="text-brand-yellow animate-pulse font-bold">30% OFF</span>
        <span>Your First Order</span>
        <span className="text-brand-yellow font-bold">30% OFF</span>
        <Sparkles size={12} className="text-brand-yellow mx-1 fill-brand-yellow" />
        <span>Order Now And Get A</span>
        <span className="text-brand-yellow font-bold">Free</span>
        <span>Delivery Inside Dhaka City.</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a 
            href="#home" 
            className="text-2xl md:text-3xl font-normal tracking-wide text-brand-purple font-aclonica hover:opacity-90 transition-opacity"
          >
            Dazzling Diva
          </a>
        </div>

        {/* Desktop Navigation Links & Buttons */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="#home" className={getLinkClass('home')}>
            Home
          </a>
          <a href="#shop" className={getLinkClass('shop')}>
            Shop
          </a>
          <a href="#three-piece" className={getLinkClass('three-piece')}>
            Three Piece
          </a>
          <a href="#two-piece" className={getLinkClass('two-piece')}>
            Two Piece
          </a>
          <a href="#hijab" className={getLinkClass('hijab')}>
            Hijab
          </a>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-2">
            <a 
              href="#shop" 
              className="bg-brand-purple text-brand-yellow px-5 py-2.5 rounded-xl text-xs font-black tracking-wide shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              New Arrivals
            </a>
            <a 
              href="#deals" 
              className="bg-brand-yellow text-brand-purple px-5 py-2.5 rounded-xl text-xs font-black tracking-wide shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              Deals & Offers
            </a>
          </div>
        </nav>

        {/* Desktop Utility Icons */}
        <div className="hidden lg:flex items-center gap-5 text-brand-purple">
          {/* Expandable Search Input Container */}
          <div className="flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 animate-in slide-in-from-right-4 duration-200">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="bg-transparent text-xs font-semibold w-40 focus:outline-none"
                  autoFocus
                />
                <button type="submit" className="p-0.5 text-brand-purple cursor-pointer">
                  <Search size={14} />
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-0.5 ml-1.5 text-gray-400 hover:text-red-500 cursor-pointer"
                >
                  <X size={14} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="p-1.5 hover:bg-gray-100 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Search size={22} className="stroke-[2.25]" />
              </button>
            )}
          </div>

          <button 
            aria-label="Account"
            className="p-1.5 hover:bg-gray-100 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <User size={22} className="stroke-[2.25]" />
          </button>
          
          <button 
            aria-label="Shopping Cart"
            className="p-1.5 hover:bg-gray-100 rounded-full relative hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ShoppingBasket size={22} className="stroke-[2.25]" />
            <span className="absolute -top-1 -right-1.5 bg-brand-yellow text-brand-purple text-[10px] font-black rounded-full h-4 min-w-4 px-1 flex items-center justify-center border border-white shadow-xs">
              01
            </span>
          </button>
        </div>

        {/* Mobile Menu Button & Icons (Cart, Search) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Quick Cart for Mobile */}
          <button 
            aria-label="Shopping Cart"
            className="p-1.5 text-brand-purple hover:bg-gray-100 rounded-full relative cursor-pointer"
          >
            <ShoppingBasket size={22} className="stroke-[2.25]" />
            <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-purple text-[9px] font-black rounded-full h-3.5 min-w-3.5 px-0.5 flex items-center justify-center border border-white">
              01
            </span>
          </button>

          {/* Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-brand-purple hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Collapsible) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            {/* Search Input for Mobile */}
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
              />
              <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
            </form>

            {/* Nav Links */}
            <nav className="flex flex-col gap-3 font-semibold text-brand-purple">
              <a 
                href="#home" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  currentView === 'home' ? 'bg-brand-purple text-brand-yellow font-black' : 'hover:bg-gray-50'
                }`}
              >
                Home
              </a>
              <a 
                href="#shop" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  currentView === 'shop' ? 'bg-brand-purple text-brand-yellow font-black' : 'hover:bg-gray-50'
                }`}
              >
                Shop
              </a>
              <a 
                href="#three-piece" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  currentView === 'three-piece' ? 'bg-brand-purple text-brand-yellow font-black' : 'hover:bg-gray-50'
                }`}
              >
                Three Piece
              </a>
              <a 
                href="#two-piece" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  currentView === 'two-piece' ? 'bg-brand-purple text-brand-yellow font-black' : 'hover:bg-gray-50'
                }`}
              >
                Two Piece
              </a>
              <a 
                href="#hijab" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  currentView === 'hijab' ? 'bg-brand-purple text-brand-yellow font-black' : 'hover:bg-gray-50'
                }`}
              >
                Hijab
              </a>
            </nav>

            <hr className="border-gray-100" />

            {/* Mobile Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#shop" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand-purple text-brand-yellow text-center py-3 rounded-xl font-bold tracking-wide shadow-xs active:scale-98 transition-all block"
              >
                New Arrivals
              </a>
              <a 
                href="#deals" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand-yellow text-brand-purple text-center py-3 rounded-xl font-bold tracking-wide shadow-xs active:scale-98 transition-all block"
              >
                Deals & Offers
              </a>
            </div>

            {/* User Account Link for Mobile */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 text-brand-purple font-semibold cursor-pointer">
              <User size={18} />
              <span>My Account</span>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
