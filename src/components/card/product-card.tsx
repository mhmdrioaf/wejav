"use client";

import {
  formatToIDR,
  generateShimmer,
  getProductURL,
  shimmerEffect,
  toBase64,
} from "@/lib/utils";
import { MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProductCardProps {
  product: TProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Link
      href={getProductURL(product)}
      className="w-full flex flex-col gap-3 border border-border rounded-lg text-black overflow-hidden"
    >
      <div className="w-full h-32 rounded-es-lg rounded-ee-lg overflow-hidden relative">
        <Image
          src={product.images[0]}
          alt={product.title}
          className="object-cover"
          placeholder={`data:image/${generateShimmer(100, 100)}`}
          loading="lazy"
          fill
          sizes="55vw"
        />
      </div>

      <div className="w-full flex flex-col gap-3 p-1">
        <p className="truncate" title={product.title}>
          {product.title}
        </p>

        <div className="inline-flex items-center gap-1">
          {product.seller.profile_picture && (
            <div className="w-4 h-4 relative rounded-md overflow-hidden">
              <Image
                src={product.seller.profile_picture}
                fill
                className="object-cover"
                alt="Seller avatar"
                placeholder={`data:image/${generateShimmer(16, 16)}`}
                loading="lazy"
                sizes="55vw"
              />
            </div>
          )}
          <p className="text-xs">{product.seller.name}</p>
        </div>

        <div className="w-full inline-flex items-center justify-between">
          <p className="text-2xl font-bold">{formatToIDR(product.price!)}</p>

          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <StarIcon className="w-3 h-3 text-black fill-accent" />
              <p className="text-xs">4.5</p>
            </div>

            <div className="inline-flex items-center gap-1">
              <MapPinIcon className="w-3 h-3 text-black fill-accent" />
              <p className="text-xs">2KM</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
