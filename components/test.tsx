"use client";

import { APP_BASE_URL } from "@/lib/constants";

export const TestComponent = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);

    const res = await fetch(`${APP_BASE_URL}/api/product`, {
      method: "POST",
      body: formData,
    });

    console.log("Response received");

    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <form
        action="/api/product
      "
        onSubmit={handleSubmit}
        method="POST"
      >
        <input type="text" name="name" placeholder="enter name..." />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
