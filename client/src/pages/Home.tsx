import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
