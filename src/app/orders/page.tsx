import { Order, orders } from "@/mock-data/orders";
import OrderCard from "./_components/order-card/order-card";
import EmptyOrderCard from "./_components/empty-order-card";

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Orders</h1>
        <p className="text-muted-foreground">Track and manage your orders</p>
      </div>

      <div className="space-y-6">
        {orders.map((order: Order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      {orders.length === 0 && <EmptyOrderCard />}
    </div>
  );
}
