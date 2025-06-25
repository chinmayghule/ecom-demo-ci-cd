import Link from "next/link";
import Image from "next/image";
import { currentUser } from "@/mock-data/user";
import { orders } from "@/mock-data/orders";
import { wishlistItems } from "@/mock-data/wishlist";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Heart, MapPin, Phone, Mail, Calendar } from "lucide-react";

export default function ProfilePage() {
  const recentOrders = orders.slice(0, 3);
  const recentWishlistItems = wishlistItems.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Image
                  src={currentUser.avatar || "/placeholder.svg"}
                  alt={currentUser.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <CardTitle>{currentUser.name}</CardTitle>
              <CardDescription>{currentUser.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>
                  Member since{" "}
                  {new Date(currentUser.joinDate).toLocaleDateString()}
                </span>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-semibold">Contact Information</h4>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{currentUser.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div>{currentUser.address.street}</div>
                    <div>
                      {currentUser.address.city}, {currentUser.address.state}{" "}
                      {currentUser.address.zipCode}
                    </div>
                    <div>{currentUser.address.country}</div>
                  </div>
                </div>
              </div>

              <Separator />

              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/orders">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      My Orders
                    </CardTitle>
                    <CardDescription>
                      View and track your orders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{orders.length}</div>
                    <p className="text-sm text-muted-foreground">
                      Total orders
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/wishlist">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      My Wishlist
                    </CardTitle>
                    <CardDescription>
                      Items you want to buy later
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {wishlistItems.length}
                    </div>
                    <p className="text-sm text-muted-foreground">Saved items</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Recent Orders */}
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
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Order #{order.id}</h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        variant={
                          order.status === "delivered"
                            ? "default"
                            : order.status === "shipped"
                            ? "secondary"
                            : order.status === "processing"
                            ? "outline"
                            : "destructive"
                        }
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">
                        {order.items.length} item
                        {order.items.length > 1 ? "s" : ""}
                      </span>
                      <span className="font-semibold">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Wishlist Items */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Recent Wishlist Items</h3>
              <Link href="/wishlist">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recentWishlistItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.productName}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                      {item.productName}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">${item.price}</span>
                      <Badge variant={item.inStock ? "default" : "secondary"}>
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
