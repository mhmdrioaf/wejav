"use client";

import { generateShimmer } from "@/lib/utils";
import Image from "next/image";
import { ProductContext, TProductContext } from "./useProduct";
import React from "react";

interface IProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: IProductImagesProps) {
  const { handler } = React.useContext(ProductContext) as TProductContext;
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className="w-full h-auto aspect-square rounded-[32px] overflow-hidden relative cursor-pointer"
        onClick={() => handler.onShowImagesModal(images[0])}
      >
        <Image
          src={images[0]}
          fill
          className="object-cover"
          alt="Product images"
          placeholder={`data:image/${generateShimmer(100, 100)}`}
          sizes="75vw"
        />
      </div>

      <div className="w-full overflow-auto inline-flex items-center gap-2">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="w-[calc((100%-1rem)/3)] h-auto aspect-square rounded-2xl overflow-hidden shrink-0 relative cursor-pointer"
            onClick={() => handler.onShowImagesModal(image)}
          >
            <Image
              src={image}
              fill
              className="object-cover"
              alt="Product images"
              placeholder={`data:image/${generateShimmer(100, 100)}`}
              sizes="75vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
