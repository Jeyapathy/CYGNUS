import { Link } from "wouter";
import { SearchBar } from "./SearchBar";
import { CartDropdown } from "./CartDropdown";
import { categories } from "@/data/products";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">HoverCart</span>
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
          <CartDropdown />
        </div>
      </div>
    </header>
  );
}