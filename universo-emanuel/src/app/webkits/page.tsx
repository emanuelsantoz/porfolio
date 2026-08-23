import type { Metadata } from "next";
import { WebkitsHomePage } from "@/components/pages/webkits/WebkitsHomePage";

export const metadata: Metadata = {
  title: "Webkits",
  description: "Ferramentas rápidas para desenvolvimento e produtividade.",
};

export default function Page() {
  return <WebkitsHomePage />;
}

