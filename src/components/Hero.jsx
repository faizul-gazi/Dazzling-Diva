import { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "/hero-banner.png",
      title: "Where Comfort And Style Hang Out",
      subtitle: "Cool Drapes And Unique Prints That Make You Feel At Home Forever.",
      buttonText: "Explore Collections",
      buttonLink: "#shop",
      isSpecial: true
    },
    {
      id: 2,
      image: "/hero-slide-2.png",
      title: "Chic & Minimalist Collection",
      subtitle: "Experience the ultimate comfort and timeless designs tailored for you.",
      buttonText: "Explore Collections",
      buttonLink: "#shop",
      isSpecial: true
    },
    {
      id: 3,
      image: "/hero-slide-3.png",
      title: "Dazzling Deals & Offers",
      subtitle: "Get up to 30% off on your first order inside Dhaka City.",
      buttonText: "Deals & Offers",
      buttonLink: "#deals",
      isSpecial: false
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 font-sans">
      <div 
        className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg aspect-[16/10] sm:aspect-[1.8/1] md:aspect-[2.1/1] lg:aspect-[2.4/1] bg-gray-900 group"
      >
        {/* Slides Container */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === currentSlide 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-[1.03] pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/45 md:bg-black/40 flex flex-col items-center justify-center p-6 md:p-12 text-center text-white">
              
              {/* Main Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-2 md:mb-4 leading-none drop-shadow-md transition-all duration-700 delay-300 lg:whitespace-nowrap">
                {slide.title}
              </h2>
              
              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-medium mb-6 md:mb-8 max-w-lg md:max-w-xl leading-relaxed drop-shadow-sm transition-all duration-700 delay-500">
                {slide.subtitle}
              </p>
              
              {/* Explore Button */}
              <a 
                href={slide.buttonLink}
                className="inline-flex items-center gap-2 bg-brand-yellow text-brand-purple px-6 py-3 md:px-8 md:py-3.5 rounded-lg text-xs md:text-sm font-black tracking-wide shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                {slide.isSpecial && <Sparkles size={16} className="fill-brand-purple text-brand-purple" />}
                <span>{slide.buttonText}</span>
              </a>

            </div>
          </div>
        ))}

        {/* Navigation Arrow buttons (Visible on hover on desktop) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/35 text-white p-2 rounded-full cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="stroke-[2.5]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/35 text-white p-2 rounded-full cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="stroke-[2.5]" />
        </button>

        {/* Carousel Pagination Indicators (Dots) */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                index === currentSlide 
                  ? "w-8 bg-brand-yellow" 
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
