"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Fingerprint, RefreshCcw } from "lucide-react";
import { Navbar } from "@/components/organisms/Navbar";
import { generateCnpj, generateCpf } from "@/lib/webkits/cpfCnpj";
import { useGamificationStore } from "@/core/store/gamificationStore";

type DocType = "cpf" | "cnpj";

export function CpfCnpjPage() {
  const unlock = useGamificationStore((s) => s.unlock);
  const [docType, setDocType] = useState<DocType>("cpf");
  const [masked, setMasked] = useState(true);
  const [value, setValue] = useState(() => generateCpf(true));

  const label = useMemo(() => (docType === "cpf" ? "CPF" : "CNPJ"), [docType]);

  const regenerate = () => {
    const next = docType === "cpf" ? generateCpf(masked) : generateCnpj(masked);
    setValue(next);
    unlock("use_webkit_cpf_cnpj");
  };

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    unlock("use_webkit_cpf_cnpj");
  };

  const onChangeDocType = (next: DocType) => {
    setDocType(next);
    const nextValue = next === "cpf" ? generateCpf(masked) : generateCnpj(masked);
    setValue(nextValue);
  };

  const onToggleMask = () => {
    const nextMasked = !masked;
    setMasked(nextMasked);
    const nextValue = docType === "cpf" ? generateCpf(nextMasked) : generateCnpj(nextMasked);
    setValue(nextValue);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 md:px-20 py-10 pt-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mb-8">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <Fingerprint size={16} />
            Webkit
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Gerador de CPF / CNPJ</h1>
          <p className="text-muted-foreground max-w-2xl">
            Gere documentos válidos para testes (não use em produção ou cadastros reais).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3 justify-between mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onChangeDocType("cpf")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    docType === "cpf" ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  CPF
                </button>
                <button
                  onClick={() => onChangeDocType("cnpj")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    docType === "cnpj" ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  CNPJ
                </button>
              </div>

              <button
                onClick={onToggleMask}
                className="px-4 py-2 rounded-lg border bg-background border-border hover:border-primary/50 transition-colors"
              >
                {masked ? "Com máscara" : "Sem máscara"}
              </button>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background/50 backdrop-blur flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Documento ({label})</p>
                <p className="text-3xl font-mono font-semibold tracking-tight">{value}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={regenerate}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-95 transition-opacity"
                >
                  Gerar <RefreshCcw size={16} />
                </button>
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background border-border hover:border-primary/50 transition-colors"
                >
                  Copiar <Copy size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <p className="font-semibold">Notas</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>- Algoritmo de dígito verificador (CPF e CNPJ).</li>
              <li>- Ideal para validação e mocks em desenvolvimento.</li>
              <li>- Não substitui um gerador oficial para casos regulatórios.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

