import Link from "next/link";

export const SideBar = () => {
  return (
    <div>
      <ul>
        <Link href="/admin/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link href="/admin/product">
          <li>Products</li>
        </Link>
        <Link href="/admin/edit">
          <li>Edit Product</li>
        </Link>
        <Link href="/admin/history">
          <li>Order History</li>
        </Link>
        <Link href="/admin/authorizedStore">
          <li>Users</li>
        </Link>
        <Link href="/admin/calendar">
          <li>Support</li>
        </Link>
      </ul>
    </div>
  );
};
