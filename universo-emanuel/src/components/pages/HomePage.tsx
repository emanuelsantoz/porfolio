"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { usePersonaStore } from "@/core/store/personaStore";
import { PersonaType } from "@/core/types/persona";
import { PERSONAS } from "@/core/personas/personas";
import { motion } from "framer-motion";
import { Brain, Bug, Code, Cpu, Database, Palette, Smartphone, Terminal } from "lucide-react";

import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ContactSection } from "@/components/organisms/ContactSection";

const iconByPersona: Record<PersonaType, any> = {
  fullstack: Code,
  "ux-ui": Palette,
  mobile: Smartphone,
  backend: Terminal,
  qa: Bug,
  automation: Cpu,
  data: Database,
  ai: Brain,
};

export function HomePage({ initialPersona }: { initialPersona?: PersonaType }) {
  const router = useRouter();
  const { activePersona, setPersona } = usePersonaStore();

  useEffect(() => {
    if (!initialPersona) return;
    setPersona(initialPersona);
  }, [initialPersona, setPersona]);

  const personas = useMemo(() => {
    return PERSONAS.map((p) => ({
      ...p,
      icon: iconByPersona[p.id],
    }));
  }, []);

  const onSelectPersona = (persona: PersonaType) => {
    setPersona(persona);
    if (persona === "fullstack") {
      router.push("/");
      return;
    }
    router.push(`/p/${persona}`);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start relative">
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-8"
          >
            <p className="text-xl text-muted-foreground">Selecione um modo para explorar o universo:</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {personas.map((persona) => {
              const Icon = persona.icon;
              const isActive = activePersona === persona.id;

              return (
                <motion.button
                  key={persona.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectPersona(persona.id)}
                  className={`
                    flex flex-col items-center justify-center p-6 rounded-xl border transition-all
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-lg ring-2 ring-offset-2"
                        : "bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                >
                  <Icon className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">{persona.label}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-12 p-8 border rounded-lg max-w-2xl mx-auto bg-background/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">Contexto do Universo</h2>
            {activePersona === "fullstack" && (
              <p>Olá! Sou um desenvolvedor Fullstack focado em soluções robustas. Explore os outros modos para ver minhas habilidades específicas.</p>
            )}
            {activePersona === "backend" && (
              <p className="font-mono text-green-500">
                &gt; System.init(Backend_Architecture);<br />
                &gt; Loading microservices...<br />
                &gt; Connection established.<br />
                Aqui o foco é performance, arquitetura limpa e código sólido.
              </p>
            )}
            {activePersona === "ux-ui" && (
              <p className="font-handwriting text-lg" style={{ fontFamily: "var(--font-patrick)" }}>
                Design não é apenas como se parece, é como funciona. <br />
                Vamos criar experiências memoráveis juntos?
              </p>
            )}
            {activePersona === "mobile" && (
              <div className="text-center space-y-4">
                <p className="text-lg">📱 Mobile First</p>
                <p className="text-sm opacity-70">
                  O layout mudou para simular um dispositivo móvel.
                  <br />
                  Desenvolvimento em Flutter, iOS e Android.
                </p>
              </div>
            )}
            {activePersona === "qa" && (
              <div className="space-y-2">
                <p className="text-green-600 font-bold">✓ 124 Tests Passed</p>
                <p className="text-red-500 font-bold">⚠ 1 Bug Detected</p>
                <p className="text-sm">Qualidade de software é inegociável. Testes E2E, Unitários e de Integração.</p>
              </div>
            )}
            {activePersona === "automation" && (
              <div className="font-mono text-xs p-4 bg-black/80 rounded border border-gray-700 text-blue-400">
                [PIPELINE] Building... 100%<br />
                [DEPLOY] Production... SUCCESS<br />
                Automação de processos e CI/CD.
              </div>
            )}
            {activePersona === "data" && (
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 border border-primary/20 bg-primary/5">SELECT * FROM skills;</div>
                <div className="p-2 border border-primary/20 bg-primary/5">WHERE experience &gt; 4;</div>
                <p className="col-span-2 text-center mt-2">SQL Server, Oracle, MongoDB</p>
              </div>
            )}
            {activePersona === "ai" && (
              <div className="border-l-4 border-purple-500 pl-4 italic">
                &quot;A IA não vai te substituir. Um humano usando IA vai.&quot;
                <br />
                <span className="text-sm not-italic opacity-70">- Integração com LLMs e Prompt Engineering</span>
              </div>
            )}
          </div>
        </div>

        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
