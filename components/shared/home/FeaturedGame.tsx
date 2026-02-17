import ProductCard from "../product/ProductCard";

export const FeaturedGame = () => {
  return (
    <div>
      <h1>Featured Games</h1>
      <div className="grid grid-cols-5 gap-5">
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
        <ProductCard type={2} />
      </div>
    </div>
  );
};
