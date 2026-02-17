import Image from "next/image";
import React from "react";

export const Event = () => {
  return (
    <div className="relative border-2 border-primary ">
      <div>
        <Image src="/crystal.png" width={500} height={500} alt="event-banner" />
      </div>
      <div className="absolute top-0 left-20">
        <h1>Limited Time Event</h1>
        <div>
          <h1 className="text-7xl">Crystal Rebirth Event</h1>
          <p className="text-4xl">Earn Doubles Gil Rewards This Week</p>
        </div>
      </div>
    </div>
  );
};
