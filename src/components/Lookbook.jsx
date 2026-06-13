import { useState } from 'react';
import { Sparkles, Copy, Check, ShoppingBag } from 'lucide-react';

export default function Lookbook() {
  const [copied, setCopied] = useState(false);
  const promoCode = "DIVA30";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-brand-purple to-[#5C1352] text-white shadow-xl flex flex-col md:flex-row items-center justify-between border border-brand-purple/20">
        
        {/* Background elements */}
        <div className="absolute top-[-20%] left-[-10%] w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-8 sm:p-12 md:p-16 flex flex-col items-start gap-4 sm:gap-6 z-10">
          <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-purple text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase">
            <Sparkles size={12} className="fill-brand-purple" />
            Limited Time Offer
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Style Beyond Comfort.<br />
            Define Your Vibe.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-semibold max-w-md">
            Unleash your luxury with Dazzling Diva. Order now and get an exclusive 30% discount on your first order, plus free delivery inside Dhaka City!
          </p>

          {/* Coupon Code Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full max-w-sm mt-2">
            <div className="flex items-center justify-between w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl p-1.5 px-4 font-mono font-bold tracking-wider text-sm flex-grow">
              <span className="text-brand-yellow uppercase">{promoCode}</span>
              <button 
                onClick={handleCopyCode}
                className="ml-4 p-1.5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-all active:scale-95 cursor-pointer"
                title="Copy Promo Code"
              >
                {copied ? <Check size={16} className="text-brand-yellow animate-scale" /> : <Copy size={16} />}
              </button>
            </div>
            
            <a 
              href="#shop"
              className="w-full sm:w-auto bg-brand-yellow text-brand-purple hover:bg-white px-6 py-3 rounded-xl text-xs font-black tracking-wide flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <ShoppingBag size={14} className="stroke-[2.5]" />
              <span>Shop Collection</span>
            </a>
          </div>
        </div>

        {/* Visual Side */}
        <div className="w-full md:w-2/5 relative h-64 sm:h-80 md:h-[450px] overflow-hidden self-stretch flex items-center justify-center">
          {/* We reuse public/category-card.png but zoom/position it nicely */}
          <img 
            src="/category-card.png" 
            alt="Promo Lookbook" 
            className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-purple/70 md:from-brand-purple/50 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
