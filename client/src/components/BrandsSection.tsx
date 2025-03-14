import { motion } from "framer-motion";
import { SiApple, SiSamsung, SiSony, SiLg, SiDell, SiAsus } from "react-icons/si";

const brands = [
  { name: "Apple", Icon: SiApple },
  { name: "Samsung", Icon: SiSamsung },
  { name: "Sony", Icon: SiSony },
  { name: "LG", Icon: SiLg },
  { name: "Dell", Icon: SiDell },
  { name: "Asus", Icon: SiAsus },
];

export function BrandsSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Top Brands</h2>
          <p className="text-muted-foreground mt-2">Shop from the world's leading tech brands</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <brand.Icon className="w-16 h-16 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
