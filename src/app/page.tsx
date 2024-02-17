import Carousel from "@/components/carousel";
import { ProductList } from "@/components/list";
import { PRODUCTS } from "@/lib/data/dummy";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 px-12 py-4">
      <Carousel />
      <ProductList
        products={[...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]}
      />
    </main>
  );
}
