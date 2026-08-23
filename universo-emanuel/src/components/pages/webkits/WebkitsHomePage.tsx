"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, FileText, Fingerprint, GraduationCap, ShieldCheck, Wrench } from "lucide-react";
import { Navbar } from "@/components/organisms/Navbar";

const tools = [
  {
    href: "/webkits/cpf-cnpj",
    title: "CPF / CNPJ",
    description: "Gerador rápido com opção de máscara.",
    icon: Fingerprint,
  },
  {
    href: "/webkits/json-yaml",
    title: "JSON ↔ YAML",
    description: "Converta e formate com um clique.",
    icon: Code,
  },
  {
    href: "/webkits/lorem",
    title: "Lorem Ipsum",
    description: "Gere texto de placeholder para layouts e docs.",
    icon: FileText,
  },
];

export function WebkitsHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 md:px-20 py-10 pt-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-10">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <Wrench size={16} />
            Webkits
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Ferramentas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma coleção de utilitários rápidos para o dia a dia: desenvolvimento, validações e produtividade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <tool.icon className="text-primary" size={22} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">{tool.description}</p>
              <Link
                href={tool.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-95 transition-opacity"
              >
                Abrir <ShieldCheck size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-border bg-background/50 backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="text-primary" size={22} />
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Dica</p>
              <p className="text-sm text-muted-foreground">
                Essas ferramentas são locais e não enviam dados para servidor. Use como um “canivete suíço” dentro do teu portfólio.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

