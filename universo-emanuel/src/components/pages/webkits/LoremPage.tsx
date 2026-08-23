"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Copy, FileText, RefreshCcw } from "lucide-react";
import { Navbar } from "@/components/organisms/Navbar";
import { generateLorem } from "@/lib/webkits/lorem";
import { useGamificationStore } from "@/core/store/gamificationStore";

export function LoremPage() {
  const unlock = useGamificationStore((s) => s.unlock);
  const [paragraphs, setParagraphs] = useState(3);
  const [sentencesPerParagraph, setSentencesPerParagraph] = useState(4);
  const [wordsPerSentence, setWordsPerSentence] = useState(10);
  const [nonce, setNonce] = useState(0);

  const text = useMemo(() => {
    void nonce;
    return generateLorem({ paragraphs, sentencesPerParagraph, wordsPerSentence });
  }, [paragraphs, sentencesPerParagraph, wordsPerSentence, nonce]);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    unlock("use_webkit_lorem");
  };

  const regenerate = () => {
    setNonce((n) => n + 1);
    unlock("use_webkit_lorem");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 md:px-20 py-10 pt-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mb-8">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <FileText size={16} />
            Webkit
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Gerador de Lorem Ipsum</h1>
          <p className="text-muted-foreground max-w-2xl">
            Gere texto para protótipos, placeholders e descrições temporárias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Parágrafos</p>
              <input
                type="number"
                min={1}
                max={12}
                value={paragraphs}
                onChange={(e) => setParagraphs(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg border bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Frases por parágrafo</p>
              <input
                type="number"
                min={2}
                max={12}
                value={sentencesPerParagraph}
                onChange={(e) => setSentencesPerParagraph(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg border bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Palavras por frase</p>
              <input
                type="number"
                min={4}
                max={30}
                value={wordsPerSentence}
                onChange={(e) => setWordsPerSentence(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg border bg-background border-border"
              />
            </div>

            <div className="flex gap-3">
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

          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-2">Resultado</p>
            <textarea
              readOnly
              value={text}
              className="w-full min-h-[420px] resize-y p-3 rounded-xl border border-border bg-background font-serif text-sm outline-none"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
