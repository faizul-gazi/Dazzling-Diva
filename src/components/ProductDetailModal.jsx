import { useState } from 'react';
import { X, Star, ShoppingBasket, Plus, Minus, CheckCircle, Sparkles } from 'lucide-react';

export default function ProductDetailModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) return null;

  const hasDiscount = product.price > product.discountPrice;
  const discountPercent = hasDiscount 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100) 
    : 0;

  const formatPrice = (amount) => {
    return `৳ ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/65 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-brand-purple p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-150 z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} className="stroke-[2.5]" />
        </button>

        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 relative bg-gray-50 h-64 md:h-auto overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover object-top"
          />
          {hasDiscount && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Right Side: Product Form Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto max-h-[calc(90vh-16rem)] md:max-h-none">
          {/* Tag & Rating */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="bg-brand-purple/10 text-brand-purple text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-700">{product.rating}</span>
              <span className="text-xs text-gray-400 font-medium">({product.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-black text-brand-purple tracking-tight leading-snug mb-3">
            {product.title}
          </h3>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-black text-brand-purple tracking-tight">
              {formatPrice(product.discountPrice * quantity)}
            </span>
            {hasDiscount && (
              <span className="text-sm font-medium text-gray-400 line-through">
                {formatPrice(product.price * quantity)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-medium">
            {product.description}
          </p>

          {/* Bullet Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-6 flex flex-col gap-2 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <h5 className="text-[11px] font-black uppercase tracking-wider text-brand-purple mb-1 flex items-center gap-1.5">
                <Sparkles size={12} className="fill-brand-purple text-brand-purple" />
                Key Product Highlights
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 font-semibold">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Size Picker */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-5">
              <h5 className="text-xs font-extrabold text-brand-purple tracking-tight mb-2.5">
                Select Size:
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-10 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center ${
                      selectedSize === size
                        ? 'bg-brand-purple text-brand-yellow border-brand-purple shadow-sm scale-102'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <h5 className="text-xs font-extrabold text-brand-purple tracking-tight mb-2.5">
              Quantity:
            </h5>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-xl bg-white p-1">
                <button
                  onClick={decrementQty}
                  className="p-2 text-gray-500 hover:text-brand-purple hover:bg-gray-50 rounded-lg active:scale-95 transition-all cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} className="stroke-[2.5]" />
                </button>
                <span className="w-10 text-center text-sm font-black text-brand-purple">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={incrementQty}
                  className="p-2 text-gray-500 hover:text-brand-purple hover:bg-gray-50 rounded-lg active:scale-95 transition-all cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} className="stroke-[2.5]" />
                </button>
              </div>
              <span className="text-[11px] text-gray-400 font-semibold">
                Available In Stock
              </span>
            </div>
          </div>

          {/* Add & Buy Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-100">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer ${
                addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-brand-purple text-brand-yellow hover:bg-brand-purple/95 hover:shadow-md'
              }`}
            >
              <ShoppingBasket size={16} className="stroke-[2.5]" />
              <span>{addedToCart ? 'Added to Cart!' : 'Add to Cart'}</span>
            </button>
            <button
              className="w-full bg-brand-yellow text-brand-purple hover:bg-brand-purple hover:text-brand-yellow py-3.5 rounded-xl text-xs font-black tracking-wide shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
