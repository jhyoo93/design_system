import Image from "next/image";
import { Card } from "@/components/ui/card";

export function CardSample() {
  return (
    <Card className="max-w-sm">
      <div className="w-full h-[180px] relative mb-4 rounded-md overflow-hidden">
        <Image
          src="/sample.jpg"
          alt="이미지"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-primary)]">App Store</h3>
      <p className="text-sm text-[var(--color-muted)] mt-2">
        프리미엄 브랜드와 함께하는 쇼핑 공간입니다.
      </p>
    </Card>
  );
}
