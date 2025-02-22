export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  recommendations: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 24899,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    recommendations: [2, 3, 4]
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 16599,
    description: "Advanced smartwatch with health monitoring features",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    recommendations: [1, 3, 5]
  },
  {
    id: 3,
    name: "Gaming Laptop Pro",
    price: 86639,
    description: "Powerful gaming laptop with RTX graphics",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
    category: "Laptops",
    recommendations: [1, 2, 4]
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    price: 10789,
    description: "High-precision wireless gaming mouse",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60",
    category: "Gaming",
    recommendations: [1, 3, 5]
  },
  {
    id: 5,
    name: "4K Smart TV",
    price: 54999,
    description: "65-inch 4K Smart TV with HDR",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60",
    category: "TV & Audio",
    recommendations: [2, 3, 4]
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));