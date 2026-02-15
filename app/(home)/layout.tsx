import { Footer } from "@/components/Footer";
import { Header } from "@/components/shared/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto">
        <Header />
      </div>
      <main className="flex-1 max-w-7xl mx-auto">{children}</main>
      <footer className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
