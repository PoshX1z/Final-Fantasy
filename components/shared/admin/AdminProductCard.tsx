"use client";
import { IProductInput } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AdminProductCard = ({ product }: { product: IProductInput }) => {
  const handleDelete = (e: any) => {
    e.preventDefault();
    fetch("/api/product", {
      method: "DELETE",
      headers: {
        "Content-Type": "text/plain",
      },
      body: product.slug,
    });
  };
  return (
    <div>
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover"
        />
      </div>
      <p>{product.name}</p>
      <div className="flex justify-between">
        <Link href="/admin/edit/editPage">Edit</Link>
        <form onSubmit={handleDelete}>
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
};
