import type { Metadata } from "next";
import { ProblemPortfolioHome } from "@/components/portfolio/ProblemPortfolioHome";

export const metadata: Metadata = {
  title: "Processos claros, produtos utilizáveis — V3",
  description: "Emanuel Santos transforma processos confusos em produtos digitais claros, utilizáveis e capazes de evoluir.",
  alternates: { canonical: "/v3" },
};

export default function V3Page() { return <ProblemPortfolioHome />; }
