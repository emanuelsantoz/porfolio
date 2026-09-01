"use client";

import Image from "next/image";
import { ArrowDownRight, ThumbsDown, ThumbsUp } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { EmanuelLogo } from "@/components/brand/EmanuelLogo";
import { NexusField } from "@/components/brand/NexusField";

const headline = ["Produtos", "digitais", "para", "problemas", "reais."];

const perspectives = [
  { id: "pessoas", theme: "Pessoas", text: "Feito de pessoas, para pessoas." },
  { id: "construcao", theme: "Construção", text: "Pessoas são o ativo mais importante de qualquer construção." },
  { id: "evolucao", theme: "Evolução", text: "Todo processo pode melhorar. Talvez o próximo comece pelo seu." },
  { id: "conhecimento", theme: "Conhecimento", text: "Busque conhecimento. É assim que você se liberta dos padrões atuais." },
  { id: "jornada", theme: "Jornada", text: "O caminho importa tanto quanto o destino. Aproveite os dois." },
  { id: "mudanca", theme: "Mudança", text: "Nunca é tarde para fazer diferente." },
];

type Reaction = "like" | "dislike";
type ReactionsByPerspective = Record<string, Reaction>;

const REACTIONS_STORAGE_KEY = "emanuel-perspective-reactions:v1";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const [perspectiveIndex, setPerspectiveIndex] = useState(0);
  const [isPerspectivePaused, setIsPerspectivePaused] = useState(false);
  const [reactions, setReactions] = useState<ReactionsByPerspective>({});
  const [hasLoadedReactions, setHasLoadedReactions] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 110, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 110, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const imageX = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-7, 7]);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  useEffect(() => {
    if (shouldReduceMotion || isPerspectivePaused) return;

    const interval = window.setInterval(() => {
      setPerspectiveIndex((current) => (current + 1) % perspectives.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, [isPerspectivePaused, shouldReduceMotion]);

  useEffect(() => {
    try {
      const storedReactions = window.localStorage.getItem(REACTIONS_STORAGE_KEY);
      if (storedReactions) setReactions(JSON.parse(storedReactions) as ReactionsByPerspective);
    } catch {
      // A experiência continua funcional mesmo se o navegador bloquear o storage.
    } finally {
      setHasLoadedReactions(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedReactions) return;

    try {
      window.localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions));
    } catch {
      // Não impedimos a interação caso o storage esteja indisponível.
    }
  }, [hasLoadedReactions, reactions]);

  const activePerspective = perspectives[perspectiveIndex];
  const activeReaction = reactions[activePerspective.id];
  const likeCount = activeReaction === "like" ? 1 : 0;

  const showNextPerspective = () => {
    setPerspectiveIndex((current) => (current + 1) % perspectives.length);
  };

  const registerReaction = (reaction: Reaction) => {
    if (activeReaction) return;
    setReactions((currentReactions) => ({ ...currentReactions, [activePerspective.id]: reaction }));
  };

  return (
    <section
      id="inicio"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="hero-stage relative isolate overflow-hidden bg-[#07111f] px-6 pb-16 pt-28 text-white lg:px-10 lg:pb-20 lg:pt-32"
    >
      <div className="hero-grid-motion absolute inset-0 opacity-45" />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.13, 1], opacity: [0.34, 0.6, 0.34] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb absolute -right-40 top-8 h-[34rem] w-[34rem] rounded-full bg-[#2166c9]/35 blur-3xl"
      />
      <div className="hero-scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#79aef4]/70 to-transparent" />

      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white lg:px-10"
      >
        <a href="#inicio" aria-label="Emanuel Santos · ES/0 — início">
          <EmanuelLogo tone="light" variant="full" className="scale-90 origin-left sm:scale-100" />
        </a>
        <div className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          <a className="portfolio-nav-link" href="#construcoes">Construções</a>
          <a className="portfolio-nav-link" href="#nexo">Pensamento</a>
          <a className="portfolio-nav-link" href="#metodo">Método</a>
          <a className="portfolio-nav-link" href="#historia">História</a>
          <a className="portfolio-nav-link" href="#contato">Contato</a>
        </div>
        <a href="#contato" className="rounded-full border border-white/25 px-4 py-2 text-xs font-medium transition hover:border-white hover:bg-white hover:text-[#07111f]">
          Vamos conversar
        </a>
      </motion.nav>

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-3xl pb-3">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-7 font-mono text-xs uppercase tracking-[0.24em] text-[#79aef4]"
          >
            Emanuel Santos · estratégia, experiência e engenharia
          </motion.p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
            {headline.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 60, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.3 + index * 0.055, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mr-[0.23em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.65 }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/72 lg:text-xl"
          >
<<<<<<< HEAD
            Transformo processos confusos em soluções que as pessoas conseguem usar, entender e continuar. Desenvolvimento é uma das formas de tornar isso real.
=======
            Sou Emanuel Santos. <strong>Desenvolvimento de Software é minha base.</strong> Conectar pessoas, contexto e tecnologia é como eu penso para transformar problemas reais em produtos digitais claros, humanos e capazes de evoluir.
>>>>>>> de9b0195c7f0a75f037753fd3125468315c61484
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.08, duration: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#contato" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f] shadow-[0_12px_32px_rgba(121,174,244,0.18)] transition hover:bg-[#dbeafe]">
              Falar sobre um projeto <ArrowDownRight size={17} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href="#construcoes" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:border-white">
              Ver construções
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
          <NexusField tone="dark" className="absolute -right-20 -top-16 -z-10 w-[24rem] opacity-70 lg:w-[30rem]" />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-5 -z-10 rounded-[2.5rem] border border-white/15"
          />
          <motion.div style={shouldReduceMotion ? undefined : { x: imageX, y: imageY }} className="overflow-hidden rounded-[2rem] bg-[#020914] shadow-[0_34px_90px_rgba(0,0,0,0.42)]">
            <Image
              src="/images/emanuel-portrait.png"
              alt="Retrato de Emanuel Santos"
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 1024px) 85vw, 42vw"
              className="aspect-[4/5] w-full object-cover object-top grayscale-[8%] transition duration-700 hover:scale-[1.025]"
            />
          </motion.div>
          <div className="absolute -bottom-10 -left-4 h-40 w-[min(19rem,80vw)] sm:w-80">
            <div aria-hidden="true" className="absolute inset-x-3 top-4 h-32 rounded-2xl border border-[#79aef4]/10 bg-[#0b1d34]/70 rotate-[-4deg]" />
            <div aria-hidden="true" className="absolute inset-x-2 top-2 h-32 rounded-2xl border border-white/[0.07] bg-[#10243f]/80 rotate-[2.5deg]" />
            <motion.div
              whileTap={{ scale: 0.99 }}
              onMouseEnter={() => setIsPerspectivePaused(true)}
              onMouseLeave={() => setIsPerspectivePaused(false)}
              className="absolute inset-x-0 top-0 rounded-2xl border border-white/10 bg-[#10243f]/95 px-4 py-3 text-left shadow-2xl backdrop-blur transition hover:border-[#79aef4]/50"
            >
              <button
                type="button"
                onClick={showNextPerspective}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79aef4]"
                aria-label="Mostrar próximo pensamento"
              >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activePerspective.text}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(3px)" }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#79aef4]">
                    <span>em construção</span>
                    <span>{String(perspectiveIndex + 1).padStart(2, "0")}/{String(perspectives.length).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-2 pr-3 text-sm font-medium leading-5 text-white/90">{activePerspective.text}</p>
                  <p className="mt-1 text-[11px] text-white/45">{activePerspective.theme} · clique para continuar</p>
                </motion.div>
              </AnimatePresence>
              </button>

              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[11px] text-white/50">{likeCount} {likeCount === 1 ? "like" : "likes"}</span>
                <div className="flex items-center gap-2" aria-label="Reagir a este pensamento">
                  <button
                    type="button"
                    onClick={() => registerReaction("like")}
                    disabled={Boolean(activeReaction)}
                    aria-label="Concordo"
                    aria-pressed={activeReaction === "like"}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79aef4] disabled:cursor-not-allowed ${activeReaction === "like" ? "border-[#79aef4] bg-[#2166c9] text-white" : "border-white/15 text-white/65 hover:border-[#79aef4]/60 hover:text-white disabled:opacity-45"}`}
                  >
                    <ThumbsUp size={13} /> Concordo
                  </button>
                  <button
                    type="button"
                    onClick={() => registerReaction("dislike")}
                    disabled={Boolean(activeReaction)}
                    aria-label="Não concordo"
                    aria-pressed={activeReaction === "dislike"}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79aef4] disabled:cursor-not-allowed ${activeReaction === "dislike" ? "border-white/40 bg-white/15 text-white" : "border-white/15 text-white/65 hover:border-white/45 hover:text-white disabled:opacity-45"}`}
                  >
                    <ThumbsDown size={13} /> Discordo
                  </button>
                </div>
              </div>
              {activeReaction ? <p className="mt-2 text-[10px] text-white/40">Sua reação foi registrada neste navegador.</p> : null}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
