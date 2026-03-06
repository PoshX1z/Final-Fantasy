import HeaderAdmin from "@/components/shared/admin/HeaderAdmin";
import Header from "@/components/shared/admin/HeaderAdmin";
import { SideBarAdmin } from "@/components/shared/admin/SideBarAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <HeaderAdmin />
      </div>
      <div className="flex">
        <div>
          <SideBarAdmin />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
