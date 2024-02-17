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

export const shimmerEffect = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#cfcfcf" offset="20%" />
      <stop stop-color="#bababa" offset="50%" />
      <stop stop-color="#cfcfcf" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#cfcfcf" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function generateShimmer(width: number, height: number) {
  return `svg+xml;base64,${toBase64(shimmerEffect(width, height))}`;
}
