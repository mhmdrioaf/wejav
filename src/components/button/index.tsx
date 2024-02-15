import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex flex-row items-center justify-center gap-px overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-background text-black hover:bg-background/75",
        primary: "bg-accent text-black hover:bg-accent/75",
        ghost: "bg-transparent text-black",
      },
      size: {
        sm: "px-1 py-1 text-xs rounded-md",
        base: "px-4 py-2 text-sm rounded-md",
        lg: "px-6 py-3 text-sm rounded-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, fullWidth = false, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          fullWidth ? "w-full" : "w-fit",
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
