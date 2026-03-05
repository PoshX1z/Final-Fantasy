import { IProductInput } from "@/types";
import Image from "next/image";

export const PromotionalProductCard = ({
  product,
}: {
  product: IProductInput;
}) => {
  return (
    <div className="flex gap-5">
      <div className="border-theme border-2 max-w-73">
        <Image
          src={product.image}
          width={292}
          height={292}
          alt={product.name}
        />
        <div className="flex justify-between px-2">
          <p>
            <span>30</span> %
          </p>
          <p>
            <span>{product.price}</span> Gil
          </p>
        </div>
      </div>
    </div>
  );
};
