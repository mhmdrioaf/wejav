"use client";

import { twMerge } from "tailwind-merge";

interface IFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormField({ label, ...props }: IFormFieldProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={props.id} className="text-sm">
        {label}
      </label>
      <input
        name={props.name}
        id={props.id}
        {...props}
        className={twMerge(
          "w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:border-black transition-all duration-200 ease-in-out",
          props.className
        )}
      />
    </div>
  );
}
