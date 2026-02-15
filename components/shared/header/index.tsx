import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import Menu from "./Menu";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <div className="text-6xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            loading="eager"
          />
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};
