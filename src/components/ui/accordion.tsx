import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type React from "react";
import { cn } from "../../lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return (
      <AccordionPrimitive.Item
        className={cn(
          "overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-white/85 to-blue-50/50 shadow-lg shadow-blue-500/5 focus-within:border-primary/50 focus-within:shadow-xl transition-all duration-300",
          className
        )}
        {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          className={cn(
            "group flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground transition-all duration-300 hover:text-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-offset-2",
            className
          )}
          {...props}
        >
          <span className="flex-1">{children}</span>
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-data-[state=open]:rotate-45 sm:h-7 sm:w-7">
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content 
      className={cn("px-5 pb-5 text-muted-foreground leading-relaxed sm:text-[0.98rem]", className)} 
      {...props}
    >
      <div className="pt-1">{children}</div>
    </AccordionPrimitive.Content>
  );
}
