import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WishlistItem } from "@/mock-data/wishlist";
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IWishListCard {
  item: WishlistItem;
  removeFromWishlist: (itemId: string) => void;
  moveToCart: (itemId: string) => void;
}
function WishListCard({ item, removeFromWishlist, moveToCart }: IWishListCard) {
  return (
    <Card key={item.id} className="group relative">
      <CardContent className="p-4">
        <RemoveFromWishlistBtn {...{ itemId: item.id, removeFromWishlist }} />

        <div className="relative mb-4">
          <Link href={`/product-details/${item.productId}`}>
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.productName}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform"
            />
          </Link>
          {!item.inStock && (
            <Badge variant="secondary" className="absolute top-2 left-2">
              Out of Stock
            </Badge>
          )}
          {item.originalPrice && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Sale
            </Badge>
          )}
        </div>

        <div className="space-y-3">
          <Link href={`/product-details/${item.productId}`}>
            <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">
              {item.productName}
            </h3>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${item.price}</span>
            {item.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${item.originalPrice}
              </span>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            Added {new Date(item.addedDate).toLocaleDateString()}
          </p>

          <AddToCartBtn {...{ item, moveToCart }} />
        </div>
      </CardContent>
    </Card>
  );
}

function AddToCartBtn({
  item,
  moveToCart,
}: {
  item: WishlistItem;
  moveToCart: (itemId: string) => void;
}) {
  return (
    <Button
      // size="sm"
      className="flex-1 w-full"
      onClick={() => moveToCart(item.id)}
      disabled={!item.inStock}
    >
      <ShoppingCart className="h-4 w-4 mr-2" />
      {item.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
}

function RemoveFromWishlistBtn({
  itemId,
  removeFromWishlist,
}: {
  itemId: string;
  removeFromWishlist: (itemId: string) => void;
}) {
  return (
    <button
      onClick={() => removeFromWishlist(itemId)}
      className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
    >
      <X className="h-4 w-4" />
    </button>
  );
}

export default WishListCard;
