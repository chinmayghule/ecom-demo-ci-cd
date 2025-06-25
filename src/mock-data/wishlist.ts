export interface WishlistItem {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
  addedDate: string;
}

export const wishlistItems: WishlistItem[] = [
  {
    id: "w1",
    userId: "user1",
    productId: "4",
    productName: "Mechanical Gaming Keyboard",
    price: 149.99,
    originalPrice: 179.99,
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
    addedDate: "2024-01-08",
  },
  {
    id: "w2",
    userId: "user1",
    productId: "6",
    productName: "Smart Fitness Watch",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
    addedDate: "2024-01-05",
  },
  {
    id: "w3",
    userId: "user1",
    productId: "5",
    productName: "Leather Notebook Set",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
    addedDate: "2024-01-03",
  },
];
