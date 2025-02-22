import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useWishlist } from "@/components/WishlistProvider";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  showRecommendations?: boolean;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <div className="cursor-pointer">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <p className="mt-2 font-bold">{formatPrice(product.price)}</p>
            </CardContent>
          </div>
        </Link>
        <CardFooter className="p-4">
          <div className="flex gap-2">
            <Button onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }} className="flex-1">
              Add to Cart
            </Button>
            <Button
              variant={inWishlist ? "destructive" : "outline"}
              size="icon"
              onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
            >
              <Heart className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </CardFooter>
      </Card>

      
    </div>
  );
}