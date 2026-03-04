import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          loading="eager"
        />
        <Link href="/admin/dashboard">Admin </Link>
      </div>
      <div className="flex items-center">
        <Image
          src="/avatar.png"
          width={70}
          height={70}
          alt="profile-icon"
          className="rounded-full"
        />
        <p className="text-5xl">Admin Posh</p>
      </div>
    </div>
  );
};

export default Header;
