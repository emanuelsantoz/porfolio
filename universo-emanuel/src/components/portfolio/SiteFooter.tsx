import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { EmanuelLogo } from "@/components/brand/EmanuelLogo";

export function SiteFooter() {
  return <footer className="bg-[#07111f] px-6 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><EmanuelLogo tone="light" variant="compact" /><div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/65"><a href="mailto:emanuelsantossouzajesus@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={16} /> E-mail</a><a href="https://www.linkedin.com/in/emanu-ell/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={16} /> LinkedIn</a><a href="https://github.com/emanuelsantoz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={16} /> GitHub</a><Link href="/brand" className="hover:text-white">Marca</Link></div></div></footer>;
}
