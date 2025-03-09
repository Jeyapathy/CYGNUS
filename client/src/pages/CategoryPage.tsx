import { useParams } from "wouter";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = decodeURIComponent(category || "");
  
  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container py-12"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold capitalize">{decodedCategory}</h1>
        <p className="text-muted-foreground mt-2">
          Showing {categoryProducts.length} products in {decodedCategory}
        </p>
      </div>
      <ProductGrid products={categoryProducts} />
    </motion.div>
  );
}