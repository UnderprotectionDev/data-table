import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Database, LogIn } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DataOps</span>
          </Link>
          <SignedOut>
            <SignInButton
              forceRedirectUrl="/dashboard"
              signUpForceRedirectUrl="/dashboard"
            >
              <Button size="lg" className="flex items-center">
                <LogIn className="h-5 w-5" />
                Log In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
