"use client";

import { twMerge } from "tailwind-merge";
import {
  DropdownContext,
  DropdownProvider,
  TDropdownContext,
} from "./useDropdown";
import { useContext } from "react";

interface IDropdownTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function DropdownTrigger({ children, ...props }: IDropdownTriggerProps) {
  const { handler } = useContext(DropdownContext) as TDropdownContext;
  return (
    <button onClick={handler.handleOpen} {...props}>
      {children}
    </button>
  );
}

interface IDropdownContent extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function DropdownContent({
  children,
  className,
  ...props
}: IDropdownContent) {
  const { state, handler } = useContext(DropdownContext) as TDropdownContext;
  return state.open ? (
    <div
      className={twMerge(
        "z-30 flex flex-col gap-4 px-4 rounded-lg py-4 border border-border bg-background overflow-hidden absolute top-14 -left-8",
        className
      )}
      onMouseLeave={handler.handleClose}
      {...props}
    >
      {children}
    </div>
  ) : null;
}

interface IDropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function DropdownItem({
  children,
  className,
  ...props
}: IDropdownItemProps) {
  return (
    <div
      className={twMerge(
        "w-full px-4 text-black text-sm py-2 inline-flex items-center justify-center gap-1 border border-border rounded-md hover:bg-neutral-100 hover:border-black/55 transition-all duration-150 ease-in-out select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} // TODO: Add conditional rendering for the dropdown content

interface IDropdown extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Dropdown({ children, className, ...props }: IDropdown) {
  return (
    <DropdownProvider>
      <div className={twMerge("relative", className)} {...props}>
        {children}
      </div>
    </DropdownProvider>
  );
}
