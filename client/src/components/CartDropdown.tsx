import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "./CartProvider";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export function CartDropdown() {
  const { items, removeFromCart, total } = useCart();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <ScrollArea className="h-[300px] p-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 py-2">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.product.price} × {item.quantity}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </ScrollArea>
        <Separator />
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="w-full" disabled={items.length === 0}>
            Checkout
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
