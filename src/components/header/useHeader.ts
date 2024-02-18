"use client";

import { useCallback, useEffect, useState } from "react";

export default function useHeader() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const changeHeaderStyle = useCallback(() => {
    const { scrollY } = window;
    if (scrollY > 75) {
      setIsScrolling(true);
    }

    if (scrollY === 0) {
      setIsScrolling(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderStyle);

    return () => window.removeEventListener("scroll", changeHeaderStyle);
  }, [changeHeaderStyle]);

  return {
    isScrolling: isScrolling,
  };
}
