import { Event } from "@/components/shared/home/Event";
import Hero from "@/components/shared/home/Hero";
import { Promotion } from "@/components/shared/home/Promotion";
import { Quest } from "@/components/shared/home/Quest";
import { Wallet } from "@/components/shared/home/Wallet";

export default function Home() {
  return (
    <div className="pt-5">
      <Hero />
      <div className="flex">
        <div>
          <h1 className="py-5 text-8xl">Promotion Games On Sell</h1>
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
    </div>
  );
}
