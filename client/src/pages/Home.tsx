import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { BrandsSection } from "@/components/BrandsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <section className="py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Handpicked deals just for you</p>
            </div>
            <span className="text-purple-600 hover:text-purple-700 cursor-pointer">
              View All →
            </span>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
      <BrandsSection />
    </div>
  );
}