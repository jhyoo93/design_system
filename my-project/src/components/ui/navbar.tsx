"use client";

import Link from "next/link";
//import { cn } from "@/lib/utils/cn";

export function Navbar() {
  return (
    <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-semibold text-[var(--color-primary)]">
          AppStore
        </Link>
        <nav className="flex space-x-6 text-sm font-medium text-[var(--color-muted)]">
          <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">쇼핑</Link>
          <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">식음</Link>
          <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">영화관</Link>
          <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">이벤트</Link>
          <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">오시는 길</Link>
        </nav>
      </div>
    </header>
  );
}
