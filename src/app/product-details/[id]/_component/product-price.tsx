function ProductPrice({ price }: { price: number }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-3xl font-bold">${price}</span>
    </div>
  );
}

export default ProductPrice;
