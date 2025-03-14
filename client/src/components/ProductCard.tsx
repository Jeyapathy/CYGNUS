import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "./CartProvider";
import { Product, products } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DEFAULT_PRODUCT_IMAGE } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showRecommendations?: boolean;
}

const formatPrice = (price: number): string => {
  return `₹${(price / 100).toFixed(2)}`; // Assuming prices are in paise
};

export function ProductCard({ product, showRecommendations = true }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const [inWishlist, setInWishlist] = useState(false); // Added wishlist state

  const addToWishlist = (product:Product) => {
    //Implementation for adding to wishlist.  Replace with actual logic.
    setInWishlist(true);
    console.log("Added to wishlist:", product);
  };

  const removeFromWishlist = (productId: number) => {
    //Implementation for removing from wishlist. Replace with actual logic.
    setInWishlist(false);
    console.log("Removed from wishlist:", productId);
  };


  const recommendations = products.filter(p =>
    product.recommendations.includes(p.id)
  );

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden">
          <Link href={`/product/${product.id}`}>
            <div className="cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={imageError ? DEFAULT_PRODUCT_IMAGE : product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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
            <motion.div whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>

      <AnimatePresence>
        {showRecommendations && isHovered && recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 ml-4 z-10 w-64 bg-background/95 backdrop-blur-sm shadow-lg rounded-lg p-4"
          >
            <h4 className="font-semibold mb-3">Recommended with this:</h4>
            <div className="space-y-3">
              {recommendations.map((rec) => (
                <Link key={rec.id} href={`/product/${rec.id}`}>
                  <motion.div
                    className="flex items-center gap-3 hover:bg-accent p-2 rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{rec.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(rec.price)}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}