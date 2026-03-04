import Image from "next/image";
import Link from "next/link";
import { SearchBarStore } from "./SearchBarStore";

const HeaderStore = () => {
  return (
    <div className="flex gap-20">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          loading="eager"
        />
        <Link href="/">Store</Link>
      </div>
      <div className="flex-1">
        <SearchBarStore />
      </div>
    </div>
  );
};

export default HeaderStore;
