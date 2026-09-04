import type { ReactNode } from "react";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-[#f8f7f3] text-[#07111f]"><SiteHeader />{children}<SiteFooter /></main>;
}
