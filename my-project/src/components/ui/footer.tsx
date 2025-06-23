"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "bg-[var(--color-surface)] border-t border-[var(--color-border)] text-sm text-[var(--color-muted)]",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">Brand Plaza</h2>
            <p className="max-w-xs text-xs leading-relaxed">
              프리미엄 브랜드와 함께하는 라이프스타일 쇼핑 공간.  
              누구나 머물고 싶은 문화의 중심지.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <h4 className="font-bold text-[var(--color-foreground)] mb-2">정보</h4>
              <ul className="space-y-1">
                <li><a href="#">회사 소개</a></li>
                <li><a href="#">공지사항</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-foreground)] mb-2">고객지원</h4>
              <ul className="space-y-1">
                <li><a href="#">자주 묻는 질문</a></li>
                <li><a href="#">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[var(--color-foreground)] mb-2">정책</h4>
              <ul className="space-y-1">
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-border)] pt-4">
          <div className="text-xs text-[var(--color-muted)] mb-4 md:mb-0">
            <p>서울특별시 강남구 테크로 123, 브랜드플라자몰</p>
            <p>© 2025 Brand Plaza. All rights reserved.</p>
          </div>

          {/* SNS icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[var(--color-primary)]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--color-primary)]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[var(--color-primary)]">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
