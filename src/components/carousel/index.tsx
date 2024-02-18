"use client";

import Image from "next/image";
import useCarousel from "./useCarousel";
import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { generateShimmer } from "@/lib/utils";

export default function Carousel() {
  const { image, prev, next, length, onDotClick, activeIndex } = useCarousel();
  return (
    <div className="w-full h-72 grid place-items-center rounded-2xl relative overflow-hidden">
      <Image
        src={image}
        fill
        className="object-cover z-0 transition-all"
        alt="Carousel Pic"
        placeholder={`data:image/${generateShimmer(100, 100)}`}
        sizes="55vw"
      />

      <div className="w-full flex flex-row items-center justify-between px-4 z-10 bg-transparent">
        <Button size="sm" onClick={prev}>
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>

        <Button size="sm" onClick={next}>
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-4 inline-flex flex-row items-center gap-2">
        {[...Array(length)].map((_, index) => (
          <Button
            key={index}
            onClick={() => onDotClick(index)}
            variant={activeIndex === index ? "primary" : "default"}
            className={`p-1 rounded-full ${
              activeIndex === index && "scale-150"
            } transition-all hover:scale-150`}
            disabled={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}
