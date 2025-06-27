import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";

function EmptyWishlistCard() {
  return (
    <Card>
      <CardContent className="text-center py-12">
        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
        <p className="text-muted-foreground mb-4">
          Save items you love to buy them later.
        </p>
        <Link href="/product-list">
          <Button>Browse Products</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default EmptyWishlistCard;
