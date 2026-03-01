import { TestComponent } from "@/components/test";
import { APP_BASE_URL } from "@/lib/constants";
import { supabase } from "@/lib/db/supabase";
import prisma from "@/prisma/prisma";
import Image from "next/image";

export default async function TestPage() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}
