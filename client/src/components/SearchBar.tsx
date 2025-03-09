import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { searchProducts, getRelatedProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // Debounce search term to improve performance
// Move this import to the top of the file with other imports
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const searchResults = searchProducts(debouncedTerm);
  const recommendations = searchResults.length > 0
    ? getRelatedProducts(searchResults[0].id)
    : [];

  // Close search results when clicking outside

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-xl search-container">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
        />
      </div>

      {showResults && debouncedTerm && (
        <div className="absolute z-50 mt-2 w-full rounded-md border bg-background shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="p-4">
            <h3 className="mb-2 text-sm font-medium">Search Results</h3>
            {searchResults.length === 0 ? (
              <p className="text-sm text-muted-foreground">No products found</p>
            ) : (
              <div className="grid gap-4">
                {searchResults.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {recommendations.length > 0 && (
              <>
                <h3 className="mb-2 mt-4 text-sm font-medium">You might also like</h3>
                <div className="grid gap-4">
                  {recommendations.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
