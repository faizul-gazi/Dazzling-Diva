import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sadia Rahman",
      role: "Verified Buyer",
      comment: "Absolutely in love with the quality of the Abaya! Fabric feels so premium and lightweight. The stonework is flawless. Got delivery inside Dhaka within 24 hours!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Tanzila Islam",
      role: "Verified Buyer",
      comment: "Highly recommend their Three Piece collections! The salwar kameez semi-stitched set comes with gorgeous lace and embroidery material. Definitely worth the price.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Ayesha Siddiqua",
      role: "Verified Buyer",
      comment: "Ordered cotton hijabs, and they are incredibly soft and breathable. Non-slip texture is perfect for all-day use. Will buy more colors soon!",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef();

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    autoPlayRef.current = nextReview;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 6000); // Shift every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple tracking-tight">
          What Our Divas Say
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide uppercase mt-1">
          Real reviews from our beautiful community
        </p>
      </div>

      {/* Slider Core Container */}
      <div className="relative max-w-3xl mx-auto bg-white border border-gray-100 rounded-[32px] p-6 sm:p-10 shadow-xs flex items-center justify-center">
        
        {/* Decorative Quote Icon */}
        <Quote size={80} className="absolute -top-4 -left-4 text-brand-purple/5 rotate-180 z-0 pointer-events-none stroke-[1.5]" />
        
        {/* Navigation buttons */}
        <button
          onClick={prevReview}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 bg-white text-brand-purple border border-gray-100 p-2 sm:p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} className="stroke-[2.5]" />
        </button>
        <button
          onClick={nextReview}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 bg-white text-brand-purple border border-gray-100 p-2 sm:p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} className="stroke-[2.5]" />
        </button>

        {/* Content Wrapper */}
        <div className="w-full text-center flex flex-col items-center gap-5 z-10">
          {/* Avatar image */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-purple/20 shadow-xs">
            <img 
              src={reviews[activeIndex].avatar} 
              alt={reviews[activeIndex].name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={`${i < reviews[activeIndex].rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} 
              />
            ))}
          </div>

          {/* Review text */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-semibold max-w-xl italic">
            "{reviews[activeIndex].comment}"
          </p>

          {/* User Details */}
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-black text-brand-purple">
              {reviews[activeIndex].name}
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
              {reviews[activeIndex].role}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
