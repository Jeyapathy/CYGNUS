import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
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
            Experience the Future of{" "}
            <span className="text-purple-600 dark:text-purple-400">Electronics</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Discover cutting-edge technology and premium electronic appliances that
            transform your lifestyle. Shop the latest innovations with Cygnus.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="group">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://placehold.co/800x600/purple/white?text=Smart+TV"
            alt="Smart TV Display"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
