import HeaderStore from "@/components/shared/store/header/HeaderStore";
import { SidebarStore } from "@/components/shared/store/sidebar/SidebarStore";

export default function StorePage() {
  return (
    <div>
      <div>
        <HeaderStore />
      </div>

      <div>
        <SidebarStore />
      </div>
    </div>
  );
}
