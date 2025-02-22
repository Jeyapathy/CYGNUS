import { useState } from "react";
import { Link } from "wouter";
import { useEffect } from "react";
import gsap from "gsap";
import { SearchBar } from "./SearchBar";
import { CartDropdown } from "./CartDropdown";
import { Button } from "./ui/button";
import { categories } from "@/data/products";
import { AuthDialog } from "./AuthDialog";
import { Heart } from "react-feather"; // Assuming you have react-feather installed

export function Navbar() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    const logo = document.querySelector(".cygnus-logo");

    const handleMouseEnter = () => {
      gsap.to(logo, { 
        scale: 1.2,
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logo, { 
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    };

    logo?.addEventListener("mouseenter", handleMouseEnter);
    logo?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      logo?.removeEventListener("mouseenter", handleMouseEnter);
      logo?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="cygnus-container">
              <div className="cygnus-logo text-2xl font-bold cursor-pointer">Cygnus</div>
            </div>
          </Link>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase()}`}>
                <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
                  {category}
                </span>
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <SearchBar />
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-6 w-6 hover:text-purple-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
            </Button>
            <CartDropdown />
            <Button variant="outline" onClick={() => setShowAuthDialog(true)}>
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </>
  );
}