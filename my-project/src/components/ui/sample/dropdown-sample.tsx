"use client";

import { useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function DropdownSample() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
            ref={buttonRef}
            variant="outline"
            className="inline-flex items-center gap-2"
            >
            카테고리 <ChevronDown className="w-4 h-4" />
        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent triggerRef={buttonRef}>
        <DropdownMenuItem>쇼핑</DropdownMenuItem>
        <DropdownMenuItem>식음</DropdownMenuItem>
        <DropdownMenuItem>영화관</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
