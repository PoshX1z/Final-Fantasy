import { EditForm } from "@/components/shared/admin/EditForm";
import { getProductBySlug } from "@/prisma/actions/product.actions";

export default function EditProductPage() {
  return (
    <div>
      <EditForm />
    </div>
  );
}
