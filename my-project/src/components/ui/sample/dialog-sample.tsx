"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function SampleDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">모달</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-lg font-semibold mb-2">
          브랜드 소개
        </DialogTitle>
        <DialogDescription className="text-sm text-[var(--color-muted)] mb-4">
          Brand Plaza는 라이프스타일을 위한 공간입니다.
        </DialogDescription>
        <div className="text-sm text-[var(--color-foreground)]">
          프리미엄 쇼핑, F&B, 문화 체험이 가능한 복합몰로, 누구나 머물고 싶은
          공간을 지향합니다.
        </div>
      </DialogContent>
    </Dialog>
  );
}
