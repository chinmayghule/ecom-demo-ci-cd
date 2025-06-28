import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { brands, categories } from "@/mock-data/products";

interface IFilterSidebar {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  showInStockOnly: boolean;
  setShowInStockOnly: (showInStockOnly: boolean) => void;
  setCurrentPage: (page: number) => void;
}

function FilterSidebar({
  selectedCategories,
  toggleCategory,
  selectedBrands,
  toggleBrand,
  showInStockOnly,
  setShowInStockOnly,
  setCurrentPage,
}: IFilterSidebar) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <label
                htmlFor={brand}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={showInStockOnly}
            onCheckedChange={(checked) => {
              setShowInStockOnly(checked as boolean);
              setCurrentPage(1);
            }}
          />
          <label
            htmlFor="inStock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            In Stock Only
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
