import type { Metadata } from "next";
import { LoremPage } from "@/components/pages/webkits/LoremPage";

export const metadata: Metadata = {
  title: "Webkit | Lorem Ipsum",
  description: "Gerador de Lorem Ipsum para protótipos e placeholders.",
};

export default function Page() {
  return <LoremPage />;
}

