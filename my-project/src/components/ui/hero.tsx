"use client";

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-[var(--color-surface)] dark:bg-[var(--color-background)] border-b border-[var(--color-border)]">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">
          프리미엄 라이프스타일
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-xl mx-auto">
          글로벌 브랜드 쇼핑, 미식, 영화, 라이프스타일까지 한 곳에서 경험하세요.
        </p>
      </div>
    </section>
  );
}
