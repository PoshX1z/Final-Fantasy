import Header from "@/components/shared/admin/Header";
import { SideBar } from "@/components/shared/admin/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
