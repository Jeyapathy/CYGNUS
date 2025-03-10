export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  recommendations: number[];
}

export const categories = [
  "Audio",
  "Wearables",
  "Laptops",
  "Smartphones",
  "Gaming",
  "TV & Audio",
  "Smart Home",
  "Electronics"
];

export const products: Product[] = [
  // Audio Category
  {
    id: 33,
    name: "Professional Studio Microphone",
    price: 19999,
    description: "High-fidelity condenser microphone for professional recording",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format&fit=crop&q=60",
    category: "Audio",
    recommendations: [34, 35, 36]
  },
  {
    id: 34,
    name: "DJ Controller",
    price: 34999,
    description: "Professional DJ controller with built-in audio interface",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=500&auto=format&fit=crop&q=60",
    category: "Audio",
    recommendations: [33, 35, 37]
  },

  // Laptops Category
  {
    id: 35,
    name: "Business Laptop Pro",
    price: 89999,
    description: "Lightweight business laptop with 15-inch display",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60",
    category: "Laptops",
    recommendations: [36, 37, 38]
  },
  {
    id: 36,
    name: "Gaming Laptop Elite",
    price: 149999,
    description: "High-performance gaming laptop with RTX 4080",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
    category: "Laptops",
    recommendations: [35, 37, 39]
  },

  // Smart Home Category
  {
    id: 37,
    name: "Smart Doorbell Pro",
    price: 15999,
    description: "HD video doorbell with two-way audio and night vision",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60",
    category: "Smart Home",
    recommendations: [38, 39, 40]
  },
  {
    id: 38,
    name: "Smart Light Strip",
    price: 4999,
    description: "RGB smart LED strip with music sync capability",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60",
    category: "Smart Home",
    recommendations: [37, 39, 41]
  },

  // TV & Audio Category
  {
    id: 39,
    name: "8K Smart TV",
    price: 299999,
    description: "85-inch 8K QLED TV with AI upscaling",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60",
    category: "TV & Audio",
    recommendations: [40, 41, 42]
  },
  {
    id: 40,
    name: "Soundbar Elite",
    price: 49999,
    description: "Dolby Atmos soundbar with wireless subwoofer",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60",
    category: "TV & Audio",
    recommendations: [39, 41, 43]
  },

  // Smartphones Category
  {
    id: 41,
    name: "Pro Smartphone Max",
    price: 129999,
    description: "Premium flagship smartphone with 8K video recording",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
    category: "Smartphones",
    recommendations: [42, 43, 44]
  },
  {
    id: 42,
    name: "Compact Smartphone",
    price: 69999,
    description: "Compact flagship with powerful camera system",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=60",
    category: "Smartphones",
    recommendations: [41, 43, 45]
  },

  // Wearables Category
  {
    id: 43,
    name: "Fitness Tracker Pro",
    price: 8999,
    description: "Advanced fitness tracker with ECG monitoring",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60",
    category: "Wearables",
    recommendations: [44, 45, 46]
  },
  {
    id: 44,
    name: "Smart Ring",
    price: 29999,
    description: "Health monitoring smart ring with sleep tracking",
    image: "https://images.unsplash.com/photo-1651752090085-50375d90bf8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Wearables",
    recommendations: [43, 45, 47]
  },

  // Gaming Category
  {
    id: 45,
    name: "Gaming Headset Elite",
    price: 19999,
    description: "Professional gaming headset with 7.1 surround sound",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop&q=60",
    category: "Gaming",
    recommendations: [46, 47, 48]
  },
  {
    id: 46,
    name: "Gaming Monitor 240Hz",
    price: 54999,
    description: "27-inch gaming monitor with 240Hz refresh rate",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    category: "Gaming",
    recommendations: [45, 47, 49]
  },

  // Electronics Category
  {
    id: 47,
    name: "Wireless Power Bank",
    price: 5999,
    description: "20000mAh wireless charging power bank with fast charging",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    recommendations: [48, 49, 50]
  },
  {
    id: 48,
    name: "Smart Desk Lamp",
    price: 3999,
    description: "Adjustable LED desk lamp with wireless charging base",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    recommendations: [47, 49, 50]
  },

  // Smart Home Category
  {
    id: 49,
    name: "Smart Security Camera",
    price: 12999,
    description: "1080p wireless security camera with night vision",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format&fit=crop&q=60",
    category: "Smart Home",
    recommendations: [37, 38, 50]
  },
  {
    id: 50,
    name: "Smart Thermostat",
    price: 9999,
    description: "Wi-Fi enabled smart thermostat with energy saving features",
    image: "https://images.unsplash.com/photo-1567925086590-62ff566e841b?w=500&auto=format&fit=crop&q=60",
    category: "Smart Home",
    recommendations: [37, 38, 49]
  },
  {
    id: 51,
    name: "Pioneer DDJ-400 DJ Controller",
    price: 24999,
    description: "Professional 2-channel DJ controller for rekordbox dj with dynamic performance features",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=500&auto=format&fit=crop&q=60",
    category: "Audio",
    recommendations: [33, 34, 40]
  },
]; 

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];

  // Score-based search results
  return products
    .map(product => {
      let score = 0;
      
      // Exact name match gets highest score
      if (product.name.toLowerCase() === searchTerm) score += 10;
      // Partial name match
      else if (product.name.toLowerCase().includes(searchTerm)) score += 5;
      // Category match
      if (product.category.toLowerCase().includes(searchTerm)) score += 4;
      // Description match
      if (product.description.toLowerCase().includes(searchTerm)) score += 3;
      
      return { product, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
};

// Enhanced recommendation system
export const getRecommendedProducts = (product: Product, limit: number = 4): Product[] => {
  if (!product) return [];

  const recommendations = products
    .map(p => {
      let score = 0;
      
      // Same category products
      if (p.category === product.category) score += 5;
      // Explicitly recommended products
      if (product.recommendations.includes(p.id)) score += 10;
      // Similar price range (within 20% difference)
      const priceDiff = Math.abs(p.price - product.price) / product.price;
      if (priceDiff <= 0.2) score += 3;
      
      return { product: p, score };
    })
    .filter(item => item.product.id !== product.id && item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product)
    .slice(0, limit);

  return recommendations;
};

// Fallback image URL
export const DEFAULT_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60";

export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];

  return products
    .filter(p => 
      p.id !== productId && 
      (p.category === product.category || 
       product.recommendations.includes(p.id))
    )
    .slice(0, limit);
};