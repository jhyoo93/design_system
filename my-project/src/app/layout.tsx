import "./globals.css";
import NavigationBar from "@/components/ui/navigation-bar";
import {Footer} from "@/components/ui/footer"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-[var(--color-foreground)]">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}