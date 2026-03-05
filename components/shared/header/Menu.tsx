import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import User from "./User";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-10 items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Image src="/gil.png" width={40} height={40} alt="gil icon" />
          <p className="text-2xl">12450 Gil</p>
        </div>
        <div className="button-theme-secondary px-2">
          <Link href="/">+</Link>
        </div>
      </div>

      <div>
        <ShoppingCart width={40} height={40} />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Menu;
