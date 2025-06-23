import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero";
import { TabsSample } from "@/components/ui/tabs-sample";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="min-h-screen px-6 py-12 bg-[var(--color-background)] text-[var(--color-foreground)]">
        <h2 className="text-xl font-bold mb-6">카테고리별 추천</h2>
        <TabsSample />
      </main>
    </>
  );
}
