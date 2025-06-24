"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils/cn";

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, side = "top", children, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    side={side}
    sideOffset={8}
    className={cn(
      "z-50 rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md animate-fadeIn",
      className
    )}
    {...props}
  >
    {children}
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = "TooltipContent";
