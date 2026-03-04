import Image from "next/image";
import React from "react";

const User = () => {
  return (
    <div>
      <Image
        src="/avatar.png"
        width={70}
        height={70}
        alt="profile-icon"
        className="rounded-full"
      />
    </div>
  );
};

export default User;
