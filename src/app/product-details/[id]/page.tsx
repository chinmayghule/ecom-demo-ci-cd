"use client";

import React, { useState } from "react";
import { products } from "@/mock-data/products";
import { reviews } from "@/mock-data/reviews";
import { notFound } from "next/navigation";
import ProductImages from "./_component/product-images";
import ReviewsSection from "./_component/reviews-section";
import ProductInfoSection from "./_component/product-info-section";

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviewSort, setReviewSort] = useState("newest");

  if (!product) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <ProductImages {...{ product, selectedImage, setSelectedImage }} />

        {/* Product Info */}
        <ProductInfoSection {...{ product, quantity, setQuantity }} />
      </div>

      {/* Reviews Section */}
      <ReviewsSection {...{ reviews, reviewSort, setReviewSort }} />
    </div>
  );
}
