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
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://placehold.co/300x300?text=Headphones",
    category: "Electronics",
    recommendations: [2, 3, 4]
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: 24.99,
    description: "Adjustable aluminum stand for smartphones and tablets",
    image: "https://placehold.co/300x300?text=Stand",
    category: "Accessories",
    recommendations: [1, 3, 5]
  },
  {
    id: 3,
    name: "Wireless Charging Pad",
    price: 39.99,
    description: "Fast wireless charging pad compatible with all devices",
    image: "https://placehold.co/300x300?text=Charger",
    category: "Electronics",
    recommendations: [1, 2, 4]
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable bluetooth speaker with deep bass",
    image: "https://placehold.co/300x300?text=Speaker",
    category: "Electronics",
    recommendations: [1, 3, 5]
  },
  {
    id: 5,
    name: "Phone Case",
    price: 19.99,
    description: "Durable protective case with sleek design",
    image: "https://placehold.co/300x300?text=Case",
    category: "Accessories",
    recommendations: [2, 3, 4]
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
