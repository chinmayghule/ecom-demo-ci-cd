import { Badge } from "@/components/ui/badge";
import { Product } from "@/mock-data/products";
import Image from "next/image";

interface IProductImages {
  product: Product;
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

function ProductImages({
  product,
  selectedImage,
  setSelectedImage,
}: IProductImages) {
  return (
    <div className="space-y-4">
      <div className="aspect-square relative">
        <Image
          src={product.images[selectedImage] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-4 left-4">
            Out of Stock
          </Badge>
        )}
        {product.originalPrice && (
          <Badge variant="destructive" className="absolute top-4 right-4">
            Sale
          </Badge>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
              selectedImage === index ? "border-primary" : "border-gray-200"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${product.name} ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
