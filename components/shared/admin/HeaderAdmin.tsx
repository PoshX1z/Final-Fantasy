import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderAdmin = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center title">
        <Image
          src="/logo.png"
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
        <p className="text-big">Admin Posh</p>
      </div>
    </div>
  );
};

export default HeaderAdmin;
