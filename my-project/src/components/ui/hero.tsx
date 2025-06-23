"use client";

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-primary)] tracking-tight">
          프리미엄 라이프스타일
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-xl mx-auto">
          글로벌 브랜드 쇼핑, 미식, 영화, 라이프스타일까지 한 곳에서 경험하세요.
        </p>
      </div>
    </section>
  );
}
