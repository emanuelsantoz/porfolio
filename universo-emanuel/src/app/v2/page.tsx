import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "ES/0 — versão V2",
  description: "Versão V2 do portfólio ES/0 de Emanuel Santos.",
  alternates: { canonical: "/v2" },
};

export default function V2Page() { return <HomePage />; }
