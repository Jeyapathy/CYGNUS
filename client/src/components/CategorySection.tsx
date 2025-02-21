import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  name: string;
  icon: string;
  href: string;
}

const categories: Category[] = [
  { name: "All", icon: "🌟", href: "/" },
  { name: "Electronics", icon: "💻", href: "/category/electronics" },
  { name: "Laptops", icon: "💻", href: "/category/laptops" },
  { name: "Phones", icon: "📱", href: "/category/phones" },
  { name: "Accessories", icon: "🎧", href: "/category/accessories" },
  { name: "Headphones", icon: "🎧", href: "/category/headphones" },
  { name: "Gaming", icon: "🎮", href: "/category/gaming" },
  { name: "TV & Audio", icon: "📺", href: "/category/tv-audio" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function CategorySection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Browse Categories</h2>
            <p className="text-muted-foreground mt-2">Find what you're looking for</p>
          </div>
          <Link href="/categories">
            <span className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 cursor-pointer">
              View All →
            </span>
          </Link>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={item}>
              <Link href={category.href}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="font-medium">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
