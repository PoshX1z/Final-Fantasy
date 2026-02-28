import { TestComponent } from "@/components/test";
import { APP_BASE_URL } from "@/lib/constants";
import { supabase } from "@/lib/db/supabase";
import Image from "next/image";

export default async function TestPage() {
  // retrieve url of product and display to img
  const data = await supabase.storage.from("products").getPublicUrl("");
  console.log(data);

  return (
    <div>
      <TestComponent />
    </div>
  );
}
