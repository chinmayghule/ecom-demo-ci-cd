export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    userName: "John D.",
    rating: 5,
    title: "Excellent sound quality!",
    comment:
      "These headphones exceeded my expectations. The noise cancellation works perfectly and the battery life is amazing. Highly recommended!",
    date: "2024-01-15",
    helpful: 23,
    verified: true,
  },
  {
    id: "r2",
    productId: "1",
    userName: "Sarah M.",
    rating: 4,
    title: "Great value for money",
    comment:
      "Good headphones for the price. The only minor issue is that they can feel a bit tight after long use, but overall very satisfied.",
    date: "2024-01-10",
    helpful: 15,
    verified: true,
  },
  {
    id: "r3",
    productId: "1",
    userName: "Mike R.",
    rating: 5,
    title: "Perfect for work calls",
    comment:
      "I use these daily for video calls and the microphone quality is crystal clear. The noise cancellation helps me focus in a busy office.",
    date: "2024-01-08",
    helpful: 31,
    verified: true,
  },
  {
    id: "r4",
    productId: "2",
    userName: "Lisa K.",
    rating: 4,
    title: "Comfortable and sturdy",
    comment:
      "This chair has really helped with my back pain during long work days. Assembly was straightforward and it feels very well-built.",
    date: "2024-01-12",
    helpful: 18,
    verified: true,
  },
  {
    id: "r5",
    productId: "3",
    userName: "David L.",
    rating: 5,
    title: "Keeps drinks cold all day",
    comment:
      "I fill this with ice water in the morning and it's still cold when I get home from work. No leaks and easy to clean.",
    date: "2024-01-14",
    helpful: 27,
    verified: true,
  },
];
