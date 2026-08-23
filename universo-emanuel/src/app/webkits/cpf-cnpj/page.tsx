import type { Metadata } from "next";
import { CpfCnpjPage } from "@/components/pages/webkits/CpfCnpjPage";

export const metadata: Metadata = {
  title: "Webkit | CPF/CNPJ",
  description: "Gerador de CPF e CNPJ para testes e desenvolvimento.",
};

export default function Page() {
  return <CpfCnpjPage />;
}

