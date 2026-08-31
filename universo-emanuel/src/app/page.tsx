import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "ES/0 | Desenvolvimento e conexões",
  description:
    "Emanuel Santos usa desenvolvimento como base para conectar pessoas, contexto e tecnologia em produtos digitais úteis.",
};

export default function Home() {
  return <HomePage />;
}
