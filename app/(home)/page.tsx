import { Event } from "@/components/shared/home/Event";
import Hero from "@/components/shared/home/Hero";
import { Quest } from "@/components/shared/home/Quest";
import { Wallet } from "@/components/shared/home/Wallet";
import ProductCard from "@/components/shared/product/ProductCard";
import { PromotionalProductCard } from "@/components/shared/product/PromotionalProductCard";
import { getProductByTag } from "@/prisma/actions/product.actions";

export default async function Home() {
  const promotionalProduct = await getProductByTag("promotion");
  const featuredProduct = await getProductByTag("featured");
  return (
    <div className="pt-5 flex flex-col items-center justify-center">
      <Hero />
      <div className="flex">
        <div>
          <h1>Promotional Games</h1>
          <div className="flex gap-10">
            {promotionalProduct.map((product) => (
              <PromotionalProductCard key={product.slug} product={product} />
            ))}
          </div>
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
        <h1>Featured Games</h1>
        {featuredProduct.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
