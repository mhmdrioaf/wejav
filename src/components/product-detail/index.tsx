"use client";

import ProductImages from "./product-images";
import ProductDescription from "./product-description";
import { ReviewCard, SellerCard } from "../card";
import { REVIEWS } from "@/lib/data/dummy";
import { ProductProvider } from "./useProduct";
import { ModalProductImages } from "../modal";

interface IProductDetailProps {
  product: TProduct;
}

export default function ProductDetail({ product }: IProductDetailProps) {
  return (
    <ProductProvider product={product}>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-row items-start justify-stretch gap-8">
          <div className="w-1/4 flex flex-col gap-4">
            <ProductImages images={product.images} />
            <SellerCard
              name={product.seller.name}
              profile_picture={product.seller.profile_picture ?? ""}
            />
          </div>
          <div className="w-3/4">
            <ProductDescription product={product} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-lg font-bold">Ulasan Produk</p>
          {REVIEWS.map((review, index) => (
            <ReviewCard key={index} reviewer={review} />
          ))}
        </div>
      </div>

      <ModalProductImages images={product.images} />
    </ProductProvider>
  );
}
