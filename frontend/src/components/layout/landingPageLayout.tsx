'use client';
import type { ReactNode } from "react";

interface LandingPageLayoutProps {
  children: ReactNode;
}

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <main className="max-w-full mx-auto min-h-screen max-h-full bg-base-100 border-t border-transparent">
        {children}
    </main>
  );
}
