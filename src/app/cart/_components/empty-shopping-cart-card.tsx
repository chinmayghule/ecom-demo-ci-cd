import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function EmptyShopppingCartCard() {
  return (
    <Card>
      <CardContent className="text-center py-12">
        <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground mb-4">
          Add some items to your cart to get started.
        </p>
        <Link href="/product-list">
          <Button>Start Shopping</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default EmptyShopppingCartCard;
