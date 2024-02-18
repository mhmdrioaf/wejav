"use client";

import React from "react";

export type TProductContext = {
  state: {
    quantity: number;
    total_price: number;
    active_image: string;
    showImagesModal: boolean;
  };

  handler: {
    onQuantityChange: (action: "increase" | "decrease") => void;
    onQuantityInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onImageClick: (image: string) => void;
    onShowImagesModal: (image: string) => void;
    onHideImagesModal: () => void;
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
  const [showImagesModal, setShowImagesModal] = React.useState<boolean>(false);
  const [activeImage, setActiveImage] = React.useState<string>(
    product.images[0]
  );

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

  const onImageClick = (image: string) => {
    setActiveImage(image);
  };

  const onShowImagesModal = (image: string) => {
    setActiveImage(image);
    setShowImagesModal(true);
  };

  const onHideImagesModal = () => {
    setShowImagesModal(false);
  };

  const value: TProductContext = {
    state: {
      quantity,
      total_price: totalPrice,
      active_image: activeImage,
      showImagesModal,
    },
    handler: {
      onQuantityChange,
      onQuantityInputChange,
      onImageClick,
      onShowImagesModal,
      onHideImagesModal,
    },
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
