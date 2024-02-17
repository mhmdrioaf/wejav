"use client";

import { formatToIDR } from "@/lib/utils";
import { TProduct } from "@/types/globals";
import { Button } from "../button";

interface IProductDescriptionProps {
  product: TProduct;
}

export default function ProductDescription({
  product,
}: IProductDescriptionProps) {
  return (
    <div className="w-full flex flex-col gap-8">
      <p className="text-5xl font-bold">{product.title}</p>

      <p className="text-base whitespace-pre-line">{product.description}</p>

      <div className="w-full inline-flex items-center gap-4">
        <p className="text-2xl font-bold">{formatToIDR(product.price!)}</p>

        <div className="inline-flex items-center gap-2">
          <Button variant="destructive" size="base">
            -
          </Button>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-[8ch] bg-background border text-center text-sm border-black px-4 py-2 rounded-lg"
          />
          <Button variant="primary" size="base">
            +
          </Button>
        </div>

        <div className="inline-flex items-center gap-2">
          <Button variant="outline" size="lg">
            Tambahkan ke Keranjang
          </Button>
          <Button variant="primary" size="lg">
            Beli Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
