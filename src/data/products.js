export const products = [
  {
    id: 1,
    title: "Elegant Orange Abaya with Delicate Lace & Stone Work",
    category: "abaya",
    price: 10680,
    discountPrice: 10000,
    image: "/category-card.png",
    rating: 4.8,
    reviewsCount: 24,
    sizes: ["S", "M", "L", "XL"],
    description: "Experience premium modest styling with our orange Abaya. Exquisitely detailed with intricate lace on the sleeves and fine stone embellishments on the front drape. Perfect for both special occasions and formal events.",
    features: ["Premium Georgette fabric", "Breathable and comfortable layout", "Lace and stone detailing", "Dry clean only"],
    inStock: true
  },
  {
    id: 2,
    title: "Luxurious Brown Georgette Straight Salwar Kameez",
    category: "three-piece",
    price: 9322,
    discountPrice: 8642,
    image: "/salwar-kameez.png",
    rating: 4.9,
    reviewsCount: 38,
    sizes: ["M", "L", "XL", "XXL"],
    description: "A gorgeous straight cut salwar kameez made from the finest georgette fabric. Designed with signature floral embroidery around the neckline, matching trousers, and a lightweight printed chiffon dupatta.",
    features: ["Pure Georgette Kamiz", "Semi-Stitched fabric set", "Includes Dupatta & Salwar material", "Delicate hand wash recommended"],
    inStock: true
  },
  {
    id: 3,
    title: "Chic Orange A-Line Tunic With Floral Shrug Set",
    category: "two-piece",
    price: 11200,
    discountPrice: 10000,
    image: "/orange-tunic.png",
    rating: 4.7,
    reviewsCount: 19,
    sizes: ["S", "M", "L"],
    description: "Revamp your wardrobe with this contemporary A-line tunic paired with an elegant floral print shrug. Offering versatility, comfort, and style, this set can be worn together or styled separately.",
    features: ["Soft linen blend tunic", "Sheer georgette outer shrug", "Comfort-fit A-Line silhouette", "Easy home wash"],
    inStock: true
  },
  {
    id: 4,
    title: "Ornate Turquoise Georgette Salwar Kameez",
    category: "three-piece",
    price: 9500,
    discountPrice: 8800,
    image: "/salwar-kameez.png",
    rating: 4.6,
    reviewsCount: 15,
    sizes: ["M", "L", "XL"],
    description: "Feel absolutely radiant in our turquoise semi-stitched salwar suit. Featuring heavy sequin work across the border and sleeves, combined with comfortable cotton-silk bottom wear.",
    features: ["Premium georgette fabric", "Intricate sequin work", "Contrasting dupatta design", "Ideal for wedding events"],
    inStock: true
  },
  {
    id: 5,
    title: "Crimson Silk Floral Two-Piece Set",
    category: "two-piece",
    price: 7800,
    discountPrice: 6999,
    image: "/orange-tunic.png",
    rating: 4.5,
    reviewsCount: 12,
    sizes: ["S", "M", "L", "XL"],
    description: "A vibrant crimson red two-piece set featuring digital floral printing on premium semi-silk fabric. This set comes with matching straight trousers for an effortless style statement.",
    features: ["Semi-silk premium fabric", "Vibrant digital print", "Breathable comfort lining", "Iron at low temperatures"],
    inStock: true
  },
  {
    id: 6,
    title: "Premium Soft Cotton Hijab - Pastel Pink",
    category: "hijab",
    price: 1500,
    discountPrice: 1200,
    image: "/category-card.png",
    rating: 4.9,
    reviewsCount: 56,
    sizes: ["Free Size"],
    description: "Crafted from extremely soft, lightweight, and non-slip cotton fabric. This pastel pink hijab provides all-day styling comfort, drape, and breathability for any headwear styles.",
    features: ["100% Breathable Cotton", "Size: 180cm x 75cm", "Non-slip texture", "Machine washable"],
    inStock: true
  },
  {
    id: 7,
    title: "Elegant Chiffon Georgette Hijab - Classic Black",
    category: "hijab",
    price: 1200,
    discountPrice: 950,
    image: "/category-card.png",
    rating: 4.8,
    reviewsCount: 42,
    sizes: ["Free Size"],
    description: "A wardrobe essential classic black hijab made of high-quality chiffon georgette. Offers beautiful flow, minimal transparency, and excellent wrinkle-resistance.",
    features: ["Chiffon Georgette fabric", "Wrinkle-resistant & travel-friendly", "Premium edge hem finish", "Size: 180cm x 70cm"],
    inStock: true
  },
  {
    id: 8,
    title: "Royal Emerald Green Silk Abaya",
    category: "abaya",
    price: 12500,
    discountPrice: 11500,
    image: "/category-card.png",
    rating: 5.0,
    reviewsCount: 10,
    sizes: ["S", "M", "L", "XL"],
    description: "Indulge in sheer luxury with this emerald green abaya tailored from rich premium silk. Adorned with hand-stitched bead embroidery along the cuffs and front borders.",
    features: ["Luxurious Premium Silk", "Handcrafted bead embroidery", "Comes with matching premium belt", "Dry clean only"],
    inStock: true
  }
];

export const getProductsByCategory = (category) => {
  if (!category || category === "all") return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = () => {
  // Return first 6 products as featured / new arrivals
  return products.slice(0, 6);
};
