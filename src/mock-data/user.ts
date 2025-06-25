export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  joinDate: string;
}

export const currentUser: User = {
  id: "user1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  address: {
    street: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    country: "United States",
  },
  phone: "+1 (555) 123-4567",
  joinDate: "2023-03-15",
};
