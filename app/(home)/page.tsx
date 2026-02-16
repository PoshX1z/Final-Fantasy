import Hero from "@/components/shared/home/Hero";
import { Promotion } from "@/components/shared/home/Promotion";

export default function Home() {
  return (
    <div className="pt-5">
      <Hero />
      <h1 className="py-5 text-8xl">Promotion Games On Sell</h1>
      <Promotion />
    </div>
  );
}
