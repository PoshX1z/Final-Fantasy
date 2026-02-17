import Image from "next/image";
import React from "react";
import ProductCard from "../product/ProductCard";

export const Promotion = () => {
  return (
    <div>
      <h1 className="py-5 text-8xl">Promotion Games On Sell</h1>
      <div className="flex gap-5">
        <ProductCard type={1} />
        <ProductCard type={1} />
        <ProductCard type={1} />
        <ProductCard type={1} />
      </div>
    </div>
  );
};
