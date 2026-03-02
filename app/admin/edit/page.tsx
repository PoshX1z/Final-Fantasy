import { AdminProductCard } from "@/components/shared/admin/AdminProductCard";
import { getProductByTag } from "@/prisma/actions/product.actions";
import Link from "next/link";

export default async function EditAdminPage() {
  const normalProduct = await getProductByTag("normal");
  const heroProduct = await getProductByTag("hero");
  const promotionalProduct = await getProductByTag("promotion");
  const featuredProduct = await getProductByTag("featured");
  return (
    <div>
      <div className="flex gap-5 items-center bg-primary p-5">
        <div>+</div>
        <Link href="/admin/edit/add">Add New Product</Link>
      </div>
      <div>
        <h1 className="mb-10">Tag: Normal Products</h1>
        <div className="flex gap-5">
          {normalProduct.map((product) => (
            <AdminProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-10">Tag: Hero Banner Products</h1>
        <div>
          {heroProduct.map((product) => (
            <AdminProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-10">Tag: Promotional Products</h1>
        <div>
          {promotionalProduct.map((product) => (
            <AdminProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-10">Tag: Featured Products</h1>
        <div>
          {featuredProduct.map((product) => (
            <AdminProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
