import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import Lookbook from './components/Lookbook';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import ShopView from './components/ShopView';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';

function App() {
  const [view, setView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Hash-based navigation router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#shop') setView('shop');
      else if (hash === '#three-piece') setView('three-piece');
      else if (hash === '#two-piece') setView('two-piece');
      else if (hash === '#hijab') setView('hijab');
      else if (hash === '#deals') setView('deals');
      else {
        setView('home');
        // Reset search query when coming back to home
        setSearchQuery('');
      }
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial call to set active view based on load hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-900">
      {/* Header section */}
      <Header currentView={view} onSearch={handleSearch} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            {/* Hero slider section */}
            <Hero />

            {/* Shop by Category Quick Grid */}
            <CategoryGrid />

            {/* New Arrivals Section */}
            <ProductSection onQuickView={handleQuickView} />

            {/* Aesthetic Lookbook Banner */}
            <Lookbook />

            {/* Customer reviews slider */}
            <Testimonials />

            {/* Trust highlights */}
            <TrustBadges />
          </>
        ) : (
          /* Catalog / Shop view for all search, categorization and filtering */
          <ShopView 
            key={`${view}-${searchQuery}`}
            categoryFilter={view === 'shop' || view === 'deals' ? 'all' : view} 
            searchQuery={searchQuery}
            onQuickView={handleQuickView}
          />
        )}
      </main>

      {/* Footer section */}
      <Footer />

      {/* Quick View Details Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
