"use client";

import { formatToIDR } from "@/lib/utils";
import { Button } from "../button";
import { ProductContext, TProductContext } from "./useProduct";
import React from "react";

interface IProductDescriptionProps {
  product: TProduct;
}

export default function ProductDescription({
  product,
}: IProductDescriptionProps) {
  const { state, handler } = React.useContext(
    ProductContext
  ) as TProductContext;
  return (
    <div className="w-full flex flex-col gap-8">
      <p className="text-5xl font-bold">{product.title}</p>

      <p className="text-base whitespace-pre-line">{product.description}</p>

      <div className="w-full inline-flex items-center gap-4">
        <p className="text-2xl font-bold">{formatToIDR(state.total_price)}</p>

        <div className="inline-flex items-center gap-2">
          <Button
            variant="destructive"
            size="base"
            onClick={() => handler.onQuantityChange("decrease")}
            disabled={state.quantity === 1}
          >
            -
          </Button>
          <input
            type="number"
            min={1}
            value={state.quantity}
            className="w-[8ch] bg-background border text-center text-sm border-black px-4 py-2 rounded-lg"
            onChange={handler.onQuantityInputChange}
          />
          <Button
            variant="primary"
            size="base"
            onClick={() => handler.onQuantityChange("increase")}
          >
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
