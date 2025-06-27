import { CartItem } from "@/mock-data/cart";
import CartItemsCard from "./cart-items-card";

interface ICartItemsSection {
  items: CartItem[];
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  moveToWishlist: (itemId: string) => void;
}

function CartItemsSection({
  items,
  removeItem,
  updateQuantity,
  moveToWishlist,
}: ICartItemsSection) {
  return (
    <div className="lg:col-span-2 space-y-4">
      {items.map((item) => (
        <CartItemsCard
          key={item.id}
          {...{ item, removeItem, updateQuantity, moveToWishlist }}
        />
      ))}
    </div>
  );
}

export default CartItemsSection;
