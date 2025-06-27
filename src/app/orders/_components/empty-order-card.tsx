import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

function EmptyOrderCard() {
  return (
    <Card>
      <CardContent className="text-center py-12">
        <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
        <p className="text-muted-foreground mb-4">
          When you place your first order, it will appear here.
        </p>
        <Button>Start Shopping</Button>
      </CardContent>
    </Card>
  );
}

export default EmptyOrderCard;
