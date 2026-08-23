import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Emanuel Santos | Produtos digitais para problemas reais",
  description:
    "Emanuel Santos cria produtos digitais que transformam problemas reais em experiências claras, úteis e sustentáveis.",
};

export default function Home() {
  return <HomePage />;
}
