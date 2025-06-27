"use client";

import { useState } from "react";
import { currentUser } from "@/mock-data/user";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import OrderSummarySection from "./_components/order-summary-section";
import { cartItems } from "@/mock-data/cart";
import CheckoutFormSection from "./_components/checkout-form-section";

export interface IShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ICardInfo {
  number: string;
  expiry: string;
  cvv: string;
  name: string;
}

export default function CheckoutPage() {
  // const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<IShippingInfo>({
    firstName: currentUser.name.split(" ")[0],
    lastName: currentUser.name.split(" ")[1] || "",
    email: currentUser.email,
    phone: currentUser.phone,
    address: currentUser.address.street,
    city: currentUser.address.city,
    state: currentUser.address.state,
    zipCode: currentUser.address.zipCode,
    country: currentUser.address.country,
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    // In a real app, this would process the payment and create the order
    alert("Order placed successfully! (This is a demo)");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/cart"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Cart
        </Link>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <CheckoutFormSection
          {...{
            shippingInfo,
            setShippingInfo,
            paymentMethod,
            setPaymentMethod,
            cardInfo,
            setCardInfo,
            shipping,
          }}
        />

        {/* Order Summary */}
        <OrderSummarySection
          {...{ subtotal, shipping, tax, total, handlePlaceOrder }}
        />
      </div>
    </div>
  );
}
