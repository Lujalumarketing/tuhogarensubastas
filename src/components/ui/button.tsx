import { Slot } from "@radix-ui/react-slot";
import type React from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "border-transparent bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:brightness-110",
  outline:
    "border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-muted/50"
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-xs",
  lg: "h-14 px-8 text-base"
};

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/35 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
