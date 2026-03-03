import ProductCard from "@/components/shared/product/ProductCard";
import HeaderStore from "@/components/shared/store/header/HeaderStore";
import { SidebarStore } from "@/components/shared/store/sidebar/SidebarStore";
import { getProductAll } from "@/prisma/actions/product.actions";

export default async function StorePage() {
  const allProducts = await getProductAll();
  console.log(allProducts);
  return (
    <div>
      <div className="pb-10">
        <HeaderStore />
      </div>

      <main className="flex gap-20">
        <SidebarStore />
        <div>
          <div className="flex gap-80 mb-10">
            <h1>Crystal Week - Double Gil Cashback when buy</h1>
            <button className="border-2 border-primary">View Detail</button>
          </div>
          <div className="flex flex-wrap gap-20">
            {allProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
