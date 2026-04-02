import type React from "react";
import { cn } from "../../lib/utils";

type CheckTone = "accent" | "primary";

interface CheckItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  tone?: CheckTone;
}

const toneClasses: Record<CheckTone, string> = {
  accent: "border-accent bg-gradient-to-br from-amber-100/80 to-orange-100/60 text-accent-foreground",
  primary: "border-primary/30 bg-gradient-to-br from-primary/15 to-blue-500/10 text-primary"
};

export function CheckItem({ className, tone = "accent", children, ...props }: CheckItemProps) {
  return (
    <li className={cn("flex items-start gap-3 text-foreground/90", className)} {...props}>
      <span
        className={cn(
          "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border shadow-sm",
          toneClasses[tone]
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 10.5L8.25 14L15.5 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex-1">{children}</span>
    </li>
  );
}
