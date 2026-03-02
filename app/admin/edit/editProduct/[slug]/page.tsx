import { EditForm } from "@/components/shared/admin/EditForm";
import { getProductBySlug } from "@/prisma/actions/product.actions";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  return (
    <div>
      <h1 className="mb-10 underline">Edit Product {product?.name}</h1>
      <EditForm key={product?.id} product={product!} />
    </div>
  );
}
