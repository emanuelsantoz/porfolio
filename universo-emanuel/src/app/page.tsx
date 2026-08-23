import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description: "O ecossistema digital de Emanuel Santos: explore as personas e projetos.",
};

export default function Home() {
  return <HomePage />;
}
