import type { Metadata } from "next";
import { JsonYamlPage } from "@/components/pages/webkits/JsonYamlPage";

export const metadata: Metadata = {
  title: "Webkit | JSON ↔ YAML",
  description: "Conversor de JSON e YAML com formatação legível.",
};

export default function Page() {
  return <JsonYamlPage />;
}

