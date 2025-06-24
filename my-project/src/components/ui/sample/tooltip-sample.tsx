"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TooltipSample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            안내 <Info className="ml-1 h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          여기에 대한 추가 정보를 제공합니다.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
