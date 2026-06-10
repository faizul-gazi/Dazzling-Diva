import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      {/* Header component */}
      <Header />

      {/* Hero / Page Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 max-w-5xl mx-auto text-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/5 text-brand-purple rounded-full text-xs font-semibold tracking-wide border border-brand-purple/10">
          ✨ Welcome to the New Dazzling Diva Storefront
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-purple leading-tight">
          Redefining Elegance for the <span className="underline decoration-brand-yellow decoration-wavy underline-offset-8">Modern Diva</span>
        </h1>
        <p className="text-gray-600 max-w-xl text-base md:text-lg leading-relaxed font-medium">
          Discover our exclusive collections of Three Piece sets, Two Piece sets, and premium Hijabs designed with premium fabrics and impeccable craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#shop"
            className="w-full sm:w-auto px-8 py-3 bg-brand-purple text-brand-yellow font-extrabold rounded-lg shadow-md hover:bg-brand-purple/95 active:scale-98 transition-all"
          >
            Explore Collections
          </a>
          <a
            href="#deals"
            className="w-full sm:w-auto px-8 py-3 bg-white text-brand-purple border border-gray-200 font-extrabold rounded-lg shadow-xs hover:bg-gray-50 active:scale-98 transition-all"
          >
            Deals & Offers
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
