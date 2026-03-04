import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import Menu from "./Menu";
import Navbar from "./Navbar";
import { finalFantasyFont } from "@/lib/utils";

export const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center title">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
            loading="eager"
          />
          <Link href="/" className={`${finalFantasyFont.className}`}>
            {APP_NAME}
          </Link>
        </div>
        <div className="flex-1 mx-10">
          <SearchBar />
        </div>
        <div className="mx-10">
          <Menu />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};
