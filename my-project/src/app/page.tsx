import { HeroSection } from "@/components/ui/hero";
import { TabsSample } from "@/components/ui/sample/tabs-sample";
import { DropdownSample } from "@/components/ui/sample/dropdown-sample";
import { SampleDialog } from "@/components/ui/sample/dialog-sample";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="min-h-screen px-6 py-12 bg-[var(--color-background)] text-[var(--color-foreground)] space-y-10">
        {/* 상단 툴바 */}
        <div className="flex justify-end gap-2 mb-8">
          <DropdownSample />
          <SampleDialog />
        </div>

        {/* 탭 섹션 */}
        <TabsSample />
      </main>
    </>
  );
}
