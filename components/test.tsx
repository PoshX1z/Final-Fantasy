"use client";

import { APP_BASE_URL } from "@/lib/constants";
import { uploadFile } from "@/lib/db/supabase";

export const TestComponent = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formImg = formData.get("image");
    console.log(formImg);
    uploadFile(formImg);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
