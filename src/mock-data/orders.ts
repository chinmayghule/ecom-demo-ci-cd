export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    userId: "user1",
    items: [
      {
        productId: "1",
        productName: "Wireless Bluetooth Headphones",
        price: 79.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        productId: "3",
        productName: "Stainless Steel Water Bottle",
        price: 24.99,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    total: 129.97,
    status: "shipped",
    orderDate: "2024-01-10",
    estimatedDelivery: "2024-01-15",
    trackingNumber: "TRK123456789",
    shippingAddress: {
      street: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "United States",
    },
  },
  {
    id: "ORD-002",
    userId: "user1",
    items: [
      {
        productId: "2",
        productName: "Ergonomic Office Chair",
        price: 299.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    total: 299.99,
    status: "processing",
    orderDate: "2024-01-12",
    estimatedDelivery: "2024-01-18",
    shippingAddress: {
      street: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "United States",
    },
  },
];
