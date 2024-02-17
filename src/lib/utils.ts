import { TProduct } from "@/types/globals";

export function formatToIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

export function getProductURL(product: TProduct) {
  const productTitles = product.title.split(" ").slice(0, 4);
  const productSlug = productTitles
    .map((slug) => slug.toLocaleLowerCase())
    .join("-");
  const url = `/product/${productSlug}-${product.id}`;
  return url;
}
