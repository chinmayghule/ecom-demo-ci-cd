import { products } from "@/mock-data/products";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  // GET /products
  http.get("https://api.example.com/products", () => {
    return HttpResponse.json(products);
  }),
];
