import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/mock-data/products";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }: { product: Product }) {
  return (
    <Card key={product.id} className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Link href={`/product-details/${product.id}`}>
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform"
            />
          </Link>
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 left-2">
              Out of Stock
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Sale
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <Link href={`/product-details/${product.id}`}>
            <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground">{product.brand}</p>

          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1" disabled={!product.inStock}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button size="sm" variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
