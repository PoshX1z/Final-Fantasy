import Image from "next/image";
import Link from "next/link";
import { SearchBarStore } from "./SearchBarStore";
import { finalFantasyFont } from "@/lib/utils";

const HeaderStore = () => {
  return (
    <div className="flex gap-20">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={70}
          height={70}
          alt="logo"
          loading="eager"
        />
        <Link href="/" className={`${finalFantasyFont.className} title`}>
          Store
        </Link>
      </div>
      <div className="flex-1">
        <SearchBarStore />
      </div>
    </div>
  );
};

export default HeaderStore;
