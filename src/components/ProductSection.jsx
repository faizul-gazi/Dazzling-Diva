import { getFeaturedProducts } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductSection({ onQuickView }) {
  const newArrivals = getFeaturedProducts();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10 font-sans">
      {/* New Arrivals Section Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple tracking-tight">
          New Arrivals
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide uppercase mt-1">
          Explore our latest collection of premium fashion
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {newArrivals.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
}
