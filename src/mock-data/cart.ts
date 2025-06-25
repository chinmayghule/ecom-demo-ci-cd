export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
}

export const cartItems: CartItem[] = [
  {
    id: "c1",
    userId: "user1",
    productId: "1",
    productName: "Wireless Bluetooth Headphones",
    price: 79.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    inStock: true,
  },
  {
    id: "c2",
    userId: "user1",
    productId: "3",
    productName: "Stainless Steel Water Bottle",
    price: 24.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    inStock: true,
  },
  {
    id: "c3",
    userId: "user1",
    productId: "5",
    productName: "Leather Notebook Set",
    price: 34.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    inStock: true,
  },
];
