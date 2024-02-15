"use client";

import { useCallback, useEffect, useState } from "react";

export default function useCarousel() {
  const IMAGES: string[] = [
    "/dummy_carousel_pic.jpg",
    "/dummy_product_pic_1.jpg",
    "/dummy_product_pic_2.jpg",
  ];
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
