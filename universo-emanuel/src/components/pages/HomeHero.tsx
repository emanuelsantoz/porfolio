"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { EmanuelLogo } from "@/components/brand/EmanuelLogo";
import { NexusField } from "@/components/brand/NexusField";

const headline = ["Ideias", "ganham", "força", "quando", "se", "tornam", "úteis", "para", "alguém."];

const perspectives = [
  { theme: "Pessoas", text: "Feito de pessoas, para pessoas." },
  { theme: "Construção", text: "Pessoas são o ativo mais importante de qualquer construção." },
  { theme: "Evolução", text: "Todo processo pode melhorar. Talvez o próximo comece pelo seu." },
  { theme: "Conhecimento", text: "Busque conhecimento. É assim que você se liberta dos padrões atuais." },
  { theme: "Jornada", text: "O caminho importa tanto quanto o destino. Aproveite os dois." },
  { theme: "Mudança", text: "Nunca é tarde para fazer diferente." },
];

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const [perspectiveIndex, setPerspectiveIndex] = useState(0);
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
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setPerspectiveIndex((current) => (current + 1) % perspectives.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const activePerspective = perspectives[perspectiveIndex];

  return (
    <section
      id="inicio"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="hero-stage relative isolate overflow-hidden bg-[#07111f] px-6 pb-20 pt-32 text-white lg:px-10 lg:pb-28 lg:pt-40"
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
          <a className="portfolio-nav-link" href="#produtos">Produtos</a>
          <a className="portfolio-nav-link" href="#nexo">Como penso</a>
          <a className="portfolio-nav-link" href="#trabalhos">Trabalhos</a>
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
            ES/0 · Desenvolvimento, conexões e produtos digitais
          </motion.p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
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
            Sou Emanuel Santos. <strong>Desenvolvimento de Software é minha base.</strong> Conectar pessoas, contexto e tecnologia é como eu penso para transformar problemas reais em produtos digitais claros, humanos e capazes de evoluir.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.08, duration: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#projetos" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f] shadow-[0_12px_32px_rgba(121,174,244,0.18)] transition hover:bg-[#dbeafe]">
              Ver produtos <ArrowDownRight size={17} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href="#historia" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:border-white">
              Minha trajetória
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
          <div className="absolute -bottom-6 -left-4 h-32 w-[min(19rem,80vw)] sm:w-80">
            <div aria-hidden="true" className="absolute inset-x-3 top-4 h-24 rounded-2xl border border-[#79aef4]/10 bg-[#0b1d34]/70 rotate-[-4deg]" />
            <div aria-hidden="true" className="absolute inset-x-2 top-2 h-24 rounded-2xl border border-white/[0.07] bg-[#10243f]/80 rotate-[2.5deg]" />
            <motion.button
              type="button"
              onClick={() => setPerspectiveIndex((current) => (current + 1) % perspectives.length)}
              whileTap={{ scale: 0.98 }}
              className="absolute inset-x-0 top-0 min-h-28 rounded-2xl border border-white/10 bg-[#10243f]/95 px-4 py-3 text-left shadow-2xl backdrop-blur transition hover:border-[#79aef4]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79aef4]"
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
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
