import { Product } from "@/mock-data/products";
import { useEffect, useState } from "react";

export default function useGetProductList() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await fetch("https://api.example.com/products");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
