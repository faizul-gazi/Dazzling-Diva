import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-900">
      {/* Header section */}
      <Header />

      {/* Hero slider section */}
      <Hero />

      {/* Products Display Section (New Arrivals & Three Piece) */}
      <main className="flex-grow">
        <ProductSection />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
