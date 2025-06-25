"use client";

import { useState } from "react";
import { products, categories, brands } from "@/mock-data/products";
import {
  FilterSidebar,
  MobileFilterBtn,
  ProductCard,
  ProductPagination,
  SortSelect,
} from "./_components";

const ITEMS_PER_PAGE = 6;

export default function ProductListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange] = useState<[number, number]>([0, 1000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (showInStockOnly && !product.inStock) {
      return false;
    }
    return true;
  });

  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Pagination
  // const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <FilterSidebar
              {...{
                categories,
                selectedCategories,
                toggleCategory,
                brands,
                selectedBrands,
                toggleBrand,
                showInStockOnly,
                setShowInStockOnly,
                setCurrentPage,
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">Products</h1>
              <p className="text-muted-foreground">
                Showing {startIndex + 1}-
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}{" "}
                of {filteredProducts.length} products
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <MobileFilterBtn>
                <FilterSidebar
                  {...{
                    categories,
                    selectedCategories,
                    toggleCategory,
                    brands,
                    selectedBrands,
                    toggleBrand,
                    showInStockOnly,
                    setShowInStockOnly,
                    setCurrentPage,
                  }}
                />
              </MobileFilterBtn>

              {/* Sort Select */}
              <SortSelect {...{ sortBy, setSortBy }} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}
