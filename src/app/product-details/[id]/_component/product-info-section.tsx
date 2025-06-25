import StarRating from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/mock-data/products";
import { Heart, RotateCcw, Shield, ShoppingCart, Truck } from "lucide-react";
import ProductPrice from "./product-price";
import ProductQuantityToBuy from "./product-quantity-to-buy";

interface IProductInfoSection {
  product: Product;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

function ProductInfoSection({
  product,
  quantity,
  setQuantity,
}: IProductInfoSection) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-muted-foreground mb-4">{product.brand}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-sm">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
        </div>

        {/* product price */}
        <ProductPrice {...{ price: product.price }} />
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-muted-foreground">{product.description}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <Separator />

      <div className="space-y-4">
        <ProductQuantityToBuy {...{ quantity, setQuantity }} />

        <div className="flex gap-4">
          <Button size="lg" className="flex-1" disabled={!product.inStock}>
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
          <Button size="lg" variant="outline">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <Button
          size="lg"
          variant="secondary"
          className="w-full"
          disabled={!product.inStock}
        >
          Buy Now
        </Button>
      </div>

      <Separator />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-muted-foreground" />
          <span>Free shipping over $50</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="h-5 w-5 text-muted-foreground" />
          <span>30-day returns</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <span>2-year warranty</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoSection;
