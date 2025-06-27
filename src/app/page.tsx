"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBag, Heart, User, Package } from "lucide-react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const f = async () => {
      const res = await fetch("https://api.example.com/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    };

    f();
    // console.log("fetching data...");
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopDemo</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your one-stop shop for everything you need
        </p>
        <Link href="/product-list">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Products
            </CardTitle>
            <CardDescription>
              Browse our extensive product catalog
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/product-list">
              <Button variant="outline" className="w-full">
                View Products
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Wishlist
            </CardTitle>
            <CardDescription>Save items for later</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/wishlist">
              <Button variant="outline" className="w-full">
                View Wishlist
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Orders
            </CardTitle>
            <CardDescription>Track your orders</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/orders">
              <Button variant="outline" className="w-full">
                View Orders
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </CardTitle>
            <CardDescription>Manage your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/profile">
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
