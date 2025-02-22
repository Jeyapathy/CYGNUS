import { useState } from "react";
import { Link } from "wouter";
import { useEffect } from "react";
import gsap from "gsap";
import { SearchBar } from "./SearchBar";
import { CartDropdown } from "./CartDropdown";
import { Button } from "./ui/button";
import { categories } from "@/data/products";
import { AuthDialog } from "./AuthDialog";

export function Navbar() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    const logo = document.querySelector(".cygnus-logo");
    
    gsap.from(logo, { 
      opacity: 0, 
      y: -50, 
      duration: 1.5, 
      ease: "power3.out"
    });

    const handleMouseEnter = () => {
      gsap.to(logo, { 
        scale: 1.2, 
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logo, { 
        scale: 1, 
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
            <div className="cygnus-logo text-2xl font-bold cursor-pointer">Cygnus</div>
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
            <Button
              variant="ghost"
              onClick={() => setShowAuthDialog(true)}
            >
              Login
            </Button>
            <CartDropdown />
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