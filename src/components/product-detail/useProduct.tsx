"use client";

import React from "react";

export type TProductContext = {
  state: {
    quantity: number;
    total_price: number;
  };

  handler: {
    onQuantityChange: (action: "increase" | "decrease") => void;
    onQuantityInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
};

export const ProductContext = React.createContext<TProductContext | null>(null);

interface IProductProviderProps {
  product: TProduct;
  children: React.ReactNode;
}

export function ProductProvider({ product, children }: IProductProviderProps) {
  const [quantity, setQuantity] = React.useState<number>(1);
  const [totalPrice, setTotalPrice] = React.useState<number>(product.price);

  const onQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prevQty) => prevQty + 1);
      setTotalPrice((prevPrice) => prevPrice + product.price);
    } else {
      setQuantity((prev) => {
        if (prev <= 1) {
          setTotalPrice(product.price);
          return 1;
        } else {
          const newQty = prev - 1;
          setTotalPrice(product.price * newQty);
          return newQty;
        }
      });
    }
  };

  const onQuantityInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    if (Number.isNaN(value) || value < 1) {
      setQuantity(1);
      setTotalPrice(product.price);
    } else {
      setQuantity(value);
      setTotalPrice(value * product.price);
    }
  };

  const value: TProductContext = {
    state: {
      quantity,
      total_price: totalPrice,
    },
    handler: {
      onQuantityChange,
      onQuantityInputChange,
    },
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
