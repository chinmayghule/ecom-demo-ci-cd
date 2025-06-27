import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { wishlistItems } from "@/mock-data/wishlist";
import Image from "next/image";
import Link from "next/link";

function RecentWishlistItems() {
  const recentWishlistItems = wishlistItems.slice(0, 3);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Recent Wishlist Items</h3>
        <Link href="/wishlist">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {recentWishlistItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.productName}
                width={200}
                height={200}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                {item.productName}
              </h4>
              <div className="flex items-center justify-between">
                <span className="font-bold">${item.price}</span>
                <Badge variant={item.inStock ? "default" : "secondary"}>
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RecentWishlistItems;
