export default function CategoryGrid() {
  const categories = [
    {
      id: 'three-piece',
      name: "Three Piece",
      count: "4 Items",
      image: "/salwar-kameez.png",
      hash: "#three-piece"
    },
    {
      id: 'two-piece',
      name: "Two Piece",
      count: "2 Items",
      image: "/orange-tunic.png",
      hash: "#two-piece"
    },
    {
      id: 'hijab',
      name: "Hijab",
      count: "2 Items",
      image: "/category-card.png",
      hash: "#hijab"
    },
    {
      id: 'abaya',
      name: "Abaya & Tunic",
      count: "2 Items",
      image: "/category-card.png",
      hash: "#shop" // Redirects to shop or we can filter by abaya
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple tracking-tight">
          Shop By Category
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide uppercase mt-1">
          Explore our tailored luxury collections
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => (
          <a 
            key={cat.id} 
            href={cat.hash}
            className="group flex flex-col items-center text-center bg-white p-5 rounded-3xl border border-gray-100 hover:border-brand-purple/20 shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            {/* Round Category Image */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-brand-purple/20 transition-all duration-300 shadow-inner bg-gray-100 mb-4">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Category Meta */}
            <h4 className="text-xs sm:text-sm font-black text-brand-purple tracking-tight mb-1 group-hover:text-brand-purple/80">
              {cat.name}
            </h4>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              {cat.count}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
