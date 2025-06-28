"use client";

import { useState } from "react";
import {
  FilterSidebar,
  MobileFilterBtn,
  ProductCard,
  ProductPagination,
  SortSelect,
} from "./_components";
import useGetProductList from "@/hooks/getProductList";

export default function ProductListPage() {
  const [, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  // const [priceRange] = useState<[number, number]>([0, 1000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const { data: products, loading, error } = useGetProductList();

  // Pagination
  // const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const paginatedProducts = filteredProducts.slice(
  //   startIndex,
  //   startIndex + ITEMS_PER_PAGE
  // );

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error as string}</div>;
  }

  if (!loading && !error && products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <FilterSidebar
              {...{
                selectedCategories,
                toggleCategory,
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
                Showing 1 out of 6 products
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <MobileFilterBtn>
                <FilterSidebar
                  {...{
                    selectedCategories,
                    toggleCategory,
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
            {products.map((product) => (
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
