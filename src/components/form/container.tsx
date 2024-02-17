"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export default function Form({ ...props }: IFormProps) {
  return (
    <form
      className={twMerge(
        "w-full flex flex-col gap-4 px-8 py-4",
        props.className
      )}
      {...props}
    >
      {props.children}
    </form>
  );
}
