"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const WELCOME_SEEN_KEY = "emanuel-universe-welcome-seen";
const WELCOME_RELOADED_KEY = "emanuel-universe-welcome-reloaded";
const MINIMUM_WELCOME_TIME = 1450;
const MAXIMUM_WAIT_TIME = 3600;

const preparationSteps = [
  "Organizando histórias e decisões.",
  "Preparando produtos e experiências.",
  "Deixando o Universo pronto para você.",
];

export function WelcomeLoader() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(WELCOME_SEEN_KEY)) {
        setIsVisible(false);
        return;
      }
    } catch {
      // A recepção continua funcionando mesmo se o navegador bloquear o storage.
    }

    let isCancelled = false;
    let hasFinished = false;
    const startedAt = performance.now();
    const advanceStep = window.setInterval(() => {
      setStep((currentStep) => Math.min(currentStep + 1, preparationSteps.length - 1));
    }, reduceMotion ? 250 : 460);

    const finishWelcome = () => {
      if (isCancelled || hasFinished) return;
      hasFinished = true;

      let shouldReload = false;
      try {
        shouldReload = !window.sessionStorage.getItem(WELCOME_RELOADED_KEY);
        window.sessionStorage.setItem(WELCOME_SEEN_KEY, "true");
        window.sessionStorage.setItem(WELCOME_RELOADED_KEY, "true");
      } catch {
        // Sem storage, a entrada ainda fecha normalmente; apenas não forçamos reload.
      }

      setStep(preparationSteps.length - 1);
      setIsVisible(false);

      if (shouldReload) {
        window.setTimeout(() => window.location.reload(), reduceMotion ? 0 : 360);
      }
    };

    const waitForDocument = document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));
    const waitForFonts = document.fonts?.ready?.catch(() => undefined) ?? Promise.resolve();

    void Promise.all([waitForDocument, waitForFonts]).then(() => {
      const remainingTime = Math.max(0, (reduceMotion ? 0 : MINIMUM_WELCOME_TIME) - (performance.now() - startedAt));
      window.setTimeout(finishWelcome, remainingTime);
    });

    const maximumWait = window.setTimeout(finishWelcome, reduceMotion ? 120 : MAXIMUM_WAIT_TIME);

    return () => {
      isCancelled = true;
      window.clearInterval(advanceStep);
      window.clearTimeout(maximumWait);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          aria-label="Preparando o Universo Emanuel Santos"
          aria-live="polite"
          className="welcome-loader fixed inset-0 z-[200] grid min-h-screen place-items-center overflow-hidden bg-[#07111f] px-6 text-white"
          exit={{ opacity: 0 }}
          role="status"
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="welcome-loader__grid absolute inset-0" />
          <div className="welcome-loader__glow absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-w-2xl text-center"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#79aef4]">ES/01 · Universo Emanuel Santos</p>
            <h1 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              Bem-vindo ao Universo Emanuel Santos.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Você está entrando em um lugar que vai além de um portfólio. Aqui, vai conhecer como penso e transformo problemas reais em produtos digitais.
            </p>

            <div className="mx-auto mt-11 max-w-sm text-left">
              <div className="h-px overflow-hidden bg-white/15">
                <motion.div
                  animate={{ width: `${((step + 1) / preparationSteps.length) * 100}%` }}
                  className="h-full bg-[#2f7de1]"
                  initial={{ width: "0%" }}
                  transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">{preparationSteps[step]}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
