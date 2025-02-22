
import { useState } from "react";
import { Heart } from "react-feather";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ProductCard } from "./ProductCard";
import { useWishlist } from "@/hooks/useWishlist";

export function WishlistDrawer() {
  const { wishlist } = useWishlist();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Heart className="h-6 w-6 hover:text-purple-600 transition-colors" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Wishlist</SheetTitle>
        </SheetHeader>
        <div className="mt-8 grid gap-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} showRecommendations={false} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
