import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CartItem } from "@/mock-data/cart";
import { Heart, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ICartItemsCard {
  item: CartItem;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  moveToWishlist: (itemId: string) => void;
}

function CartItemsCard({
  item,
  removeItem,
  updateQuantity,
  moveToWishlist,
}: ICartItemsCard) {
  return (
    <Card key={item.id}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.productName}
              width={100}
              height={100}
              className="rounded-md"
            />
            {!item.inStock && (
              <Badge
                variant="secondary"
                className="absolute top-1 left-1 text-xs"
              >
                Out of Stock
              </Badge>
            )}
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <Link href={`/product-details/${item.productId}`}>
                <h3 className="font-semibold hover:text-primary transition-colors">
                  {item.productName}
                </h3>
              </Link>
              <button
                onClick={() => removeItem(item.id)}
                className="p-1 hover:bg-muted rounded cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">${item.price}</span>
              <Badge variant={item.inStock ? "default" : "secondary"}>
                {item.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={!item.inStock}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      item.id,
                      Number.parseInt(e.target.value) || 0
                    )
                  }
                  className="w-16 text-center"
                  min="0"
                  disabled={!item.inStock}
                />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={!item.inStock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => moveToWishlist(item.id)}
                >
                  <Heart className="h-4 w-4 mr-1" />
                  Save for Later
                </Button>
                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CartItemsCard;
