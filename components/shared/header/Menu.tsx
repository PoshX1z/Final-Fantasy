import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import User from "./User";

const Menu = () => {
  return (
    <div className="flex gap-10 items-center">
      <div className="flex gap-2">
        <Image src="/gil.png" width={70} height={70} alt="gil icon" />
        <p>12450 Gil</p>
        <div>+</div>
      </div>
      <div>
        <ShoppingCart width={50} height={50} />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Menu;
