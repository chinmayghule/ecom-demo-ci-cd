import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISortSelect {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

function SortSelect({ sortBy, setSortBy }: ISortSelect) {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name">Name A-Z</SelectItem>
        <SelectItem value="price-low">Price: Low to High</SelectItem>
        <SelectItem value="price-high">Price: High to Low</SelectItem>
        <SelectItem value="rating">Highest Rated</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortSelect;
