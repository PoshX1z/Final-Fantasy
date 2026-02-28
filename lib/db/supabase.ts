import { createClient } from "@supabase/supabase-js";
import { DATABASE_ANON_KEY, SUPABASE_URL } from "../constants";

export const supabase = createClient(SUPABASE_URL, DATABASE_ANON_KEY);

export async function uploadFile(file: File) {
  const fileName = file.name;
  const { data, error } = await supabase.storage
    .from("products")
    .upload(`images/${fileName}`, file, {
      cacheControl: "3600",
      upsert: true,
    });
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Successful", data);
  }
}
