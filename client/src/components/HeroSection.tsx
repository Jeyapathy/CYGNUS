import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-900/20">
      <div className="container flex flex-col-reverse md:flex-row items-center py-16 md:py-24 gap-8">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Shop the latest tech gadgets and accessories
          </p>
          <Button size="lg" onClick={() => setLocation("/products")}>
            Shop Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60"
            alt="Premium Electronics Display"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}