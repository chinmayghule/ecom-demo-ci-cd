"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { wishlistItems } from "@/mock-data/wishlist";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, X } from "lucide-react";

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const removeFromWishlist = (itemId: string) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const moveToCart = (itemId: string) => {
    // In a real app, this would add to cart and remove from wishlist
    console.log("Moving item to cart:", itemId);
    removeFromWishlist(itemId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
        <p className="text-muted-foreground">
          {items.length} item{items.length !== 1 ? "s" : ""} saved for later
        </p>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="group relative">
              <CardContent className="p-4">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>

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
                    <Badge
                      variant="secondary"
                      className="absolute top-2 left-2"
                    >
                      Out of Stock
                    </Badge>
                  )}
                  {item.originalPrice && (
                    <Badge
                      variant="destructive"
                      className="absolute top-2 right-2"
                    >
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

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => moveToCart(item.id)}
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-muted-foreground mb-4">
              Save items you love to buy them later.
            </p>
            <Link href="/product-list">
              <Button>Browse Products</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
