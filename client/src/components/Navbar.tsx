import { useState } from "react";
import { Link } from "wouter";
import { SearchBar } from "./SearchBar";
import { CartDropdown } from "./CartDropdown";
import { Button } from "./ui/button";
import { categories } from "@/data/products";
import { AuthDialog } from "./AuthDialog";

export function Navbar() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Cygnus Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold cursor-pointer">Cygnus</span>
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