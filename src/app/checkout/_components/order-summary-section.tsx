import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Truck } from "lucide-react";
import Image from "next/image";
import { cartItems } from "@/mock-data/cart";

interface IOrderSummarySection {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  handlePlaceOrder: () => void;
}

function OrderSummarySection({
  subtotal,
  shipping,
  tax,
  total,
  handlePlaceOrder,
}: IOrderSummarySection) {
  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Order Items */}
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.productName}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium line-clamp-2">
                    {item.productName}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <span className="text-sm font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="h-3 w-3" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderSummarySection;
