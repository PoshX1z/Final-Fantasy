import Image from "next/image";
import React from "react";

export const Wallet = () => {
  return (
    <div className="flex flex-col items-center bg-primary">
      <div className="flex">
        <h1>Gil Wallet</h1>
        <Image src="/gil.png" width={70} height={70} alt="gil icon" />
        <p>12450 Gil</p>
      </div>
      <div className="flex">
        <Image src="/gil.png" width={70} height={70} alt="gil icon" />
        <p>12450 Gil</p>
      </div>
      <div className="flex">
        <p>
          + <span>300</span> Claim Available
        </p>
      </div>
      <div>
        <button className="bg-secondary px-30 py-5 text-7xl">
          Claim Rewards
        </button>
      </div>
    </div>
  );
};
