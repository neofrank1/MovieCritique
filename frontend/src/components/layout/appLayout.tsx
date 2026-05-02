'use client';
import type { ReactNode } from "react";

interface AppPageLayoutProps {
  children: ReactNode;
}

export default function AppPageLayout({ children }: AppPageLayoutProps) {
  return (
    <main className="max-w-full mx-auto min-h-screen max-h-full bg-base-100 border-t border-transparent">
        {children}
    </main>
  );
}