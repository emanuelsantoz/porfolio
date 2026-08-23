import type { Metadata } from "next";
import { BadgesPage } from "@/components/pages/BadgesPage";

export const metadata: Metadata = {
  title: "Badges",
  description: "Conquistas e easter eggs desbloqueados enquanto explora o Universo Emanuel.",
};

export default function Page() {
  return <BadgesPage />;
}

