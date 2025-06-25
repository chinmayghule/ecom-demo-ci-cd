import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProductQuantityToBuy {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

function ProductQuantityToBuy({
  quantity,
  setQuantity,
}: IProductQuantityToBuy) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Quantity</label>
      <Select
        value={quantity.toString()}
        onValueChange={(value) => setQuantity(Number.parseInt(value))}
      >
        <SelectTrigger className="w-24">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[...Array(10)].map((_, i) => (
            <SelectItem key={i + 1} value={(i + 1).toString()}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default ProductQuantityToBuy;
