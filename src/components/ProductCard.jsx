import { ShoppingBasket, Eye, Star } from 'lucide-react';

export default function ProductCard({ product, onQuickView }) {
  const hasDiscount = product.price > product.discountPrice;
  const discountPercent = hasDiscount 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100) 
    : 0;

  // Format currency in BDT
  const formatPrice = (amount) => {
    return `৳ ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 group">
      {/* Product Image Wrapper */}
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {hasDiscount && (
            <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Save {discountPercent}%
            </span>
          )}
          {product.category === 'abaya' && (
            <span className="bg-brand-purple text-brand-yellow text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Premium
            </span>
          )}
        </div>

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-white text-brand-purple p-3 rounded-full shadow-md hover:bg-brand-yellow hover:text-brand-purple hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            title="Quick View"
          >
            <Eye size={18} className="stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col gap-2.5">
        {/* Category & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-black text-gray-700">{product.rating}</span>
            <span className="text-[10px] text-gray-400 font-medium">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h4 
          onClick={() => onQuickView(product)}
          className="text-xs sm:text-sm font-extrabold text-brand-purple tracking-tight leading-snug line-clamp-2 hover:text-brand-purple/80 cursor-pointer transition-colors flex-grow"
        >
          {product.title}
        </h4>

        {/* Price display */}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-sm sm:text-base font-black text-brand-purple tracking-tight">
            {formatPrice(product.discountPrice)}
          </span>
          {hasDiscount && (
            <span className="text-[11px] font-medium text-gray-400 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-gray-50">
          <button 
            className="bg-brand-purple/5 text-brand-purple hover:bg-brand-purple hover:text-brand-yellow px-2 py-2.5 rounded-xl text-[10px] sm:text-xs font-extrabold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
            aria-label="Add to Cart"
          >
            <ShoppingBasket size={14} className="stroke-[2.5]" />
            <span>Add to Cart</span>
          </button>
          <button 
            className="bg-brand-yellow text-brand-purple hover:bg-brand-purple hover:text-brand-yellow px-2 py-2.5 rounded-xl text-[10px] sm:text-xs font-black tracking-wide text-center transition-all duration-200 cursor-pointer"
            aria-label="Buy Now"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
