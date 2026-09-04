"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function VersionToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  const isV2 = pathname === "/v2";
  const active = tone === "light" ? "bg-white text-[#07111f] shadow-sm" : "bg-[#07111f] text-white shadow-sm";
  const inactive = tone === "light" ? "text-white/65 hover:text-white" : "text-slate-500 hover:text-[#07111f]";

  return <nav aria-label="Escolher versão do portfólio" className={`inline-flex rounded-full border p-1 text-[10px] font-semibold tracking-[0.12em] ${tone === "light" ? "border-white/25 bg-white/10" : "border-[#07111f]/15 bg-white"}`}>
    <Link href="/v2" aria-current={isV2 ? "page" : undefined} className={`rounded-full px-2.5 py-1.5 transition ${isV2 ? active : inactive}`}>V2</Link>
    <Link href="/v3" aria-current={!isV2 ? "page" : undefined} className={`rounded-full px-2.5 py-1.5 transition ${!isV2 ? active : inactive}`}>V3</Link>
  </nav>;
}
