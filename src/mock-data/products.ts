export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  brand: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "Electronics",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.5,
    reviewCount: 1247,
    inStock: true,
    brand: "AudioTech",
    features: [
      "Active Noise Cancellation",
      "30-hour battery",
      "Quick charge",
      "Bluetooth 5.0",
    ],
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    price: 299.99,
    description:
      "Professional ergonomic office chair with lumbar support and adjustable height. Designed for all-day comfort.",
    category: "Furniture",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.3,
    reviewCount: 892,
    inStock: true,
    brand: "ComfortSeating",
    features: [
      "Lumbar support",
      "Adjustable height",
      "360° swivel",
      "Breathable mesh",
    ],
  },
  {
    id: "3",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description:
      "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "Home & Kitchen",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.7,
    reviewCount: 2156,
    inStock: true,
    brand: "HydroFlask",
    features: [
      "24-hour cold retention",
      "12-hour hot retention",
      "BPA-free",
      "Leak-proof",
    ],
  },
  {
    id: "4",
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    originalPrice: 179.99,
    description:
      "RGB mechanical gaming keyboard with customizable keys and tactile switches.",
    category: "Electronics",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.6,
    reviewCount: 743,
    inStock: false,
    brand: "GameTech",
    features: [
      "RGB backlighting",
      "Mechanical switches",
      "Programmable keys",
      "Anti-ghosting",
    ],
  },
  {
    id: "5",
    name: "Leather Notebook Set",
    price: 34.99,
    description:
      "Premium leather-bound notebook set with dotted pages, perfect for journaling and note-taking.",
    category: "Stationery",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.4,
    reviewCount: 456,
    inStock: true,
    brand: "PaperCraft",
    features: [
      "Genuine leather cover",
      "Dotted pages",
      "Elastic closure",
      "Bookmark ribbon",
    ],
  },
  {
    id: "6",
    name: "Smart Fitness Watch",
    price: 199.99,
    description:
      "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.",
    category: "Electronics",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.2,
    reviewCount: 1089,
    inStock: true,
    brand: "FitTech",
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "7-day battery",
      "Water resistant",
    ],
  },
];

export const categories = [
  "Electronics",
  "Furniture",
  "Home & Kitchen",
  "Stationery",
  "Clothing",
  "Sports & Outdoors",
];

export const brands = [
  "AudioTech",
  "ComfortSeating",
  "HydroFlask",
  "GameTech",
  "PaperCraft",
  "FitTech",
];
