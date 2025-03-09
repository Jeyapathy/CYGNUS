import { useParams } from "wouter";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartProvider";
import { ShoppingCart } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const recommendations = products.filter(p => 
    product.recommendations.includes(p.id)
  );

  const formatPrice = (price: number): string => {
    return `₹${(price).toFixed(2)}`;
  };

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">{formatPrice(product.price)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <Button size="lg" onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                showRecommendations={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
