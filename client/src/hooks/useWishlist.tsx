
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
import { create } from 'zustand';
import { Product } from '@/data/products';

interface WishlistStore {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

export const useWishlist = create<WishlistStore>((set, get) => ({
  items: [],
  addToWishlist: (product) => {
    set((state) => ({
      items: [...state.items, product],
    }));
  },
  removeFromWishlist: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },
  isInWishlist: (productId) => {
    return get().items.some((item) => item.id === productId);
  },
}));
