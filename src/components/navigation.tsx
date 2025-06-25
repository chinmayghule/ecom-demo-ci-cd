"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cartItems } from "@/mock-data/cart";
import { wishlistItems } from "@/mock-data/wishlist";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            ShopDemo
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/product-list"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/product-list")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Products
            </Link>
          </nav>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-8" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/profile">
            <Button
              variant={isActive("/profile") ? "default" : "ghost"}
              size="sm"
              className="hidden sm:flex"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </Link>

          <Link href="/wishlist" className="relative">
            <Button
              variant={isActive("/wishlist") ? "default" : "ghost"}
              size="sm"
            >
              <Heart className="h-4 w-4" />
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {wishlistItems.length}
                </Badge>
              )}
            </Button>
          </Link>

          <Link href="/cart" className="relative">
            <Button variant={isActive("/cart") ? "default" : "ghost"} size="sm">
              <ShoppingCart className="h-4 w-4" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
