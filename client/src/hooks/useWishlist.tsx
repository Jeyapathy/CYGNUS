
import { create } from 'zustand';
import { Product } from '@/data/products';

interface WishlistStore {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlist = create<WishlistStore>((set, get) => ({
  wishlist: [],
  addToWishlist: (product) => {
    set((state) => ({
      wishlist: [...state.wishlist, product],
    }));
  },
  removeFromWishlist: (productId) => {
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    }));
  },
  isInWishlist: (productId) => {
    return get().wishlist.some((item) => item.id === productId);
  },
}));
