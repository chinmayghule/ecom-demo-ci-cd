import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { IOrderCard } from "./order-card";
import { Package } from "lucide-react";
import { orderStatus } from "../../_utils/order-status";

export default function Header({ order }: IOrderCard) {
  return (
    <CardHeader>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order #{order.id}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Placed on {new Date(order.orderDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant={orderStatus(order.status)}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
          <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
        </div>
      </div>
    </CardHeader>
  );
}
