import ProductDetail from "@/components/product-detail";
import { PRODUCTS } from "@/lib/data/dummy";

function getProductDetail(slug: string) {
  const productID = parseInt(slug.split("-").pop()!);
  const product = PRODUCTS.find((product) => product.id === productID);

  return product ?? null;
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = getProductDetail(slug);

  return product ? (
    <div className="w-full min-h-screen px-12 py-4">
      <ProductDetail product={product} />
    </div>
  ) : (
    <div>Product not found!</div>
  );
}
