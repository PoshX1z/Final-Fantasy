"use client";

import { APP_BASE_URL } from "@/lib/constants";
import { supabase, uploadFile } from "@/lib/db/supabase";
import { useEffect, useState } from "react";

export const TestComponent = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
  });
  console.log(form);
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const formData = new FormData(form);
  //   const formImg = formData.get("image") as File;
  //   uploadFile(formImg);
  //   const url = supabase.storage
  //     .from("products")
  //     .getPublicUrl(`/images/${Date.now()}-${formImg.name}`);
  //   console.log(url.data.publicUrl);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formWeb = e.currentTarget;
    const formData = new FormData(formWeb);
    const formImage = formData.get("image") as File;
    const imageName = `${Date.now()}-${formImage.name}`;
    const imageUrl = supabase.storage
      .from("products")
      .getPublicUrl(`/images/${imageName}`).data.publicUrl;
    console.log(imageUrl);
    setForm({
      ...form,
      image: imageUrl,
    });
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name..."
          name="name"
          value={form.name}
          onChange={(e) => {
            const name = e.target.value;
            setForm({
              ...form,
              name,
            });
          }}
          className="border-2 p-2 text-5xl"
        />
        <input type="file" name="image" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
