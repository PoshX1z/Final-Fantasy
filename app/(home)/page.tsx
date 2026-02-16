import Hero from "@/components/shared/home/Hero";
import { Promotion } from "@/components/shared/home/Promotion";
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
    </div>
  );
}
