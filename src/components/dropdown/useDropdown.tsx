"use client";

import React from "react";

export type TDropdownContext = {
  state: {
    open: boolean;
  };
  handler: {
    handleOpen: () => void;
    handleClose: () => void;
  };
};

export const DropdownContext = React.createContext<TDropdownContext | null>(null);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const value = {
    state: { open },
    handler: { handleOpen, handleClose },
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}
