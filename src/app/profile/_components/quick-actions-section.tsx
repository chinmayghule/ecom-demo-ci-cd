import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { orders } from "@/mock-data/orders";
import { wishlistItems } from "@/mock-data/wishlist";
import { Heart, Package } from "lucide-react";
import Link from "next/link";

function QuickActionsSection() {
  const ordersLength = orders.length;
  const wishlistItemsLength = wishlistItems.length;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/orders">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                My Orders
              </CardTitle>
              <CardDescription>View and track your orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ordersLength}</div>
              <p className="text-sm text-muted-foreground">Total orders</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/wishlist">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                My Wishlist
              </CardTitle>
              <CardDescription>Items you want to buy later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wishlistItemsLength}</div>
              <p className="text-sm text-muted-foreground">Saved items</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default QuickActionsSection;
