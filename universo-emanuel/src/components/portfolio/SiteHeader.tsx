import Link from "next/link";
import { EmanuelLogo } from "@/components/brand/EmanuelLogo";
import { VersionToggle } from "@/components/portfolio/VersionToggle";

const links = [
  { href: "/v3", label: "Início" },
  { href: "/casos", label: "Casos" },
  { href: "/como-trabalho", label: "Como trabalho" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[#07111f]/10 bg-[#f8f7f3]/95 px-6 backdrop-blur lg:px-10">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5">
        <Link href="/v3" aria-label="Ir para o início"><EmanuelLogo tone="dark" variant="compact" /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-slate-600 transition hover:text-[#2166c9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9]">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3"><VersionToggle tone="dark" /><Link href="/contato" className="hidden rounded-full bg-[#07111f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2166c9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] focus-visible:ring-offset-2 sm:inline-flex">Conversar</Link></div>
      </div>
      <nav aria-label="Navegação principal mobile" className="flex gap-4 overflow-x-auto border-t border-[#07111f]/10 py-3 text-sm md:hidden">
        {links.map((link) => <Link key={link.href} href={link.href} className="shrink-0 text-slate-600 transition hover:text-[#2166c9]">{link.label}</Link>)}
      </nav>
    </header>
  );
}
