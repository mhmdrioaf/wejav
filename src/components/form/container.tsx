"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Form({ className, ...props }: IFormProps) {
  return (
    <form className={twMerge("flex flex-col gap-4", className)} {...props}>
      {props.children}
    </form>
  );
}
