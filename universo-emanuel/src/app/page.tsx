import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Processos claros, produtos utilizáveis",
  description: "Emanuel Santos transforma processos confusos em produtos digitais claros, utilizáveis e capazes de evoluir.",
  alternates: { canonical: "/" },
};

export default function Home() {
  redirect("/v3");
}
