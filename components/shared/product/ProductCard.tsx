import { IProductInput } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProductInput }) => {
  return (
    <div>
      <div className="border-theme max-w-80">
        <div>
          <Image
            src={product.image}
            width={292}
            height={292}
            alt={product.name}
          />
        </div>
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <p>
          {product.price} <span>Gil</span>
        </p>
        <div className="flex gap-5">
          <button className="button-theme-primary p-5 hover:brightness-90 active:brightness-75">
            Buy Now
          </button>
          <button className="button-theme-secondary p-5 hover:brightness-90 active:brightness-75">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
