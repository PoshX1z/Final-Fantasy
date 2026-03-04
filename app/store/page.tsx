import ProductCard from "@/components/shared/product/ProductCard";
import HeaderStore from "@/components/shared/store/header/HeaderStore";
import { SidebarStore } from "@/components/shared/store/sidebar/SidebarStore";
import {
  getProductAll,
  getProductByCategory,
} from "@/prisma/actions/product.actions";

export default function StorePage() {
  const getProduct = async (category: any) => {
    const product = await getProductByCategory(category);
    return product;
  };
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
        </div>
      </main>
    </div>
  );
}
