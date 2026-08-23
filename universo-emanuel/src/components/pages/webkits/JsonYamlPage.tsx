"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Copy, RefreshCcw } from "lucide-react";
import { Navbar } from "@/components/organisms/Navbar";
import { convertText, WebkitFormat } from "@/lib/webkits/jsonYaml";
import { useGamificationStore } from "@/core/store/gamificationStore";

export function JsonYamlPage() {
  const unlock = useGamificationStore((s) => s.unlock);
  const [from, setFrom] = useState<WebkitFormat>("json");
  const [to, setTo] = useState<WebkitFormat>("yaml");
  const [input, setInput] = useState<string>('{\n  "hello": "world"\n}');
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const placeholder = useMemo(() => {
    return from === "json"
      ? '{\n  "name": "Universo Emanuel",\n  "persona": "backend"\n}'
      : "name: Universo Emanuel\npersona: backend\n";
  }, [from]);

  const runConversion = useCallback((nextInput: string, nextFrom: WebkitFormat, nextTo: WebkitFormat) => {
    try {
      const converted = convertText(nextInput, nextFrom, nextTo);
      setOutput(converted);
      setError(null);
      if (nextInput.trim()) unlock("use_webkit_json_yaml");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao converter.");
      setOutput("");
    }
  }, [unlock]);

  useEffect(() => {
    runConversion(input, from, to);
  }, [from, to, input, runConversion]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setInput(output || input);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    unlock("use_webkit_json_yaml");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 md:px-20 py-10 pt-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mb-8">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <Code2 size={16} />
            Webkit
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">JSON ↔ YAML</h1>
          <p className="text-muted-foreground max-w-2xl">
            Converta entre formatos e mantenha a formatação legível. Ideal para configs, pipelines e exemplos em docs.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as WebkitFormat)}
            className="px-3 py-2 rounded-lg border bg-background border-border"
          >
            <option value="json">JSON</option>
            <option value="yaml">YAML</option>
          </select>
          <span className="text-muted-foreground">→</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value as WebkitFormat)}
            className="px-3 py-2 rounded-lg border bg-background border-border"
          >
            <option value="yaml">YAML</option>
            <option value="json">JSON</option>
          </select>

          <button
            onClick={swap}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background border-border hover:border-primary/50 transition-colors"
          >
            Inverter <RefreshCcw size={16} />
          </button>

          <button
            onClick={copy}
            disabled={!output}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-50 hover:opacity-95 transition-opacity"
          >
            Copiar saída <Copy size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-4">
            <p className="text-sm text-muted-foreground mb-2">Entrada ({from.toUpperCase()})</p>
            <textarea
              value={input}
              onChange={(e) => {
                const next = e.target.value;
                setInput(next);
                runConversion(next, from, to);
              }}
              placeholder={placeholder}
              className="w-full min-h-[360px] resize-y p-3 rounded-xl border border-border bg-background font-mono text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="bg-card border border-border rounded-2xl p-4">
            <p className="text-sm text-muted-foreground mb-2">Saída ({to.toUpperCase()})</p>
            <textarea
              value={error ? `Erro: ${error}` : output}
              readOnly
              className={`w-full min-h-[360px] resize-y p-3 rounded-xl border border-border bg-background font-mono text-sm outline-none ${
                error ? "text-red-500" : ""
              }`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
