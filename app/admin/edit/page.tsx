import Link from "next/link";

export default function EditAdminPage() {
  return (
    <div>
      <div className="flex gap-5 items-center bg-primary p-5">
        <div>+</div>
        <Link href="/admin/edit/add">Add New Product</Link>
      </div>
    </div>
  );
}
