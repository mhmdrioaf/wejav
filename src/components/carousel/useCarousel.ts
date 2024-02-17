"use client";

import { useCallback, useEffect, useState } from "react";
import carousel1 from "../../../public/dummy_carousel_pic.jpg";
import carousel2 from "../../../public/dummy_product_pic_1.jpg";
import carousel3 from "../../../public/dummy_product_pic_2.jpg";
import { StaticImageData } from "next/image";

export default function useCarousel() {
  const IMAGES: StaticImageData[] = [carousel1, carousel2, carousel3];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextImage = useCallback(() => {
    setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, IMAGES.length]);

  const prevImage = useCallback(() => {
    setActiveIndex(activeIndex === 0 ? IMAGES.length - 1 : activeIndex - 1);
  }, [activeIndex, IMAGES.length]);

  const onDotClick = (index: number) => setActiveIndex(index);

  useEffect(() => {
    const handleNext = () => {
      nextImage();
    };

    const interval = setInterval(handleNext, 3000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return {
    image: IMAGES[activeIndex],
    next: nextImage,
    prev: prevImage,
    length: IMAGES.length,
    onDotClick: onDotClick,
    activeIndex: activeIndex,
  };
}
