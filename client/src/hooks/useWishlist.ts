
import { useState } from 'react';
import { Product } from '@/data/products';

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist(prev => [...prev, product]);
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prev => prev.filter(p => p.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some(p => p.id === productId);
  };

  return { addToWishlist, removeFromWishlist, isInWishlist };
}
