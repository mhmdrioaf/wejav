"use client";

import React from "react";
import { ProductContext, TProductContext } from "../product-detail/useProduct";
import Image from "next/image";
import { generateShimmer } from "@/lib/utils";
import { Button } from "../button";
import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface IProductImagesProps {
  images: string[];
}

export default function ModalProductImages({ images }: IProductImagesProps) {
  const { state, handler } = React.useContext(
    ProductContext
  ) as TProductContext;
  return state.showImagesModal ? (
    <div className="w-full h-screen fixed top-0 left-0 flex flex-col gap-4 px-8 py-4 items-center justify-center z-40">
      <div
        className="w-full h-screen absolute top-0 left-0 z-40 bg-black/55"
        onClick={handler.onHideImagesModal}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handler.onHideImagesModal}
          className="absolute top-4 right-8"
        >
          <XIcon className="w-4 h-4" />
        </Button>
      </div>

      <div className="w-[480px] h-auto aspect-square rounded-2xl overflow-hidden relative z-50">
        <Image
          src={state.active_image}
          fill
          className="object-cover"
          alt="Product image"
          sizes="100vw"
          placeholder={`data:image/${generateShimmer(50, 50)}`}
        />
      </div>

      <div className="inline-flex items-center gap-2 overflow-auto z-50">
        {images.map((image, index) => (
          <div
            key={index}
            className={twMerge(
              "w-20 h-20 rounded-md overflow-hidden relative cursor-pointer filter brightness-75",
              image === state.active_image && "brightness-100"
            )}
          >
            <Image
              src={image}
              fill
              className="object-cover"
              alt="Product image"
              onClick={() => handler.onImageClick(image)}
              sizes="55vw"
              placeholder={`data:image/${generateShimmer(20, 20)}`}
            />
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
