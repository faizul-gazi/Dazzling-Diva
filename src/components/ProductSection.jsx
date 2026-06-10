import React from 'react';
import { ShoppingBasket } from 'lucide-react';

export default function ProductSection() {
  const newArrivals = [
    {
      id: 1,
      title: "Orange Color Abaya With Lace & Stone Work",
      image: "/category-card.png",
      price: "৳ 10,000.00",
    },
    {
      id: 2,
      title: "Brown Georgette Straight Salwar Kameez",
      image: "/salwar-kameez.png",
      price: "৳ 8,642.00",
    },
    {
      id: 3,
      title: "Orange A-Line Tunic With Shrug",
      image: "/orange-tunic.png",
      price: "৳ 10,000.00",
    }
  ];

  const threePieces = Array(4).fill({
    title: "Orange Color Abaya With Lace & Stone Work",
    image: "/category-card.png",
    priceRange: "৳ 8,642.00  -  ৳ 8,642.00",
    saveAmount: "Save: ৳ 680.00"
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 font-sans">
      
      {/* 1. New Arrivals Section */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple tracking-tight">
            New Arrivals
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-semibold tracking-wide uppercase mt-2">
            Just In Great Product With Great Deal
          </p>
        </div>

        {/* New Arrivals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <div key={product.id} className="flex flex-col gap-4 group">
              {/* Product Image Wrapper */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] border border-gray-100 shadow-sm bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                />
                {/* New Arrival Badge */}
                <span className="absolute top-4 left-4 bg-brand-yellow text-brand-purple text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
                  New Arrival
                </span>
                {/* Price Tag Overlay */}
                <span className="absolute bottom-4 right-4 bg-white text-brand-purple text-xs font-black px-3.5 py-2 rounded-md shadow-xs border border-gray-100">
                  {product.price}
                </span>
              </div>
              
              {/* Product Title */}
              <h4 className="text-sm md:text-base font-extrabold text-brand-purple tracking-tight leading-snug">
                {product.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Three Piece Section */}
      <div>
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-8">
          <h3 className="text-xl md:text-2xl font-black text-brand-purple tracking-tight">
            Three Piece
          </h3>
          <a 
            href="#three-piece-all" 
            className="bg-brand-yellow text-brand-purple px-5 py-2 rounded-lg text-xs md:text-sm font-black tracking-wide shadow-xs hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Explore More
          </a>
        </div>

        {/* Three Piece Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {threePieces.map((product, index) => (
            <div key={index} className="flex flex-col gap-3 group">
              {/* Product Image Wrapper */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] border border-gray-100 shadow-xs bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                />
                {/* Save Amount Badge */}
                <span className="absolute top-4 left-4 bg-brand-yellow text-brand-purple text-[10px] font-black px-3 py-1.5 rounded-full shadow-xs">
                  {product.saveAmount}
                </span>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-1">
                <h4 className="text-xs md:text-sm font-extrabold text-brand-purple tracking-tight leading-snug">
                  {product.title}
                </h4>
                <div className="text-xs md:text-sm font-black text-brand-purple tracking-tight mt-0.5">
                  {product.priceRange}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className="bg-brand-purple text-brand-yellow px-3 py-2.5 rounded-lg text-[10px] md:text-xs font-black tracking-wide flex items-center justify-center gap-1.5 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  aria-label="Add to Cart"
                >
                  <ShoppingBasket size={14} className="stroke-[2.5]" />
                  <span>Add to Cart</span>
                </button>
                <button 
                  className="bg-brand-yellow text-brand-purple px-3 py-2.5 rounded-lg text-[10px] md:text-xs font-black tracking-wide text-center shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  aria-label="Buy Now"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 3. Two Piece Section */}
      <div>
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-8">
          <h3 className="text-xl md:text-2xl font-black text-brand-purple tracking-tight">
            Two Piece
          </h3>
          <a 
            href="#two-piece-all" 
            className="bg-brand-yellow text-brand-purple px-5 py-2 rounded-lg text-xs md:text-sm font-black tracking-wide shadow-xs hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Explore More
          </a>
        </div>

        {/* Two Piece Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {threePieces.map((product, index) => (
            <div key={index} className="flex flex-col gap-3 group">
              {/* Product Image Wrapper */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] border border-gray-100 shadow-xs bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                />
                {/* Save Amount Badge */}
                <span className="absolute top-4 left-4 bg-brand-yellow text-brand-purple text-[10px] font-black px-3 py-1.5 rounded-full shadow-xs">
                  {product.saveAmount}
                </span>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-1">
                <h4 className="text-xs md:text-sm font-extrabold text-brand-purple tracking-tight leading-snug">
                  {product.title}
                </h4>
                <div className="text-xs md:text-sm font-black text-brand-purple tracking-tight mt-0.5">
                  {product.priceRange}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className="bg-brand-purple text-brand-yellow px-3 py-2.5 rounded-lg text-[10px] md:text-xs font-black tracking-wide flex items-center justify-center gap-1.5 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  aria-label="Add to Cart"
                >
                  <ShoppingBasket size={14} className="stroke-[2.5]" />
                  <span>Add to Cart</span>
                </button>
                <button 
                  className="bg-brand-yellow text-brand-purple px-3 py-2.5 rounded-lg text-[10px] md:text-xs font-black tracking-wide text-center shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  aria-label="Buy Now"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
