import { Footer } from "@/components/features/layout/footer";
import { Navbar } from "@/components/features/layout/navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
