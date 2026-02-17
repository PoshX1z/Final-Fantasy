import { Footer } from "@/components/Footer";
import { Header } from "@/components/shared/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <footer className="mt-80">
        <Footer />
      </footer>
    </div>
  );
}
