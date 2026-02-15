import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="flex gap-10">
      <div className="flex gap-2">
        <Image src="/gil.png" width={70} height={70} alt="gil icon" />
        <p>12450 Gil</p>
        <div>+</div>
      </div>
      <div>
        <ShoppingCart width={50} height={50} />
      </div>
    </div>
  );
};

export default Menu;
