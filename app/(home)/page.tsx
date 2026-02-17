import { Event } from "@/components/shared/home/Event";
import { FeaturedGame } from "@/components/shared/home/FeaturedGame";
import Hero from "@/components/shared/home/Hero";
import { Promotion } from "@/components/shared/home/Promotion";
import { Quest } from "@/components/shared/home/Quest";
import { Wallet } from "@/components/shared/home/Wallet";

export default function Home() {
  return (
    <div className="pt-5 flex flex-col items-center justify-center">
      <Hero />
      <div className="flex">
        <div>
          <Promotion />
        </div>
        <div className="p-10">
          <Wallet />
        </div>
      </div>
      <div className="flex pt-10 gap-10">
        <Quest />
        <Event />
      </div>
      <div>
        <FeaturedGame />
      </div>
    </div>
  );
}
