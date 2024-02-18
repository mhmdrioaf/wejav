import Carousel from "@/components/carousel";
import { ProductList } from "@/components/list";
import { PRODUCTS } from "@/lib/data/dummy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WEJAV | West Java Food Delivery Website",
  description: "This website is a prototype for WeJav app using Next.js",
};

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
