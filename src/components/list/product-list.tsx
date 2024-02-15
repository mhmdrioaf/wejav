"use client";

import { TProduct } from "@/types/globals";
import { ProductCard } from "../card";

interface IProductListProps {
  products: TProduct[];
}

export default function ProductList({ products }: IProductListProps) {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
