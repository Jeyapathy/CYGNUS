import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import { Product, products } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  showRecommendations?: boolean;
}

export function ProductCard({ product, showRecommendations = true }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const recommendations = products.filter(p => 
    product.recommendations.includes(p.id)
  );

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <a className="block">
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
              <p className="mt-2 font-bold">${product.price}</p>
            </CardContent>
          </a>
        </Link>
        <CardFooter className="p-4">
          <Button
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>

      {showRecommendations && isHovered && recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-full top-0 ml-4 z-10 w-64 bg-background shadow-lg rounded-lg p-4"
        >
          <h4 className="font-semibold mb-3">Recommended with this:</h4>
          <div className="space-y-3">
            {recommendations.map((rec) => (
              <Link key={rec.id} href={`/product/${rec.id}`}>
                <a className="flex items-center gap-3 hover:bg-accent p-2 rounded-lg">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{rec.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${rec.price}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
