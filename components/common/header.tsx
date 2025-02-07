import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DataOps</span>
          </Link>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
