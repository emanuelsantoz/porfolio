import type { SVGProps } from "react";
import { EmanuelIcon } from "@/components/brand/EmanuelIcon";

type Tone = "light" | "dark" | "blue";
type Variant = "full" | "compact" | "mark";

const toneClass: Record<Tone, string> = {
  light: "text-white",
  dark: "text-[#07111f]",
  blue: "text-[#2166c9]",
};

const iconToneClass: Record<Tone, string> = {
  light: "text-[#2f7de1]",
  dark: "text-[#2166c9]",
  blue: "text-[#2166c9]",
};

export function EmanuelMark({ className = "", title, ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return <svg viewBox="0 0 104 104" fill="none" aria-hidden={title ? undefined : true} role={title ? "img" : undefined} className={className} {...props}>
    {title && <title>{title}</title>}
    <path fill="currentColor" d="M31 16h56c3.8 0 6.7 3.4 5.8 7.1-1.2 5.4-6 9.4-11.5 9.4H42c-7.2 0-12.2 4.9-12.2 12.1v17.8c0 7.1 5 12.1 12.2 12.1h39.3c5.5 0 10.3 4 11.5 9.4.9 3.7-2 7.1-5.8 7.1H31c-11.7 0-20-8.4-20-20.1V36.1C11 24.4 19.3 16 31 16Z" />
    <path fill="currentColor" d="M17.6 46.2H64l-6.8 7 7.1 6.6H33.1c-8.2 0-14.2-5.6-15.5-13.6Z" />
  </svg>;
}

export function EmanuelLogo({ tone = "light", variant = "full", className = "" }: { tone?: Tone; variant?: Variant; className?: string }) {
  if (variant === "mark") return <EmanuelMark title="Emanuel Santos" className={`${toneClass[tone]} ${className}`} />;

  if (variant === "compact") {
    return <div className={`inline-flex items-center gap-3 ${toneClass[tone]} ${className}`}>
      <EmanuelIcon className={`h-9 w-9 shrink-0 ${iconToneClass[tone]}`} />
      <span className="font-[family-name:var(--font-display)] text-base font-medium tracking-[-0.04em]">Emanuel Santos</span>
    </div>;
  }

  return <div className={`inline-flex items-center gap-3 ${toneClass[tone]} ${className}`}>
    <EmanuelIcon className={`h-10 w-10 shrink-0 ${iconToneClass[tone]}`} />
    <span className="flex flex-col leading-none">
      <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.045em]">EMANUEL</span>
      <span className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] opacity-75">SANTOS · ES/0</span>
    </span>
  </div>;
}
