import { orderStatus } from "@/app/orders/_utils/order-status";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Order, orders } from "@/mock-data/orders";
import Link from "next/link";

function RecentOrdersSection() {
  const recentOrders = orders.slice(0, 3);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Recent Orders</h3>
        <Link href="/orders">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </div>
      <div className="space-y-4">
        {recentOrders.map((order: Order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <Card key={order.id}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-semibold">Order #{order.id}</h4>
            <p className="text-sm text-muted-foreground">
              {new Date(order.orderDate).toLocaleDateString()}
            </p>
          </div>
          <Badge variant={orderStatus(order.status)}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">
            {order.items.length} item{order.items.length > 1 ? "s" : ""}
          </span>
          <span className="font-semibold">${order.total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentOrdersSection;
