import { Header } from "@/components/common/header";
import { Hero } from "@/components/common/hero";
import { Features } from "@/components/common/features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
