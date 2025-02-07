import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              Powerful Data Operations Made Simple
            </h1>
            <p className="mx-auto max-w-[700px] text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              Search, analyze, and visualize your data with ease. Our platform
              provides intuitive tools for all your data needs.
            </p>
          </div>
          <div className="space-x-4 pt-6">
            <Button size="lg" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
