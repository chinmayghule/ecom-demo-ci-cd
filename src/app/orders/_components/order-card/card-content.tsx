import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Truck } from "lucide-react";
import Image from "next/image";
import { IOrderCard } from "./order-card";
import { OrderItem } from "@/mock-data/orders";

export default function Content({ order }: IOrderCard) {
  return (
    <CardContent className="space-y-6">
      {/* Order Items */}
      <div>
        <h4 className="font-semibold mb-3">Items ({order.items.length})</h4>
        <div className="space-y-3">
          {order.items.map((item, index) => (
            <Item key={item.productId} {...{ item, index }} />
          ))}
        </div>
      </div>

      <Separator />

      {/* Shipping Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Shipping Address
          </h4>
          <div className="text-sm text-muted-foreground">
            <div>{order.shippingAddress.street}</div>
            <div>
              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.zipCode}
            </div>
            <div>{order.shippingAddress.country}</div>
          </div>
        </div>

        {order.status === "shipped" && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Tracking Information
            </h4>
            <div className="text-sm">
              <div className="mb-1">
                <span className="text-muted-foreground">Tracking Number: </span>
                <span className="font-mono">{order.trackingNumber}</span>
              </div>
              <div>
                <span className="text-muted-foreground">
                  Estimated Delivery:{" "}
                </span>
                <span>
                  {order.estimatedDelivery &&
                    new Date(order.estimatedDelivery).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        {order.status === "shipped" && (
          <Button variant="outline" size="sm">
            Track Package
          </Button>
        )}
        {order.status === "delivered" && (
          <Button variant="outline" size="sm">
            Leave Review
          </Button>
        )}
        <Button variant="outline" size="sm">
          Reorder Items
        </Button>
      </div>
    </CardContent>
  );
}

function Item({ item, index }: { item: OrderItem; index: number }) {
  return (
    <div
      key={index}
      className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg"
    >
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.productName}
        width={60}
        height={60}
        className="rounded-md"
      />
      <div className="flex-1">
        <h5 className="font-medium">{item.productName}</h5>
        <p className="text-sm text-muted-foreground">
          Quantity: {item.quantity}
        </p>
      </div>
      <span className="font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  );
}
